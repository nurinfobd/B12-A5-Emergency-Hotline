document.addEventListener("DOMContentLoaded", () => {
  const heartCounter = document.getElementById("heartCount");
  const heartButtons = document.querySelectorAll(".heart-btn");

  heartButtons.forEach(button => {
    button.addEventListener("click", () => {
      heartCounter.textContent = parseInt(heartCounter.textContent) + 1;
    });
  });

const copyCounter = document.getElementById("copyCount"); 
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const serviceNumber = button.closest(".bg-white").querySelector(".service-number")?.textContent;
      if (!serviceNumber) return;
      navigator.clipboard.writeText(serviceNumber).then(() => {
        copyCounter.textContent = parseInt(copyCounter.textContent) + 1;
        alert(`Copied: ${serviceNumber}`);
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    });
  });
});