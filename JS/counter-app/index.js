//document.getElementById("count-el").innerText = 5;
let savedEl = document.getElementById("saved-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - "
  console.log(countStr)
  savedEl.textContent += countStr;
}
