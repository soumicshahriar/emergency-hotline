const cardContainer = document.querySelector(".cards-container");

const historySection = document.getElementById("historyButton");

function updateTokens(selector, value) {
  document
    .querySelectorAll(selector)
    .forEach((item) => (item.innerText = value));
}

const historyEntries = document.createElement("div");
historySection.appendChild(historyEntries);

cardContainer.addEventListener("click", (event) => {
  const callButton = event.target.closest(".call-btn");
  if (!callButton) return;

  const callTokenSection = document.querySelectorAll(".call-token");

  for (const token of callTokenSection) {
    let remainingCallToken = parseInt(token.innerText);

    if (remainingCallToken < 20) {
      return alert(
        "❌ You don't have sufficient call Tokens. For each call you need at least 20 tokens."
      );
    }
    remainingCallToken -= 20;

    updateTokens(".call-token", remainingCallToken);
    break;
  }

  const card = callButton.closest("#card");
  if (!card) return;

  const title = card.querySelector("h2")?.textContent.trim() || "Unknown";

  const number = card.querySelector("h3")?.textContent.trim() || "N/A";

  const now = new Date();

  const time = now.toLocaleTimeString("en-US", { hour12: true });

  alert(`📞 calling ${title} (${number})`);

  const entryData = document.createElement("div");
  entryData.className =
    "flex justify-between items-center bg-[#FAFAFA] rounded-lg p-2 mt-2";
  entryData.innerHTML = `
        <div class="flex flex-col">
            <span class="font-semibold">${title}</span>
            <span class="opacity-80">${number}</span>
        </div>
        <small class="opacity-70 text-sm">${time}</small>
    `;
  historyEntries.appendChild(entryData);
});

// handle clear button
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  historyEntries.innerHTML = "";
});

// for heart
const heartButton = document.querySelectorAll(".fa-heart");
const heartTokenSection = document.querySelectorAll(".heart-token");
for (const heartToken of heartTokenSection) {
  let heartCount = parseInt(heartToken.innerText);

  for (const heart of heartButton) {
    heart.addEventListener("click", () => {
      heartCount += 1;
      updateTokens(".heart-token", heartCount);
    });
  }
}

// for copy button
const copyButtons = document.querySelectorAll(".fa-copy");

const copyTokenSection = document.querySelectorAll(".copy-token");
for (const button of copyButtons) {
  button.parentElement.addEventListener("click", () => {
    const card = button.closest("#card");
    const number = card.querySelector("h3").innerText.trim();

    // copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);
      for (const token of copyTokenSection) {
        let copyToken = parseInt(token.innerText);
        copyToken += 1;
        updateTokens(".copy-token", copyToken);
        return;
      }
    });
  });
}
