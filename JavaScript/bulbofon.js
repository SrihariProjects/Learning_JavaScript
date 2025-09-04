const bulb = document.getElementById("bulb");
const imgref = document.getElementById("myImage");
const colorSelect = document.getElementById("colorSelect");
const body = document.body;

const colorMap = {
  red: "#ff1744",
  orange: "#ff9100",
  yellow: "#ffeb3b",
  green: "#00e676",
  blue: "#2979ff",
  indigo: "#651fff",
  violet: "#d500f9"
};

function turnOn() {
  const selectedColor = colorSelect.value;

  bulb.className = "bulb on"; // bulb glows (yellow filament glow)
  imgref.src = "../Images/pic_bulbon.gif";

  // Change the page background color to the selected VIBGYOR color (bright and transparent)
  body.style.background = `radial-gradient(circle at center, ${colorMap[selectedColor]}cc, #000)`;
}

function turnOff() {
  bulb.className = "bulb"; // bulb off
  imgref.src = "../Images/pic_bulboff.gif";

  // Reset background to black
  body.style.background = "#000";
}
