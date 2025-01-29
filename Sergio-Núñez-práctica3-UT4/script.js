document.addEventListener("DOMContentLoaded", () => {
    fetch("biblioteca.json")
        .then((response) => response.json())
        .then((data) => {
            const gallery = document.getElementById("seccion-cartas");
            data.forEach((item) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img src="imágenes/${item.cover}" alt="${item.cover}">
                    <div class="seccion-info">
                    <h2>${item.title}</h2>
                    <div class="author">${item.author}</div>
                    <p>${item.genre}</p>
                    <p>${item.year}</p>
                    </div>
                `;
                gallery.appendChild(card);
            });
        })
        .catch((error) => console.error("Error loading data:", error));
});
