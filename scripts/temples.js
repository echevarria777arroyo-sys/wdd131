// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// Temple Filter
const links = document.querySelectorAll("#menu a");
const figures = document.querySelectorAll("figure");
const title = document.getElementById("pageTitle");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const filter = this.dataset.filter;

        if (filter === "all") {
            title.textContent = "Home";
        } else {
            title.textContent =
                filter.charAt(0).toUpperCase() + filter.slice(1);
        }

        figures.forEach(figure => {
            if (filter === "all" || figure.dataset.category === filter) {
                figure.style.display = "";
            } else {
                figure.style.display = "none";
            }
        });

        // Cierra el menú en móvil después de seleccionar una opción
        menu.classList.remove("open");
    });
});