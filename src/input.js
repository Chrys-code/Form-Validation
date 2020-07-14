const inputs = document.querySelectorAll("input");
const formBtn = document.querySelectorAll("button");
const form = document.querySelector("form");
const errElement = document.querySelector(".error");
/* 
input[0] = email
input[1] = password
input[2] = checkbox
*/
form.addEventListener("submit", (e) => {
  let messages = [];

  if (inputs[0].value === "" || inputs[0].value == null) {
    messages.push("Pls e-mail");
  }

  if (inputs[1].value.length < 6) {
    messages.push("Your password is too short");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errElement.innerText = messages.join(", ");
  }
});
