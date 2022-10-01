const modal = document.querySelector(".modal");
console.log(modal);
const signInBtn = document.querySelector(".signInBtn");
const closeBtns = document.querySelectorAll(".closeBtn");
const login = document.getElementById("login");
const register = document.getElementById("register");
const registerLink = document.getElementById("registerLink");
const signInLink = document.getElementById("signInLink");

// Listen for open click
signInBtn.addEventListener("click", openModal);

// Listen for close click

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});

// Listen for register link
registerLink.addEventListener("click", registerModal);

// Listen for sign in link
signInLink.addEventListener("click", openModal);

// Listen for log out
logout.addEventListener("click", logout());

// Listen for outside click
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
  login.style.display = "block";
  register.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function registerModal() {
  login.style.display = "none";
  register.style.display = "block";
}

// check validation

function InvalidMsg(textbox) {
  if (textbox.validity.typeMismatch) {
    textbox.setCustomValidity("please enter a valid email address");
  } else {
    textbox.setCustomValidity("");
  }
  return true;
}
