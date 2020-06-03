function username() {
  let username = document.getElementById("username");
  let errUsername = document.getElementById("errUsername");

  if (username.value === "" || username.value == null) {
    username.style.backgroundColor = "red";
    errUsername.innerHTML = "Please enter valid username";
  } else {
    username.style.backgroundColor = "white";
    errUsername.innerHTML = "";
  }

  if (username.value.length < 4 || username.value.length > 10) {
    username.style.backgroundColor = "red";
    errUsername.innerHTML =
      "Please enter username that has between 3 and 10 characthers";
  } else {
    username.style.backgroundColor = "white";
    errUsername.innerHTML = "";
  }
}

function email() {
  let email = document.getElementById("email");
  let errEmail = document.getElementById("errEmail");

  if (email.value === "" || email.value == null) {
    email.style.backgroundColor = "red";
    errEmail.innerHTML = "Please enter valid email";
  } else {
    email.style.backgroundColor = "white";
    errEmail.innerHTML = "";
  }

  if (email.value.length < 10 || email.value.length > 30) {
    email.style.backgroundColor = "red";
    errEmail.innerHTML = "Please enter valid email";
  } else {
    email.style.backgroundColor = "white";
    errEmail.innerHTML = "";
  }
}

function pwd() {
  let pwd = document.getElementById("pwd");
  let errPwd = document.getElementById("errPwd");

  if (pwd.value === "" || pwd.value == null) {
    pwd.style.backgroundColor = "red";
    errPwd.innerHTML = "Please enter password";
  } else {
    pwd.style.backgroundColor = "white";
    errPwd.innerHTML = "";
  }

  if (pwd.value.length < 3 || pwd.value.length > 10) {
    pwd.style.backgroundColor = "red";
    errPwd.innerHTML = "Please enter password beetwen 3 and 10 characters";
  } else {
    pwd.style.backgroundColor = "white";
    errPwd.innerHTML = "";
  }
}

function cpwd() {
  let cpwd = document.getElementById("cpwd");
  let errCpwd = document.getElementById("errCpwd");
  let pwd = document.getElementById("pwd");

  if (cpwd.value != pwd.value) {
    cpwd.style.backgroundColor = "red";
    errCpwd.innerHTML = "Passwords are not the same!";
  } else {
    cpwd.style.backgroundColor = "white";
    errCpwd.innerHTML = "";
  }
}

function pretrazi() {
  let pretraga = document.getElementById("pretraga").value;

  alert(pretraga);
}
