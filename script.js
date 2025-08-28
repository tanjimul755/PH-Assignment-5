
let heartCountEl = document.getElementById("heartCount");
document.querySelectorAll(".heart-toggle").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        // let number = card.querySelector(".number").textContent;
        // alert("❤️ Number" + number + "added to favorites!");

        let card = this.closest('.card');
        let numberEl = card.querySelector(".number");
        let number = numberEl.textContent;
        alert("❤️ (" + number + ") added to favorites!");

        let icon = this.querySelector("i");
        let liked = icon.classList.contains("fa-solid");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("red");

        let count = parseInt(heartCountEl.textContent);
        heartCountEl.textContent = liked ? count - 1 : count + 1;
    });
});

let coinEl = document.getElementById("coins");
let callHistoryCardsContainer = document.querySelector(".call-history-body");
let clearHistoryBtn = document.getElementById("clearHistoryBtn");

document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let coins = parseInt(coinEl.textContent);
        if (coins < 20) {
            alert("❌Not enough coins! You need at least 20 to make a call.");
            return;
        }

        let card = this.closest(".card");
        let name = card.querySelector(".card-title").textContent;
        let number = card.querySelector(".number").textContent;

        alert("📞Calling " + name + " (" + number + ")...");

        coinEl.textContent = coins - 20;

        let time = new Date().toLocaleTimeString();
        let historyItem = document.createElement("div");
        historyItem.classList.add("call-history-cards");
        historyItem.style.display = "flex";
        historyItem.innerHTML = `
            <div>
                <div class="call-history-cards-title">${name}</div>
                <p class="call-history-number">${number}</p>
            </div>
            <div class="call-history-time">${time}</div>
        `;
        callHistoryCardsContainer.appendChild(historyItem);
    });
});

let copyEl = document.querySelector(".nav-items #nav-btn-2 span");

document.querySelectorAll(".card-btn-1").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let card = this.closest(".card");
        let number = card.querySelector(".number").textContent;

        navigator.clipboard.writeText(number);

        let copyCount = parseInt(copyEl.textContent);
        copyEl.textContent = (copyCount + 1) + " Copy";

        alert("Copied number: " + number);
    });
});

clearHistoryBtn.addEventListener("click", function (e) {
    e.preventDefault();
    callHistoryCardsContainer.querySelectorAll(".call-history-cards")
        .forEach(card => card.remove());
});