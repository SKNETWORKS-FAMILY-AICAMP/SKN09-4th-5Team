function gotoDocent() {
    window.location.href = "chatbot-page.html";
  }
  
  function setLang(button, lang) {
    const translations = {
      ko: {
        slide1Title: "AI 도슨트 MUSE란?",
        slide1Text: `
                    AI 도슨트 MUSE는 관람객과 대화하며 유물을 설명해주는 스마트한 안내 서비스입니다.
                    
                    질문을 하면 유물에 대한 정보, 이미지, 그리고 음성 해설까지 제공해드립니니다.
                    
                    간편하고 흥미롭게 전시를 즐겨보세요!
  
                    MUSE는 한국어, 영어, 일본어를 지원하여 외국인 관람객도 쉽게 사용할 수 있습니다.`,
        slide2Title: "어떻게 이용하나요?",
        slide2Text: `1. 페이지 상단에서 원하는 언어(한국어/English/日本語)를 선택하세요.
  2. 우측 하단의 '입장하기' 버튼을 클릭하면 도슨트 대화가 시작됩니다.
  3. 유물에 대해 궁금한 점을 자유롭게 입력해 보세요.
  
  언제든지 이미지와 설명, 음성 해설이 함께 제공됩니다!`,
        slide3Title: "사용 시 주의사항",
        slide3Text: `- 유물에 관련된 질문만 정확하게 답변할 수 있습니다.
  - 질문은 명확하고 간단하게 입력해주세요 (예: “이 유물은 언제 만들어졌나요?”)
  - 음성 해설은 일부 유물에 한해 제공될 수 있습니다.
  
  ※ MUSE는 지속적으로 학습하고 있어, 더 똑똑해지고 있어요!`,
        enterButton: "입장하기",
        footer: "©copyright 본 이미지와 자료는 국립중앙박물관으로부터 제공 받았습니다."
      },
      en: {
        slide1Title: "What is MUSE?",
        slide1Text: `
                    MUSE is a smart AI docent that communicates with visitors and explains artifacts.

                    If you ask questions, we will provide information, images, and even voice commentary about the artifacts.

                    Enjoy the exhibition with ease and interest!
                        
                    MUSE supports Korean, English, and Japanese for global visitors.`,
        slide2Title: "How to use it?",
        slide2Text: `1. Choose your preferred language from the top.
  2. Click the "Enter" button to start the docent service.
  3. Ask anything about the artifacts freely.
  
  It provides explanation, image and voice together!`,
        slide3Title: "Notice",
        slide3Text: `- It can only answer clearly about artifact-related questions.
  - Use simple and clear language. (e.g. "When was this made?")
  - Some artifacts may not have voice guidance.
  
  MUSE keeps learning and getting smarter!`,
        enterButton: "Enter",
        footer: "©copyright Images and content provided by the National Museum of Korea."
      },
      ja: {
        slide1Title: "MUSEとは？",
        slide1Text: `
                    MUSEは来館者と会話しながら遺物を説明するスマートなAIガイドです。

                    質問をすれば遺物に対する情報、イメージ、そして音声解説まで提供します。
                      
                    手軽で興味深く展示を楽しみましょう！
                      
                    MUSEは韓国語・英語・日本語をサポートしています。`,
        slide2Title: "使い方",
        slide2Text: `1. 上部で言語（한국어/English/日本語）を選びます。
  2. 「入場する」ボタンをクリックして開始します。
  3. 遺物に関して自由に質問してください。
  
  画像・音声・説明が一緒に提供されます！`,
        slide3Title: "注意事項",
        slide3Text: `- 遺物に関する質問のみ正確に答えられます。
  - 質問は簡潔に入力してください（例：「これはいつ作られましたか？」）
  - 音声ガイドは一部の遺物でのみ使用可能です。
  
  MUSEは学習を続けており、どんどん賢くなっています！`,
        enterButton: "入場する",
        footer: "©copyright 画像および資料は国立中央博物館から提供されたものです。"
      }
      
    };

    // 버튼 active 처리
    document.querySelectorAll(".top-bar button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  
    const t = translations[lang];
    const slideTitles = document.querySelectorAll(".slide h2");
    const slideTexts = document.querySelectorAll(".slide p");
  
    slideTitles[0].innerText = t.slide1Title;
    slideTexts[0].innerHTML = t.slide1Text.replace(/\n/g, "<br>");
    slideTitles[1].innerText = t.slide2Title;
    slideTexts[1].innerHTML = t.slide2Text.replace(/\n/g, "<br>");
    slideTitles[2].innerText = t.slide3Title;
    slideTexts[2].innerHTML = t.slide3Text.replace(/\n/g, "<br>");
    const enterBtn = document.getElementById("enterBtn");
        if (enterBtn && t.enterButton) {
    enterBtn.innerText = t.enterButton;
    }
    const footer = document.getElementById("footerCopyright");
        if (footer && t.footer) {
    footer.innerText = t.footer;
    }
  }
  
  // 슬라이드 휠 스크롤 적용
  const wrapper = document.querySelector('.horizontal-scroll-wrapper');
  if (wrapper) {
    wrapper.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        wrapper.scrollBy({ left: e.deltaY, behavior: 'smooth' });
      }
    }, { passive: false });
  }

  // 인디케이터 업데이트 함수
function updateIndicator() {
    const wrapper = document.querySelector('.horizontal-scroll-wrapper');
    const dots = document.querySelectorAll('.slide-indicator .dot');
    const slides = document.querySelectorAll('.slide');
    const enterBtnWrapper = document.querySelector('.enter-btn-wrapper');
  
    let scrollLeft = wrapper.scrollLeft;
    let slideWidth = slides[0].offsetWidth + 32; // gap 2rem = 32px
    let index = Math.round(scrollLeft / slideWidth);
  
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index]?.classList.add('active');

    // 👉 마지막 슬라이드 도달 시만 버튼 표시
    if (index === dots.length - 1) {
        enterBtnWrapper.style.display = 'block';
    } else {
        enterBtnWrapper.style.display = 'none';
    }
  }
  
  // 스크롤에 따라 인디케이터 갱신
  document.querySelector('.horizontal-scroll-wrapper')?.addEventListener('scroll', updateIndicator);

  // dot 클릭 시 해당 슬라이드로 이동
    document.querySelectorAll('.slide-indicator .dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const wrapper = document.querySelector('.horizontal-scroll-wrapper');
      const slideWidth = document.querySelector('.slide')?.offsetWidth || 0;
      const gap = 32; // gap: 2rem (기존 flex gap)
      const scrollPosition = index * (slideWidth + gap);
      
      wrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    });
  });