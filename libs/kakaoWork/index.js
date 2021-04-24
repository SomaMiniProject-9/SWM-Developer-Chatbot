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
  const res = await kakaoInstance.get("/v1/users.list");
  return res.data.users;
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
