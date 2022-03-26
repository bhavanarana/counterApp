let count = 0;
document.getElementById("submit").onclick = function () {
  count++;
  document.getElementById("count").innerText = count + "🔥";
};
let saveEl = document.getElementById("save-el");
function save() {
  let num = count + "-";
  saveEl.textContent += num; //show hidden also
  document.getElementById("count").textContent = 0;
  count = 0;
}
