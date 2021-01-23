const createError = (fieldID, errorID, message) => {
  let field = document.getElementById(fieldID);
  field.classList.add("border-red");
  let smallError = document.createElement("small");
  let errorSpan = document.createElement("span");
  let infoSpan = document.createElement("span");
  if (!document.getElementById(errorID)) {
    smallError.classList.add("form__group-field-invalid");
    infoSpan.classList.add("form__group-field-invalid__info-icon")
    errorSpan.classList.add("form__group-field-invalid__error")
    smallError.appendChild(errorSpan);
    smallError.id = errorID;
    errorSpan.innerHTML = message;
    field.parentElement.append(smallError);

    field.parentElement.appendChild(infoSpan);
  } else {
    smallError.innerHTML = message || "";
    return 0;
  }
};
const removeError = (fieldID, errorID) => {
  let field = document.getElementById(fieldID);
  field.classList.remove("border-red");
  let smallError = document.getElementById(errorID);
  
  if (smallError) {
    smallError.remove();
    field.nextElementSibling.remove();
  }
};
const isValidEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
let form = document.getElementsByClassName("signup__form");
form[0].addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  let firstName = event.target[0].value,
    lastName = event.target[1].value,
    email = event.target[2].value,
    password = event.target[3].value;
    
  if (!firstName) {
    createError(
      "input_firstname",
      "first_name_invalid",
      "First Name cannot be empty"
    );
  } else {
    removeError("input_firstname", "first_name_invalid");
  }
  if (!lastName) {
    createError("input_lastname", "last_name_invalid", "Last Name cannot be empty");
  } else {
    removeError("input_lastname", "last_name_invalid");
  }
  if (!email) {
    createError("input_email", "email_invalid", "Email cannot be empty");
  } else {
    if (!isValidEmail(email)) {
      removeError("input_email", "email_invalid");
      createError("input_email", "email_invalid", "Looks like this is not an email");
    } else {
      removeError("input_email", "email_invalid");
    }
  }
  if (!password) {
    createError("input_password", "password_invalid", "Password cannot be empty");
  } else {
    removeError("input_password", "password_invalid");
  }
});
