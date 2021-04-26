/** @format */

const libKakaoWork = require("../../libs/kakaoWork");

const sendMessage = async (req, res, next) => {
  const { message, actions, action_time, value } = req.body;

  // 설문조사 응답 결과 메세지 전송 (3)
  await libKakaoWork.sendMessage({
    conversationId: message.conversation_id,
    text: "최신 기술 소식",
    blocks: [
      {
        type: "header",
        text: "💻최신 개발 기술 소식📰",
        style: "blue",
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text: "           📗Naver 기술 블로그",
        markdown: true,
      },
      {
        type: "divider",
      },
      {
        type: "image_link",
        url:
          "https://d2.naver.com/static/img/app/common/sns_share_big_img0.png",
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text: "             📒Kakao 기술 블로그",
        markdown: true,
      },
      {
        type: "divider",
      },
      {
        type: "image_link",
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtkce9FES64EdWy_2cZ7jm7oC0DrI_MQSrg&usqp=CAU",
      },
      {
        type: "divider",
      },
    ],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
