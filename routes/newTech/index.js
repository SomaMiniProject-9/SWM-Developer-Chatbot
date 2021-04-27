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
        "text": "💻 최신 개발 기술 소식 📰",
        "blocks": [
          {
            "type": "header",
            "text": "💻 최신 개발 기술 소식 📰",
            "style": "blue"
          },
          {
            "type": "section",
            "content": {
              "type": "text",
              "text": "*서류탈락하는 개발자 포트폴리오의 특징*\n똑같은 주니어인데, 왜 저 사람은 좋은 기업도 쉽게 가고 연봉도 높은거지?...\n[자세히 보기](https://velog.io/@dongyi/%EB%82%B4-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EA%B0%80-%EC%84%9C%EB%A5%98%ED%83%88%EB%9D%BD%EC%9D%B8-%EC%9D%B4%EC%9C%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9D%B4%EB%A0%87%EA%B2%8C-%ED%95%B4%EB%B3%B4%EC%84%B8%EC%9A%94)",
              "markdown": true
            },
            "accessory": {
              "type": "image_link",
              "url": "https://media.vlpt.us/images/dongyi/post/afdf1622-db3e-4ec2-adce-ab51f541feff/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%20-%20%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A5%E1%84%87%E1%85%B2.jpg?w=640"
            }
          },
          {
            "type": "section",
            "content": {
              "type": "text",
              "text": "*웹은 어떻게 동작할까? - 1. 사용자가 웹페이지를 보기까지*\n이번에 SPA(Single Page Aplication)을 공부하면서 내가 웹 페이지의 동작 원리에 대해서...\n[자세히 보기](https://velog.io/@0307kwon/%EC%9B%B9%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C-1.-%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EB%B3%B4%EA%B8%B0%EA%B9%8C%EC%A7%80)",
              "markdown": true
            },
            "accessory": {
              "type": "image_link",
              "url": "https://media.vlpt.us/images/0307kwon/post/28059ccf-7902-441b-964f-180886835280/image.png?w=640"
            }
          },
          {
            "type": "section",
            "content": {
              "type": "text",
              "text": "*JWT는 어디에 저장해야할까? - localStorage vs cookie*\n이번에 지하철 미션을 만들면서 JWT를 클래스 property에 저장했었는데 리뷰어 분께 해당 부분...\n[자세히 보기](https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie)",
              "markdown": true
            },
            "accessory": {
              "type": "image_link",
              "url": "https://media.vlpt.us/images/0307kwon/post/93678338-1f8c-448b-8739-e8f2b3d64f05/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C.png?w=640"
            }
          },
          {
            "type": "section",
            "content": {
              "type": "text",
              "text": "*[Recoil] Recoil 200% 활용하기*\n아무리 구글링해도 Recoil 기본 예제밖에 나오지 않아 직접 작성한 Recoil 200% 활용법 🙃\n[자세히 보기](https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)",
              "markdown": true
            },
            "accessory": {
              "type": "image_link",
              "url": "https://media.vlpt.us/images/juno7803/post/96b970e7-445c-48e2-9bc3-b6e45b55d538/recoil.png?w=640"
            }
          },
          {
            "type": "section",
            "content": {
              "type": "text",
              "text": "*💤 코로나 언택트 시대, 우리는 어떻게 수업 시간에 잘 수 있을까요?*\n⭐️ 잠을 못 이루는 당신을 위한 시간 활용법\n[자세히 보기](https://velog.io/@junhoyeo/%EC%BD%94%EB%A1%9C%EB%82%98-%EC%96%B8%ED%83%9D%ED%8A%B8-%EC%8B%9C%EB%8C%80-%EC%9A%B0%EB%A6%AC%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%88%98%EC%97%85-%EC%8B%9C%EA%B0%84%EC%97%90-%EC%9E%98-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94)",
              "markdown": true
            },
            "accessory": {
              "type": "image_link",
              "url": "https://media.vlpt.us/images/junhoyeo/post/83b8ef9b-6dc3-492b-ba3f-57500e299aed/IMG_1588.jpg?w=640"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "button",
            "text": "더 보기",
            "style": "primary"
          },
          {
            "type": "button",
            "text": "메인 메뉴로 이동",
            "style": "default"
          }
        ]
      }
    ],
  });

  res.json({ result: true });
};

module.exports = {
  sendMessage,
};
