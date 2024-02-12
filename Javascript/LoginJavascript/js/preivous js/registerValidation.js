function validateform(event) {
  let userE1 = [];

  if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"));
    for (let x in users) {
      if (users.hasOwnProperty(x)) {
        if (users[x].hasOwnProperty("email")) {
          userE1.push(users[x].email);
        }
      }
    }
    console.log(userE1)
  }

  function checkEmailAddress(emailId) {
    return userE1.includes(emailId);
  }

  const validations = [
    {
      fieldId: "exampleFirstName",
      validation: /^[A-Za-z ]{3,64}$/,
      errorId: "firstNameError",
      errorMsg: "Please enter only alphabetic characters (a-z)",
    },
    {
      fieldId: "exampleLastName",
      validation: /^[A-Za-z ]{3,64}$/,
      errorId: "lastNameError",
      errorMsg: "Please enter only alphabetic characters (a-z)",
    },
    {
      fieldId: "exampleInputEmail",
      validation: /^[A-Za-z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/,
      errorId: "emailError",
      errorMsg: "Please enter a valid email",
    },
    {
      fieldId: "exampleInputPassword",
      validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      errorId: "passwordError",
      errorMsg:
        "Password must contain a minimum of eight characters, at least one letter and one number",
    },
  ];

  let error = false;

  validations.forEach((validationObj) => {
    const input = document.getElementById(validationObj.fieldId);
    const errorElement = document.getElementById(validationObj.errorId);

    if (!input.value) {
      errorElement.innerHTML = "Please enter a value";
      error = true;
    } else if (!validationObj.validation.test(input.value)) {
      errorElement.innerHTML = validationObj.errorMsg;
      error = true;
    } else if  (validationObj.fieldId === "exampleInputEmail") {
      if (checkEmailAddress(input.value)) {
        document.getElementById("emailError").innerHTML = "Email already exists";
        error = true;
      } else {
        errorElement.innerHTML = "";
      }
    
    } else {
      errorElement.innerHTML = "";
    }
  });

  const passwordInput = document.getElementById("exampleInputPassword");
  const repeatPasswordInput = document.getElementById("exampleRepeatPassword");
  const repeatPasswordError = document.getElementById("repeatPasswordError");

  if (passwordInput.value !== repeatPasswordInput.value) {
    repeatPasswordError.innerHTML = "Passwords do not match";
    error = true;
  } else {
    repeatPasswordError.innerHTML = "";
  }

  if (!error) {
    window.location.href = "login.html";
    let firstName = document.getElementById("exampleFirstName").value;
    let lastName = document.getElementById("exampleLastName").value;
    let emailE1 = document.getElementById("exampleInputEmail").value;
    let passwordE1 = document.getElementById("exampleInputPassword").value;

    let users = [];
    if (localStorage.getItem("users") != null) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    let ob = {
      firstName: firstName,
      lastName: lastName,
      email: emailE1,
      passsword: passwordE1,
    };

    users.push(ob);
    localStorage.setItem("users", JSON.stringify(users));
  }
  event.preventDefault();
}

// Registartion API


// Registration Api 
// URL : http://tifinvala.esy.es/api/registration.php
// method: POST
// Request Data:
// {
//     "firstname":"abc", 
//     "lastname":"xyz",
//     "email":"abcxyz@yopmail.com",
//     "mobileno":"1234567841",
//     "password":"Test@123",
//     "user_type" : 3
// }

