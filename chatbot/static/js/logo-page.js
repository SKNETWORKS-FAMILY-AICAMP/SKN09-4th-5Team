
window.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  setTimeout(() => {
    logo.classList.add("fade-out");
  }, 1000); // 보여주는 시간

  logo.addEventListener("transitionend", () => {
    // 애니메이션이 끝났을 때
    window.location.href = "landing-page.html";
  });
});