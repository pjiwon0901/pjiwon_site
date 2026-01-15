let startTime;
let interval;

function start() {
  startTime = Date.now();
  interval = setInterval(update, 10);
}

function update() {
  const diff = Date.now() - startTime;
  const min = String(Math.floor(diff / 60000)).padStart(2, '0');
  const sec = String(Math.floor(diff / 1000) % 60).padStart(2, '0');
  const ms = String(Math.floor(diff / 10) % 100).padStart(2, '0');

  document.getElementById('stopwatch').textContent =
    `${min}:${sec}.${ms}`;
}

function stop() {
  clearInterval(interval);
  saveRecord(document.getElementById('stopwatch').textContent);
}

function reset() {
  clearInterval(interval);
  document.getElementById('stopwatch').textContent = "00:00.00";
}

function saveRecord(time) {
  const user = localStorage.getItem("user");
  const records = JSON.parse(localStorage.getItem(user)) || [];
  records.push(time);
  localStorage.setItem(user, JSON.stringify(records));
  loadRecords();
}

function loadRecords() {
  const user = localStorage.getItem("user");
  const records = JSON.parse(localStorage.getItem(user)) || [];
  const ul = document.getElementById("records");
  ul.innerHTML = "";

  records.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
}

loadRecords();
