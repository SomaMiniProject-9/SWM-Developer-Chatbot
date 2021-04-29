/** @format */

const Config = require("config");
const axios = require("axios");

const kakaoInstance = axios.create({
  baseURL: "https://api.kakaowork.com",
  headers: {
    Authorization: `Bearer ${Config.keys.kakaoWork.bot}`,
  },
});

const getUserList = async () => {  
  let users = [];
  
  // limit만큼 유저를 가져오고 cursor를 갱신합니다.
  const res = await kakaoInstance.get("/v1/users.list?limit=100");
  users.push(...res.data.users);
  let cursor = res.data.cursor;
  
  // 더 가져올 유저가 없을 때(cursor==null)까지 가져옵니다.
  while (cursor) {
    const appendUserURL = "/v1/users.list?cursor=" + cursor;
    const res = await kakaoInstance.get(appendUserURL);
    users.push(...res.data.users);
    cursor = res.data.cursor;
    console.log('get another users');
  }
  
  return users;
};

const openConversations = async ({ userId }) => {
  const data = {
    user_id: userId,
  };
  const res = await kakaoInstance.post("/v1/conversations.open", data);
  return res.data.conversation;
};

const sendMessage = async ({ conversationId, text, blocks }) => {
  const data = {
    conversation_id: conversationId,
    text,
    ...(blocks && { blocks }),
  };
  const res = await kakaoInstance.post("/v1/messages.send", data);
  return res.data.message;
};

module.exports = {
  getUserList,
  openConversations,
  sendMessage,
};
