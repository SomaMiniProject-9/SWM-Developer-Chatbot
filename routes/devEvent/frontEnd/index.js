/** @format */

const libKakaoWork = require("../../../libs/kakaoWork");

const FrontEndData = [
	{
		title : 'SLASH 21',
		img : 'https://static.toss.im/slash21/img/04_OGbanner_light.png',
		date : '2021년 4월 28일 - 30일',
		place: '온라인',
		link : 'https://toss.im/slash-21'
	},
	{
		title : '한 달 코딩 챌린지',
		img : 'https://couchcoding.kr/assets/images/logos/logo_couch.png',
		date : '2020년 5월 2일',
		place: '온라인',
		link : 'https://www.notion.so/5-622dfeeb360e40ff8142a5f1cacdba30'
	},
	{
		title : '2021 우아한 테크캠프',
		img : 'http://www.woowahan.com/img/mobile/woowabros.jpg',
		date : '2021년 4월 28일 - 5월6일',
		place: '온라인 모집',
		link : 'https://www.woowahan.com/#/recruit/techcamp'
	}
]


const sendMessage = async (req, res, next) => {
  const { message, actions, action_time, value } = req.body;

  // 설문조사 응답 결과 메세지 전송 (3)
  await libKakaoWork.sendMessage({
    conversationId: message.conversation_id,
    text: "개발 행사 정보",
    blocks: [
		{
		  type: "header",
		  text: "🎨Front end 행사 정보🎈",
		  style: "blue"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${FrontEndData[0].title}\n*장소* ${FrontEndData[0].place} \n*일시* ${FrontEndData[0].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: FrontEndData[0].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "primary",
		  action_type: "open_system_browser",
		  value: FrontEndData[0].link
		},
		{
		  type: "divider"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${FrontEndData[1].title}\n*장소* ${FrontEndData[1].place} \n*일시* ${FrontEndData[1].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: FrontEndData[1].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "primary",
		  action_type: "open_system_browser",
		  value: FrontEndData[1].link
		},
		{
		  type: "divider"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${FrontEndData[2].title}\n*장소* ${FrontEndData[2].place} \n*일시* ${FrontEndData[2].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: FrontEndData[2].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "primary",
		  action_type: "open_system_browser",
		  value: FrontEndData[2].link
		},
		{
		  type: "divider"
		},
	],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
