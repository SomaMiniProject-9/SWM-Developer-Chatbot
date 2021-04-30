/** @format */

const libKakaoWork = require("../../libs/kakaoWork");


const sendMessage = async (req, res, next) => {
  const { message, actions, action_time, value } = req.body;

  // 설문조사 응답 결과 메세지 전송 (3)
  await libKakaoWork.sendMessage({
    conversationId: message.conversation_id,
    text: "9팀 에어팟 구조대 ✉",
        blocks: [
          {
            type: "header",
            text: "개발자 행사 알림 봇✨",
            style: "yellow",
          },
          {
            type: "divider",
          },
          {
            type: "text",
            text:
              "안녕하세요~ 😊👋\n저희는 *9팀 에어팟 구조대* 입니다! 🚒 🚑\n저희는 이번 미니 프로젝트의✨\n1등 상품인 *🏆에어팟🏆*을 받기 위해\n팀명을 *에어팟 구조대*로 지었습니다!\n\n저희 챗 봇은 *개발과 관련된 행사*와\n*최신 개발 소식*, *개발 관련 짤방*들의 정보를 제공해주는 *행사 알림 봇* 입니다!💻\n\n알고 싶은 정보를 *클릭*해주세요!\n  👇   👇   👇   👇   👇",
            markdown: true,
          },
          {
            type: "divider",
          },
          {
            type: "button",
            action_type: "submit_action",
            action_name: "dev_event",
            value: "dev_event",
            text: "🎉개발 행사 정보🎊",
            style: "default",
          },
          {
            type: "button",
            action_type: "submit_action",
            action_name: "new_tech",
            value: "new_tech",
            text: "💻최신 개발 기술 소식📰",
            style: "danger",
          },
          {
            type: "button",
            action_type: "submit_action",
            action_name: "meme",
            value: "meme",
            text: "😂개발 관련 짤방😂",
            style: "primary",
          },
        ],
  });

  res.json({ result: true });
};


const sendMessageToAll = async (req, res, next) => {
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
        text: "9팀 에어팟 구조대 ✉",
        blocks: [
          {
            type: "header",
            text: "개발자 행사 알림 봇✨",
            style: "yellow",
          },
          {
            type: "divider",
          },
          {
            type: "text",
            text:
              "안녕하세요~ 😊👋\n저희는 *9팀 에어팟 구조대* 입니다! 🚒 🚑\n저희는 이번 미니 프로젝트의✨\n1등 상품인 *🏆에어팟🏆*을 받기 위해\n팀명을 *에어팟 구조대*로 지었습니다!\n\n저희 챗 봇은 *개발과 관련된 행사*와\n*최신 개발 소식*, *개발 관련 짤방*들의 정보를 제공해주는 *행사 알림 봇* 입니다!💻\n\n알고 싶은 정보를 *클릭*해주세요!\n  👇   👇   👇   👇   👇",
            markdown: true,
          },
          {
            type: "divider",
          },
          {
            type: "button",
            action_type: "submit_action",
            action_name: "dev_event",
            value: "dev_event",
            text: "🎉개발 행사 정보🎊",
            style: "default",
          },
          {
            type: "button",
            action_type: "submit_action",
            action_name: "new_tech",
            value: "new_tech",
            text: "💻최신 개발 기술 소식📰",
            style: "danger",
          },
          {
            type: "button",
            action_type: "submit_action",
            action_name: "meme",
            value: "meme",
            text: "😂개발 관련 짤방😂",
            style: "primary",
          },
        ],
      })
    ),
  ]);

  // 응답값은 자유롭게 작성하셔도 됩니다.
  res.json({
    result: true,
    time: Date.now(),
    sendTo: conversations.map((conversation) => conversation.id),
  });
};

module.exports = {
  sendMessage,
  sendMessageToAll,
};
