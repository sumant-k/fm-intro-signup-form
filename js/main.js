let form = document.getElementsByClassName("signup-form--section");
form[0].addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  let firstName = event.target[0].value,
    lastName = event.target[1].value,
    email = event.target[2].value,
    password = event.target[3].value;
  if (!firstName) {
    console.log("empty first");
  }
  if (!lastName) {
    console.log("empty last");
  }
  if (!email) {
    console.log("empty email");
  }
  if (!password) {
    let passwd = document.getElementById("password");
    let smallError = document.createElement("small");
    smallError.innerHTML = "Required";
    // passwd.parentElement.append(smallError);
    // passwd.parentElement.append(smallError);
    console.log("empty password", passwd.parentElement);
  }

  console.log("submitted ", password);
});
