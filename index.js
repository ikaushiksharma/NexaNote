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

let sortTaskbydate = document.getElementById("sort-task");
sortTaskbydate.value = "none";
duedateTrigger.onclick = () => {
  console.log("triggering");
  duedateTrigger.classList.toggle("color-change");
  if (sortTaskbydate.value == "date") {
    sortTaskbydate.value = "none";
  } else {
    console.log("date");
    sortTaskbydate.value = "date";
  }
  console.log(sortTaskbydate.value);
  search();
};
closeLoginSignup.onclick = () => {
  signupLoginPage.style.right = "-100%";
};

let currentLoginUser = "";
let switchStateUser = true;
savecategoryarray();

// show();
search();

const useridEle = document.getElementById("username");
const passEle = document.getElementById("password");

document.querySelector(".close-popup").addEventListener("click", () => {
  messagePop.style.display = "none";
});

document.querySelectorAll(".add-task-button")[0].addEventListener("click", () => {
  AddTaskSection.style.width = "30%";
  if (window.innerWidth < 1024) {
    AddTaskSection.style.width = "40%";
    document.getElementById("sidebar").classList.remove("left");
  }
  if (window.innerWidth < 768) {
    AddTaskSection.style.width = "100%";
    document.getElementById("sidebar").classList.remove("left");
  }
  console.log("add task click");
  AddTaskSection.style.right = "0";
  closePanel.style.display = "block";
});
document.querySelectorAll(".add-task-button")[1].addEventListener("click", () => {
  AddTaskSection.style.width = "30%";
  if (window.innerWidth < 1024) {
    AddTaskSection.style.width = "40%";
    document.getElementById("sidebar").classList.remove("left");
  }
  if (window.innerWidth < 768) {
    AddTaskSection.style.width = "100%";
    document.getElementById("sidebar").classList.remove("left");
  }
  console.log("add task click");
  AddTaskSection.style.right = "0";
  closePanel.style.display = "block";
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

all.classList.add("out");
all.children[0].children[0].classList.add("color-blue");
function removefromall() {
  closePanel.style.display = "none";
  work.classList.remove("highlight-cat");
  personal.classList.remove("highlight-cat");
  study.classList.remove("highlight-cat");
  editwork.classList.remove("highlight-cat");
  editpersonal.classList.remove("highlight-cat");
  editstudy.classList.remove("highlight-cat");
  all.classList.remove("out");
  completedbutton.classList.remove("out");
  incompletedbutton.classList.remove("out");
  all.children[0].children[0].classList.remove("color-blue");
  completedbutton.children[0].children[0].classList.remove("color-blue");
  incompletedbutton.children[0].children[0].classList.remove("color-blue");
}

document.querySelector(".close-edit").addEventListener("click", () => {
  document.getElementById("edit-task").style.right = "-100%";
});

work.onclick = () => {
  let categoriesArray = getcategoryarray();
  work.classList.toggle("highlight-cat");
  if (categoriesArray.includes("work")) {
    categoriesArray.splice(categoriesArray.indexOf("work"), 1);
  } else {
    categoriesArray.push("work");
  }
  savecategoryarray(categoriesArray);
};
personal.onclick = () => {
  let categoriesArray = getcategoryarray();
  personal.classList.toggle("highlight-cat");
  if (categoriesArray.includes("personal")) {
    categoriesArray.splice(categoriesArray.indexOf("personal"), 1);
  } else {
    categoriesArray.push("personal");
  }
  savecategoryarray(categoriesArray);
};
study.onclick = () => {
  let categoriesArray = getcategoryarray();
  study.classList.toggle("highlight-cat");
  if (categoriesArray.includes("study")) {
    categoriesArray.splice(categoriesArray.indexOf("study"), 1);
  } else {
    categoriesArray.push("study");
  }
  savecategoryarray(categoriesArray);
};
editwork.onclick = () => {
  let categoriesArray = getcategoryarray();
  editwork.classList.toggle("highlight-cat");
  if (categoriesArray.includes("work")) {
    categoriesArray.splice(categoriesArray.indexOf("work"), 1);
  } else {
    categoriesArray.push("work");
  }
  savecategoryarray(categoriesArray);
};
editpersonal.onclick = () => {
  let categoriesArray = getcategoryarray();
  editpersonal.classList.toggle("highlight-cat");
  if (categoriesArray.includes("personal")) {
    categoriesArray.splice(categoriesArray.indexOf("personal"), 1);
  } else {
    categoriesArray.push("personal");
  }
  savecategoryarray(categoriesArray);
};
editstudy.onclick = () => {
  let categoriesArray = getcategoryarray();
  editstudy.classList.toggle("highlight-cat");
  if (categoriesArray.includes("study")) {
    categoriesArray.splice(categoriesArray.indexOf("study"), 1);
  } else {
    categoriesArray.push("study");
  }
  savecategoryarray(categoriesArray);
};

all.onclick = () => {
  console.log("all");
  removefromall();
  filtertasks("all");
  all.classList.add("out");
  all.children[0].children[0].classList.add("color-blue");
};
completedbutton.onclick = () => {
  removefromall();
  filtertasks("completed");
  completedbutton.classList.add("out");
  completedbutton.children[0].children[0].classList.add("color-blue");
};
incompletedbutton.onclick = () => {
  removefromall();
  filtertasks("incompleted");
  incompletedbutton.classList.add("out");
  incompletedbutton.children[0].children[0].classList.add("color-blue");
};

function loaddate() {
  const date = new Date();
  let day = "";
  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById("today-date").innerHTML = `<h2>Today ${date.getDate()}, ${day}<h2/>`;
}

function loadNavBarHam() {
  let ham = document.createElement("i");
  ham.classList.add("navbar-ham");
  ham.classList.add("fa-solid");
  ham.classList.add("fa-bars");
  ham.onclick = () => {
    document.getElementById("sidebar").classList.toggle("left");
    closePanel.style.display = "block";
  };
  document.getElementById("today-date").appendChild(ham);
}
window.addEventListener("resize", loadDateOrNav);

function loadDateOrNav() {
  document.getElementById("today-date").innerHTML = "";
  if (window.innerWidth <= 1024) {
    loadNavBarHam();
  } else {
    loaddate();
  }
  let child = document.querySelector(".sidebar-signout-addtask");
}

function popMessageWindow(message) {
  if (messagePop.children.length > 2) {
    messagePop.removeChild(messagePop.children[2]);
  }
  let newpopmessage = document.createElement("div");
  newpopmessage.classList.add("pop-message-window");
  newpopmessage.innerHTML = message;
  if (messagePop.children.length > 0) {
    messagePop.insertBefore(newpopmessage, messagePop.children[0]);
  } else {
    messagePop.appendChild(newpopmessage);
  }

  setTimeout(() => {
    // newpopmessage.style.display = "none"
    messagePop.removeChild(newpopmessage);
  }, 4000);
}

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

function show() {
  let tasks = getTasks();
  loadToUi(tasks);
}

function deleteTask(id) {
  let tasks = getTasks();
  //   console.log(index, "   ", tasks[index]);
  tasks = tasks.filter((item) => {
    if (item.id == id) {
      return false;
    }
    return true;
  });
  localStorage.setItem(`${currentLoginUser}-tasks`, JSON.stringify(tasks));
  search();
}

function changeStatus(id) {
  let tasks = getTasks();
  tasks.forEach((item) => {
    if (item.id == id) {
      item.status = !item.status;
    }
  });
  localStorage.setItem(`${currentLoginUser}-tasks`, JSON.stringify(tasks));
  search();
}

function addTask() {
  if (!localStorage.getItem(`${currentLoginUser}-tasks`)) {
    localStorage.setItem(`${currentLoginUser}-tasks`, JSON.stringify([]));
  }

  if (
    inputTaskTitle.value &&
    inputTaskDesc.value &&
    dueDate.value &&
    getcategoryarray().length > 0
  ) {
    closePanel.style.display = "none";

    let Alltasks = getTasks();
    let max = 0;
    Alltasks.forEach((item) => {
      if (item.id >= max) max = item.id + 1;
    });

    let task = {
      id: max,
      title: inputTaskTitle.value,
      desc: inputTaskDesc.value,
      category: [],
      due: dueDate.value,
      status: false,
    };
    let catry = getcategoryarray();
    console.log(catry);
    task.category = catry.map((item) => item);
    AddTaskSection.style.right = "-100%";
    let tasks = getTasks();
    tasks.push(task);
    console.log(tasks);
    localStorage.setItem(`${currentLoginUser}-tasks`, JSON.stringify(tasks));
  } else {
    popMessageWindow("Data invalid or Not Entered");
  }
  savecategoryarray();
  removefromall();
  filtertasks("all");
  all.classList.add("out");
  all.children[0].children[0].classList.add("color-blue");
  search();
}

// document.querySelector(".enter-event").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
closePanel.style.display = "none";
closePanel.addEventListener("click", () => {
  console.log("enter");
  document.getElementById("sidebar").classList.remove("left");
  AddTaskSection.style.right = "-100%";
  closePanel.style.display = "none";
});
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Escape") {
    signupLoginPage.style.right = "-100%";
    AddTaskSection.style.right = "-100%";
    messagePop.innerHTML = "";
    closediv.style.right = "-100%";
    console.log("chal ra h");
    document.getElementById("sidebar").classList.remove("left");
  } else {
    if (event.key == "/") {
      event.preventDefault();
      document.getElementById("search-bar").focus();
    }
  }
  let x = document.getElementById("search-bar");
  document.getElementById("search-bar").addEventListener("focus", () => {
    x.value = "";
    search();
  });
});
