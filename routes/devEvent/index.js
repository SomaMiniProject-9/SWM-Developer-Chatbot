/** @format */

const libKakaoWork = require("../../libs/kakaoWork");

const sendMessage = async (req, res, next) => {
  const { message, actions, action_time, value } = req.body;

  // 설문조사 응답 결과 메세지 전송 (3)
  await libKakaoWork.sendMessage({
    conversationId: message.conversation_id,
    text: "개발 행사 정보",
    blocks: [
      {
        type: "header",
        text: "🎉개발 행사 정보🎊",
        style: "blue",
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text:
          "저희는 Festa와 용감한 친구들의\n행사 정보를 안내해드리고 있습니다!\n",
        markdown: true,
      },
      {
        type: "image_link",
        url: "https://festa.io/festa-og-img.png",
      },
      {
        type: "divider",
      },
      {
        type: "divider",
      },
      {
        type: "image_link",
        url:
          "https://github.com/brave-people/Dev-Event/raw/master/static/1000dev-event.png?raw=true",
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text: "      원하는 분야를 선택 해주세요!",
        markdown: true,
      },
      {
        type: "button",
        text: "🎨 Front end 🎈",
        style: "default",
      },
      {
        type: "button",
        text: "💻 Back end 🌐",
        style: "default",
      },
      {
        type: "button",
        text: "🎮 Game 🎲",
        style: "default",
      },
    ],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
