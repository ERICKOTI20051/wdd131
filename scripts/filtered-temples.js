// ---------- Temple data ----------
const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  // Three added temples 
  { templeName: "Kenya Nairobi", location: "Nairobi, Kenya", dedicated: "2025, May, 18", area: 19870,
    imageUrl: "images/kenya-nairobi-temple.jpg" },
  { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/20260901_061531_CBell_CMB_1616.jpg" },
  { templeName: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004, January, 11", area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/500%2C/0/default.jpg" }
];

// ---------- Hamburger menu ----------
const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.innerHTML = isOpen
    ? '<span class="hamburger-icon">&times;</span>'
    : '<span class="hamburger-icon">&#9776;</span>';
});

// ---------- Show temple cards ----------
const gallery = document.getElementById("gallery");
const heading = document.getElementById("page-heading");

function showTemples(list) {
  gallery.innerHTML = ""; // clear old cards

  list.forEach((temple) => {
    gallery.innerHTML += `
      <figure>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p><span class="label">Location:</span> ${temple.location}</p>
          <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
          <p><span class="label">Size:</span> ${temple.area} sq ft</p>
        </figcaption>
      </figure>`;
  });
}

// ---------- Filter links ----------
function getYear(temple) {
  return parseInt(temple.dedicated); // "1888, May, 21" becomes 1888
}

const navLinks = document.querySelectorAll("#primary-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const choice = link.dataset.filter;

    if (choice === "old") {
      showTemples(temples.filter((t) => getYear(t) < 1900));
    } else if (choice === "new") {
      showTemples(temples.filter((t) => getYear(t) > 2000));
    } else if (choice === "large") {
      showTemples(temples.filter((t) => t.area > 90000));
    } else if (choice === "small") {
      showTemples(temples.filter((t) => t.area < 10000));
    } else {
      showTemples(temples);
    }

    heading.textContent = link.textContent;

    // close the mobile menu and reset the icon
    primaryNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
    navToggle.innerHTML = '<span class="hamburger-icon">&#9776;</span>';
  });
});

// ---------- Footer ----------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent =
  "Last Modification: " + document.lastModified;

// ---------- Start with all temples ----------
showTemples(temples);