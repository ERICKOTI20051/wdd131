/ temples.js
// Handles the footer year/last-modified text and the mobile hamburger menu.

// ---------- Footer: dynamic year and last modified date ----------
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("last-modified");
lastModified.textContent = "Last Modification: " + document.lastModified;

// ---------- Hamburger menu ----------
const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");

  // Swap the icon between the hamburger and an X, and update aria state
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.textContent = "";

  const icon = document.createElement("span");
  icon.classList.add("hamburger-icon");
  icon.innerHTML = isOpen ? "&times;" : "&#9776;";
  navToggle.appendChild(icon);
});