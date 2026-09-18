document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215*temp - 11.37*Math.pow(wind, 0.16) + 0.3965*temp*Math.pow(wind, 0.16);
}

let temp = 9;
let wind = 6;

function getWindChillDisplay(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return calculateWindChill(temp, wind);
  } else {
    return "N/A";
  }
}

document.getElementById("windChill").textContent = getWindChillDisplay(temp, wind);