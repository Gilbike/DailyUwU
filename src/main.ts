import "./style.css";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const savedDate = window.localStorage.getItem("lastGenerated") || "";

let uwuLetter;

if (savedDate != generateDateSting()) {
  window.localStorage.setItem("lastGenerated", generateDateSting());
  const letter = letters[Math.floor(Math.random() * letters.length)];
  console.log(letter);
  window.localStorage.setItem("generatedLetter", letter);
  uwuLetter = letter;
} else {
  uwuLetter = window.localStorage.getItem("generatedLetter");
}

const dateSpan = document.getElementById("date");
if (dateSpan) {
  dateSpan.innerText = `(${generateDateSting()})`;
}
const uwuH2 = document.getElementById("uwu");
if (uwuH2) {
  uwuH2.innerText = `U${uwuLetter}U`;
}

function generateDateSting(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}
