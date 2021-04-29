/** @format */

const libKakaoWork = require("../../../libs/kakaoWork");

const GameData = [
	{
		title : '올인원 게임 웨비나',
		img : 'https://eventusstorage.blob.core.windows.net/evs/Image/navercloudplatform/30859/ProjectInfo/Cover/db643a0da42545fbbeebd5bd16fb0087.jpg',
		date : '2021년 4월 29일',
		place: '온라인',
		link : 'https://register.gotowebinar.com/register/6991636525549116941'
	},
	{
		title : '메타버스 구현을 위한 디지털 캐릭터 제작 과정',
		img : 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/04/13/ce7737205bd648fcaf68c68a311b18d7.jpg',
		date : '2021년 5월 11일',
		place: '온라인',
		link : 'https://www.xrcampus.kr/lecture/viewAll.do?pageIndex=1&menu_idx=50&lecIdx=17&proIdx=80&selYear=&selApplyStatus='
	},
	{
		title : '2021 NDC',
		img : 'https://pbs.twimg.com/profile_images/586418236612161536/ilibRpPg.jpg',
		date : '2021년 6월 9일 - 11일',
		place: '오프라인',
		link : 'https://ndc.nexon.com/main'
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
		  text: "🎮 Game 행사 정보🎲",
		  style: "blue"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${GameData[0].title}\n*장소* ${GameData[0].place} \n*일시* ${GameData[0].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: GameData[0].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "primary",
		  action_type: "open_system_browser",
		  value: GameData[0].link
		},
		{
		  type: "divider"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${GameData[1].title}\n*장소* ${GameData[1].place} \n*일시* ${GameData[1].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: GameData[1].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "primary",
		  action_type: "open_system_browser",
		  value: GameData[1].link
		},
		{
		  type: "divider"
		},
		{
		  type: "section",
		  content: {
			type: "text",
			text: `*제목* ${GameData[2].title}\n*장소* ${GameData[2].place} \n*일시* ${GameData[2].date}`,
			markdown: true
		  },
		  accessory: {
			type: "image_link",
			url: GameData[2].img
		  }
		},
		{
		  type: "button",
		  text: "예약하기",
		  style: "primary",
		  action_type: "open_system_browser",
		  value: GameData[2].link
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
