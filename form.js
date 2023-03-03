const form = document.getElementById("form-desgin");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const state = document.getElementById("state");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    name.value === "" ||
    email.value === "" ||
    password.value === "" ||
    address.value === "" ||
    phone.value === "" ||
    city.value === "" ||
    zip.value === "" ||
    state.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  if (!isValidEmail(email.value)) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  form.submit();
  alert("Form submitted successfully");
});

function isValidEmail(email) {
  const emailCheak = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheak.test(email);
}
