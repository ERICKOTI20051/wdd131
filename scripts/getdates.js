// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Display the date the document was last modified
document.getElementById("lastModified").innerHTML =
    "Last Modification: " + document.lastModified;