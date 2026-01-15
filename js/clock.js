function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(now);

  document.getElementById('clock').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

const user = localStorage.getItem("user");
if (!user) location.href = "index.html";
document.getElementById("welcome").textContent = `${user}님 환영합니다`;
