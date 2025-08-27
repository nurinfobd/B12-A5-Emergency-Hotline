document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("heartCount");
  const heartButtons = document.querySelectorAll(".heart-btn");

  heartButtons.forEach(button =>  {
    button.addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  });
});


