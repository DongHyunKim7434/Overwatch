window.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("character-grid");

    const arr = Array.from({ length: 32 }, (_, i) => i + 1);

    arr.forEach(i => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="picture">
                <img src="images/hero${i}.png" alt="Overwatch ${i}">
            </div>
            <div class="info">
                <div class="info-text">Overwatch ${i}</div>
            </div>
        `;

        grid.appendChild(card);
    });
});