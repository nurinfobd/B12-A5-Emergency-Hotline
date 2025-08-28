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

  const coinEl = document.getElementById("coin");
  const callButtons = document.querySelectorAll(".call-btn");

  const historyContainer = document.getElementById("historyContainer");
  const clearBtn = document.getElementById("clearHistory");

  callButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const card   = button.closest(".service-card");
      const name   = card.querySelector(".service-name")?.textContent.trim() || "Service";
      const number = card.querySelector(".service-number")?.textContent.trim() || "";

      let coins = parseInt(coinEl.textContent || "0", 10);

      if (coins < 20) {
        alert(`Not enough coins to call. You need 20 coins to call`);
        return;
      }

      coins -= 20;
      coinEl.textContent = coins;

      alert(`Calling ${name} ${number}...`);

        if (historyContainer) {
          const now = new Date();
          const timeString = now.toLocaleTimeString("en-US", {
            hour: "numeric", minute: "numeric", second: "numeric", hour12: true
          });
        

          const template = document.getElementById("historyItemTemplate");
          const historyItem = template.cloneNode(true);
        
          historyItem.classList.remove("hidden");
        
          historyItem.querySelector(".service-name").textContent = name;
          historyItem.querySelector(".service-number").textContent = number;
          historyItem.querySelector(".service-time").textContent = timeString;
        
          historyContainer.prepend(historyItem);
        }
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      historyContainer.innerHTML = "";
    });
  }

}); 
