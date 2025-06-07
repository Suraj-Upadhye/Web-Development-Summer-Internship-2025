document.addEventListener("DOMContentLoaded", () => {
  alert("Page loaded Successfully!!");
  const changeBtn = document.getElementById("change-btn");
  const targetText = document.getElementById("target-text");

  changeBtn.addEventListener("click", () => {
    targetText.textContent = "Hello Guys, Suraj Upadhye here...";
    document.body.style.backgroundColor = "#6bde84";
  });
});
