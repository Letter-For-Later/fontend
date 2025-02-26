import axios from 'axios';

const API_KEY = process.env.VUE_APP_PERPLEXITY_API_KEY;
const API_URL = 'http://localhost:4000/api/generate-letter';

export const generateLetter = async (emotion, memory, hopes) => {
  try {
    const response = await axios.post(API_URL, {
      model: "sonar-pro",
      messages: [
        { role: "system", content: "당신은 편지 작성을 돕는 AI 어시스턴트입니다." },
        { role: "user", content: `감정: ${emotion}\n기억: ${memory}\n희망: ${hopes}\n이 정보를 바탕으로 따뜻한 편지를 작성해주세요.` }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.data && response.data.generatedLetter) {
      return response.data.generatedLetter;
    } else {
      throw new Error('Generated letter not found in response');
    }
  } catch (error) {
    console.error('Error generating letter:', error);
    if (error.response) {

      console.error('Server responded with error:', error.response.data);
      return `편지 생성 중 오류가 발생했습니다. (상태 코드: ${error.response.status})`;
    } else if (error.request) {

      console.error('No response received:', error.request);
      return '서버로부터 응답을 받지 못했습니다.';
    } else {
      console.error('Error setting up request:', error.message);
      return '편지 생성 요청 중 오류가 발생했습니다.';
    }
  }
};
