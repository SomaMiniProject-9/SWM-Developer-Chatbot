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
        text: "streaming API를 사용한 네이버\n페이의 대형 XLSX 파일 다운로드",
        markdown: true,
      },
      {
        type: "divider",
      },
      {
        type: "image_link",
		url:"https://daddyprogrammer.org/wp-content/uploads/mangboard/2020/08/23/F84_sns_share_big_img1.png",
      },
      {
        type: "divider",
      },
      {
		type: "text",
		text: "네이버페이에서는 엄청난 양의\n데이터가 생성됩니다.\n자신이 생성한 많은 데이터를\n한꺼번에 보고 싶어 하는 판매자를 위해 네이버페이는 Microsoft Excel 통합 문서 파일(XLSX 파일)\n다운로드 기능을 제공합니다.",
      markdown: true
	  },
      {
        type: "button",
		text: "👉 Naver D2 원문 바로가기 👍",
		style: "default",
		action_type: "open_system_browser",
		value: "https://d2.naver.com/helloworld/9423440"
      },
      {
        type: "divider",
      },
      {
        type: "text",
        text: "카카오 사내 기술 세미나 Techtalk - 두 번째 이야기",
        markdown: true,
      },
      {
        type: "divider",
      },
      {
        type: "image_link",
		url: "https://t1.daumcdn.net/cfile/tistory/9942C33359F848F104",
      },
      {
        type: "divider",
      },
      {
		type: "text",
		text: "카카오 사내 기술 세미나 Techtalk, 두 번째 이야기를 공유하는 시간을 가졌습니다.\n이번 주제는 머신러닝, 딥러닝,\n추천 기술 등 AI 기술에 관심 있는\n크루들을 위해 현업 개발자들이\n학습하고 실행한 과정 중심으로\n진행되었습니다.",
      markdown: true
	  },
      {
        type: "button",
		text: "👉 Kakao Tech 원문으로 👍",
		style: "default",
		action_type: "open_system_browser",
		value: "https://tech.kakao.com/2021/04/20/techtalk-02/"
      },
    ],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
