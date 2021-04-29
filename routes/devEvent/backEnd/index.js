/** @format */

const libKakaoWork = require("../../../libs/kakaoWork");

const BackEndData = [
	{
		title : '커리어 대환장 파티',
		img : 'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/learn/career-party/210416_thumbnail.png',
		date : '2021년 4월 28일',
		place: '온라인',
		link : 'https://programmers.co.kr/learn/courses/11874'
	},
	{
		title : 'SLASH 21',
		img : 'https://static.toss.im/slash21/img/04_OGbanner_light.png',
		date : '2021년 4월 28일 - 30일',
		place: '온라인',
		link : 'https://toss.im/slash-21'
		
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
		  text: "💻Back end 행사 정보🌐",
		  style: "blue"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${BackEndData[0].title}\n*장소* ${BackEndData[0].place} \n*일시* ${BackEndData[0].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: BackEndData[0].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "default",
		  action_type: "open_system_browser",
		  value: BackEndData[0].link
		},
		{
		  type: "divider"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${BackEndData[1].title}\n*장소* ${BackEndData[1].place} \n*일시* ${BackEndData[1].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: BackEndData[1].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "default",
		  action_type: "open_system_browser",
		  value: BackEndData[1].link
		},
		{
		  type: "divider"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${BackEndData[2].title}\n*장소* ${BackEndData[2].place} \n*일시* ${BackEndData[2].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: BackEndData[2].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "default",
		  action_type: "open_system_browser",
		  value: BackEndData[2].link
		},
		{
		  type: "divider"
		},
		{
			type: "button",
			text: "메인으로 이동",
			style: "primary",
			action_type: "submit_action",
			action_name: "main",
			value: "main",
	  	},
	],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
