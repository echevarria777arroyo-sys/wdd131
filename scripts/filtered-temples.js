// Hamburger Menu
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/temple1.png"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/temple2.png"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temple3.png"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/temple4.png"
  },
  {
    templeName: "Washington D.C.",
    location: "Washington, D.C.",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temple5.png"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/temple6.png"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temple7.png"
  },
  {
    templeName: "Cusco Peru",
    location: "Cusco, Peru",
    dedicated: "2023, March, 19",
    area: 9500,
    imageUrl: "images/temple8.png"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: "images/temple9.png"
  },
  {
    templeName: "Trujillo Peru",
    location: "Trujillo, Peru",
    dedicated: "2015, June, 21",
    area: 28900,
    imageUrl: "images/temple10.png"
  }
];
const templeContainer = document.getElementById("templeContainer");

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}
// Show all temples when the page loads
displayTemples(temples);

// Navigation filters
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;
        document.getElementById("pageTitle").textContent = link.textContent;

        switch (filter) {
            case "old":
                displayTemples(
                    temples.filter((temple) => {
                        return new Date(temple.dedicated).getFullYear() < 1900;
                    })
                );
                break;

            case "new":
                displayTemples(
                    temples.filter((temple) => {
                        return new Date(temple.dedicated).getFullYear() > 2000;
                    })
                );
                break;

            case "large":
                displayTemples(
                    temples.filter((temple) => {
                        return temple.area > 90000;
                    })
                );
                break;

            case "small":
                displayTemples(
                    temples.filter((temple) => {
                        return temple.area < 10000;
                    })
                );
                break;

            default:
                displayTemples(temples);
        }
    });
});