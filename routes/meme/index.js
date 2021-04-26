/** @format */

const libKakaoWork = require("../../libs/kakaoWork");

const sendMessage = async (req, res, next) => {
  const { message, actions, action_time, value } = req.body;

  // 설문조사 응답 결과 메세지 전송 (3)
  await libKakaoWork.sendMessage({
    conversationId: message.conversation_id,
    text: "개발 관련 짤",
    blocks: [
      {
        type: "header",
        text: "😂개발 관련 짤방😂",
        style: "blue",
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text: "개발에 지치셨나요?🥱\n짤방 보시면서 쉬어가세요~🤣",
        markdown: true,
      },
      {
        type: "divider",
      },
      {
        type: "image_link",
        url:
          "https://blog.kakaocdn.net/dn/uGPfd/btqPPDBUtVx/Kkn0QFPZI7fKKp1SmPqR9K/img.png",
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text: "예제 사이트들 ... ... ... ...",
        markdown: true,
      },
    ],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
