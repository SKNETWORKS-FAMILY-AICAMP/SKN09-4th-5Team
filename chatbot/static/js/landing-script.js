// script.js

function setLang(button, lang) {
    document.querySelectorAll(".top-bar button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const translations = {
      ko: {
        title: "유물에 말을 걸다, <strong>MUSE</strong>가 답하다.",
        subtitle: "티켓번호를 입력하여 국립중앙박물관의 작품 해설이 담긴 챗봇을 이용해 보세요",
        enterTicket: "티켓 번호를 입력해주세요",
        ticketError: "유효하지 않은 티켓 번호입니다. 번호를 다시 확인해주세요.",
        copyright: "©copyright 본 이미지와 자료는 국립중앙박물관으로부터 제공 받았습니다."
      },
      en: {
        title: "Speak to the Artifact, <strong>MUSE</strong> Responds.",
        subtitle: "Enter your ticket number to access artifact descriptions from the National Museum of Korea.",
        enterTicket: "Please enter your ticket number",
        ticketError: "The ticket number is invalid. Please check it and try again.",
        copyright: "©copyright These images and materials were provided by the National Museum of Korea."
      },
      ja: {
        title: "遺物に話しかけると、<strong>MUSE</strong>が答える。",
        subtitle: "国立中央博物館の解説チャットボットを使うにはチケット番号を入力してください。",
        enterTicket: "チケット番号を入力してください",
        ticketError: "無効なチケット番号です。もう一度ご確認ください。",
        copyright: "©copyright これらの画像と資料は国立中央博物館より提供されたものです。"
      }
    };

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  
    const input = document.getElementById("ticketNum");
    if (input && translations[lang].enterTicket) {
      input.placeholder = translations[lang].enterTicket;
    }
  }
  
  function gotoDocent(e) {
    e.preventDefault();
    const input = document.getElementById("ticketNum");
    const errorDiv = document.getElementById("ticketError");
    const ticket = input.value.trim();
  
    if (ticket === "" || !ticket.startsWith("#") || ticket.length < 6) {
      document.getElementById("ticketError").style.display = "block";
      return;
    }
  
    window.location.href = "explain-page.html";
  }

  const wrapper = document.querySelector('.horizontal-scroll-wrapper');
      
      // 수직 휠을 좌우 스크롤로 바꾸기
      wrapper.addEventListener('wheel', function (e) {
        // 터치패드나 수직 휠 움직임이 있을 때만
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          wrapper.scrollBy({
            left: e.deltaY,
            behavior: 'smooth'
          });
        }
      }, { passive: false });

    