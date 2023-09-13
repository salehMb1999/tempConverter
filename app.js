const $ = document;
let title = $.querySelector(".title");
let input = $.querySelector(".input");
let result = $.querySelector(".result");
let changeBtn = $.getElementById("change");
let convertBtn = $.getElementById("convert");
let resetBtn = $.getElementById("reset");

let cTo = true;

changeBtn.addEventListener("click", () => {
  if (cTo) {
    title.innerHTML = "Converter &deg;C to &deg;F";
    document.title = "C to F";
    input.setAttribute("placeholder", "°C");
    input.value = "";
    cTo = false;
  } else {
    title.innerHTML = "Converter &deg;F to &deg;C";
    document.title = "F to C";
    input.setAttribute("placeholder", "°F");
    input.value = "";
    cTo = true;
  }
});
convertBtn.addEventListener("click", () => {
  if (!cTo) {
    let f = Number(input.value) * (9 / 5) + 32;
    result.innerHTML = f;
  } else {
    let c = (Number(input.value) - 32) * (5/9);
    result.innerHTML = c;
  }
});
resetBtn.addEventListener("click", () => {
    input.value = "";
    result.innerHTML = "";
})