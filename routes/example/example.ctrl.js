/** @format */

const libKakaoWork = require("../../libs/kakaoWork");

const sendMessage = async (req, res, next) => {
  // 유저 목록 검색 (1)
  const users = await libKakaoWork.getUserList();

  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );

  // 생성된 채팅방에 메세지 전송 (3)
  const messages = await Promise.all([
    conversations.map((conversation) =>
      libKakaoWork.sendMessage({
        conversationId: conversation.id,
        text: "설문조사 이벤트",
        blocks: [
          {
            type: "header",
            text: "☕ 사내 카페 만족도 조사 🥤",
            style: "blue",
          },
          {
            type: "text",
            text:
              "어느덧 사내카페가 바뀐지 한달이 되었습니다.\n구르미들이 카페를 이용하고 계신지 의견을 들어보고자 설문 조사를 진행해봅니다!!\n설문에 참여하면 푸짐한 경품 찬스가있으니 상품 꼭 받아가세요! 🎁",
            markdown: true,
          },
          {
            type: "button",
            action_type: "call_modal",
            value: "cafe_survey",
            text: "설문 참여하기",
            style: "default",
          },
        ],
      })
    ),
  ]);

  // 응답값은 자유롭게 작성하셔도 됩니다.
  res.json({
    result: true,
  });
};

const sendModal = async (req, res, next) => {
  console.log(req.body);
  const { message, value } = req.body;

  switch (value) {
    case "cafe_survey":
      // 설문조사용 모달 전송 (3)
      return res.json({
        view: {
          title: "설문조사",
          accept: "설문조사 전송하기",
          decline: "취소",
          value: "cafe_survey_results",
          blocks: [
            {
              type: "label",
              text: "카페 평점을 알려주세요",
              markdown: false,
            },
            {
              type: "select",
              name: "rating",
              required: true,
              options: [
                {
                  text: "1점",
                  value: "1",
                },
                {
                  text: "2점",
                  value: "2",
                },
                {
                  text: "3점",
                  value: "3",
                },
                {
                  text: "4점",
                  value: "4",
                },
                {
                  text: "5점",
                  value: "5",
                },
              ],
              placeholder: "평점",
            },
            {
              type: "label",
              text: "바라는 점이 있다면 알려주세요!",
              markdown: false,
            },
            {
              type: "input",
              name: "wanted",
              required: false,
              placeholder: "ex) 와플을 팔면 좋겠습니다",
            },
          ],
        },
      });
      break;
    default:
  }

  res.json({});
};

const sendResult = async (req, res, next) => {
  console.log(req.body);
  const { message, actions, action_time, value } = req.body;

  switch (value) {
    case "cafe_survey_results":
      // 설문조사 응답 결과 메세지 전송 (3)
      await libKakaoWork.sendMessage({
        conversationId: message.conversation_id,
        text: "설문조사에 응해주셔서 감사합니다!",
        blocks: [
          {
            type: "text",
            text: "설문조사에 응해주셔서 감사합니다! 🎁",
            markdown: true,
          },
          {
            type: "text",
            text: "*답변 내용*",
            markdown: true,
          },
          {
            type: "description",
            term: "평점",
            content: {
              type: "text",
              text: actions.rating,
              markdown: false,
            },
            accent: true,
          },
          {
            type: "description",
            term: "바라는 점",
            content: {
              type: "text",
              text: actions.wanted,
              markdown: false,
            },
            accent: true,
          },
          {
            type: "description",
            term: "시간",
            content: {
              type: "text",
              text: action_time,
              markdown: false,
            },
            accent: true,
          },
        ],
      });
      break;
    default:
  }

  res.json({ result: true });
};

module.exports = {
  sendMessage,
  sendModal,
  sendResult,
};
