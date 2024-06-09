function goToPage1() {
  window.location.href = "starbucks.html";
}
function goToPage2() {
  window.location.href = "kaburgaciyasar.html";
}

let users = [];
let currentUser = null;

function toggleRegistrationForm() {
  let registrationForm = document.getElementById("registrationForm");
  registrationForm.style.display =
    registrationForm.style.display === "none" ? "block" : "none";
}

function toggleLoginForm() {
  let loginForm = document.getElementById("loginForm");
  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
}

function register() {
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;

  let newUser = {
    fullName: fullName,
    email: email,
    password: password,
  };

  users.push(newUser);

  let registrationMessage = document.getElementById("registrationMessage");
  registrationMessage.innerText = "Kayıt başarılı!";
  registrationMessage.style.display = "block";

  toggleRegistrationForm();

  document.getElementById("fullName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";

  return false;
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    let loginMessage = document.getElementById("loginMessage");
    loginMessage.innerText = "Giriş başarılı!";
    loginMessage.style.display = "block";
    currentUser = user;
    displayUserInfo();
  } else {
    alert("Hatalı e-posta veya şifre!");
  }

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";

  return false;
}

function displayUserInfo() {
  let accountInfo = document.getElementById("accountInfo");
  accountInfo.innerHTML = `<p>Hoş geldiniz, ${currentUser.fullName}!</p>
    <button onclick="toggleAccountDetails()">Hesabımı Göster</button>
    <div id="accountDetails" style="display: none;">
      <!-- Hesap detayları buraya gelecek -->
    </div>`;
}
