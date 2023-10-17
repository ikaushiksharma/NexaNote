const inputTaskTitle = document.getElementById("input-task-title");
const inputTaskDesc = document.getElementById("input-task-desc");
const dueDate = document.getElementById("due-date");
const category = document.getElementById("categories");
const addTaskButton = document.querySelector(".add-task-button");
const listEle = document.getElementById("task-list");
const signupButton = document.getElementById("signup");
const loginButton = document.getElementById("login");
const signupLoginPage = document.getElementById("signup-login");
const signupLoginButton = document.getElementById("signup-login-button");
const duedateTrigger = document.querySelector(".dueDate");
const popup = document.getElementById("popup");
const popupData = document.getElementById("popup-data");
const mainApp = document.getElementById("main-app");
const closediv = document.getElementById("close-login-signup");
const authSection = document.getElementById("auth-section");
const work = document.querySelector(".work");
const personal = document.querySelector(".personal");
const study = document.querySelector(".study");
const editwork = document.querySelector(".edit-work");
const editpersonal = document.querySelector(".edit-personal");
const editstudy = document.querySelector(".edit-study");
const all = document.querySelector(".all");
const completedbutton = document.querySelector(".completed");
const incompletedbutton = document.querySelector(".incompleted");
const messagePop = document.querySelector(".message-pop");
const AddTaskSection = document.getElementById("add-task-section");
const closePanel = document.querySelector(".close-panels");
const closeLoginSignup = document.querySelector(".close-login");
const editTaskPanel = document.getElementById("edit-task");

let currentLoginUser = "";
let switchStateUser = true;

const useridEle = document.getElementById("username");
const passEle = document.getElementById("password");

document.querySelector(".close-popup").addEventListener("click", () => {
  messagePop.style.display = "none";
});

closediv.onclick = () => {
  console.log("close");
  signupLoginPage.style.right = "-100%";
  closediv.style.right = "-100%";
};
signupButton.addEventListener("click", () => {
  useridEle.value = "";
  passEle.value = "";
  signupLoginPage.style.right = "0%";
  closediv.style.right = "0%";
  signupLoginButton.innerHTML = "SIGNUP";
  signupLoginButton.onclick = () => {
    signup();
  };
});
loginButton.addEventListener("click", () => {
  useridEle.value = "";
  passEle.value = "";
  signupLoginPage.style.right = "0%";
  closediv.style.right = "0%";
  signupLoginButton.innerHTML = "LOGIN";
  signupLoginButton.onclick = () => {
    login();
  };
});

function stateBasedSignupLogin(state = "signup") {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  switch (state) {
    case "signup":
      let user = users.find(function (user, index, arr) {
        if (user.username == username) {
          return true;
        } else {
          return false;
        }
      });
      console.log(user);

      if (username != "" && password != "" && !user) {
        users.push({
          username,
          password,
        });
        localStorage.setItem("users", JSON.stringify(users));
        currentLoginUser = username;
        console.log(password);
        document.getElementById("task-manager-section").style.display = "flex";
        authSection.style.display = "none";
        document.querySelector(".bg-img").src = "";
        document.getElementById("task-manager-section").style.background = "var(--color-3-hex)";
        show();
      } else {
        popMessageWindow("User Exist");
      }
      break;
    case "login":
      let findUser = users.find(function (user, index, arr) {
        if (user.username == username) {
          return true;
        } else {
          return false;
        }
      });
      console.log(findUser);

      if (findUser) {
        if (findUser.password == password) {
          currentLoginUser = username;
          console.log(password);
          document.getElementById("task-manager-section").style.display = "flex";
          authSection.style.display = "none";
          document.querySelector(".bg-img").src = "";
          document.getElementById("task-manager-section").style.background = "var(--color-3-hex)";
          show();
        } else {
          popMessageWindow("Password doesn't match");
        }
      } else {
        popMessageWindow("User Doesn't Exist");
      }

      break;

    default:
      break;
  }
}

function login() {
  console.log("login");
  stateBasedSignupLogin("login");
}

function signup() {
  console.log("signup");
  stateBasedSignupLogin("signup");
}

function signout() {
  document.getElementById("task-manager-section").style.display = "none";
  document.getElementById("auth-section").style.display = "flex";
  signupLoginPage.style.right = "-100%";
  closediv.style.right = "-100%";
  messagePop.innerHTML = "";
}

function switchState() {
  document.getElementById("signup-login-switch").innerHTML = switchStateUser ? "Signup" : "Login";
  let signupLoginButtton = document.getElementById("signup-login-button");
  signupLoginButtton.innerHTML = switchStateUser ? "Login" : "Signup";
  if (switchStateUser) {
    signupLoginButtton.onclick = login;
  } else {
    signupLoginButtton.onclick = signup;
  }

  switchStateUser = !switchStateUser;
}
