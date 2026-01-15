function login() {
  const username = document.getElementById('username').value;
  if (!username) return alert("아이디 입력");

  localStorage.setItem("user", username);
  location.href = "main.html";
}
