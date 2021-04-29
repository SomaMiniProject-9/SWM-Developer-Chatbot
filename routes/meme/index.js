/** @format */
const axios = require('axios');
const Config = require("config");
const libKakaoWork = require("../../libs/kakaoWork");

const sendMessage = async (req, res, next) => {
	const { message, actions, action_time, value } = req.body;
	const { GIPHY_KEY, USER_ID } = Config.keys.giphy;
	const MAX_SIZE = 30;
	let GIPHY_URL = 'https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/source.gif';
	let RANDOM_VALUE = 0;
	const config = {
		method: 'get',
		url: `http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=error&limit=${MAX_SIZE}&rating=g&random_id=${USER_ID}`,
		headers: { },
	};
	await axios(config)
		.then(function (response) {
			RANDOM_VALUE = Math.floor(Math.random() * MAX_SIZE);
			GIPHY_URL = response.data.data[RANDOM_VALUE].images.downsized_large.url;
		})
		.catch(function (error) {
			console.log(error);
		});

	// 설문조사 응답 결과 메세지 전송 (3)
    await libKakaoWork.sendMessage({
	conversationId: message.conversation_id,
	text: "개발 관련 짤",
	blocks: [
		{
		  type: "header",
		  text: "개발 관련 짤방 모음👀",
		  style: "blue"
		},
		{
		  type: "text",
		  text: "*개발*에 지치셨나요?\n짤방 보시면서 *소소한 힐링과 재미*를 느껴보세요!",
		  markdown: true
		},
		{
		  type: "divider"
		},
		{
		  type: "image_link",
		  url: GIPHY_URL,
		},
		{
		  type: "divider"
		},
		{
			type: "button",
			text: "짤방 더 보러가기",
			style: "danger",
			action_type: "submit_action",
			action_name: "meme",
			value: "meme",
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
