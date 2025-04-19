const translations = {
  ko: {
    title: "MUSE",
    subtitle: "국립중앙박물관 챗봇",
    questionPlaceholder: "무엇이 궁금하세요?",
    askButton: "⌵"
  },
  en: {
    title: "MUSE",
    subtitle: "National Museum Chatbot",
    questionPlaceholder: "Ask your question",
    askButton: "⌵"
  },
  ja: {
    title: "MUSE",
    subtitle: "国立中央博物館 チャットボット",
    questionPlaceholder: "質問を入力してください",
    askButton: "⌵"
  }
};

function setLang(button, lang) {
  document.querySelectorAll(".language-buttons button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  const t = translations[lang];
  if (t) {
    document.getElementById("userQuestion").placeholder = t.questionPlaceholder;
    document.getElementById("askButton").textContent = t.askButton;
  }
}

function handleQuestion(event) {
  event.preventDefault();
  const input = document.getElementById('userQuestion');
  const question = input.value.trim();
  if (!question) return;

  const chatContent = document.getElementById('chatContent');

  const userDiv = document.createElement('div');
  userDiv.className = 'message user-message';
  userDiv.textContent = question;
  chatContent.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.className = 'message bot-response';
  botDiv.innerHTML = `
    이 작품은 김수철의 작품으로 간략한 필치와 단순한 형태, 엷지만 선명한 색채가 두드러집니다.<br>
    산과 바위의 음영 표현 없이 윤곽선만으로 표현되어 김수철 그림의 특징인 간결함이 잘 드러나 있습니다.
    <br><br>
    <img src="/static/image/winter-landscape.png" alt="겨울산수" class="response-image">
    <audio controls class="response-audio">
      <source src="/static/sample.mp3" type="audio/mpeg">
      오디오 지원이 불가합니다.
    </audio>
  `;
  chatContent.appendChild(botDiv);

  input.value = '';
  chatContent.scrollTop = chatContent.scrollHeight;
}
