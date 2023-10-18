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

function sortTask() {
  let sortType = document.getElementById("sort-task").value;
  let tasks = getTasks();

  tasks.sort(function (a, b) {
    switch (sortType) {
      case "date":
        let temp = new Date(a.due) - new Date(b.due);
        // console.log(temp);
        return temp;
      case "completed":
        return b.status - a.status;
      case "incompleted":
        return a.status - b.status;
      default:
        return 0;
    }
  });
  localStorage.setItem(`${currentLoginUser}-tasks`, JSON.stringify(tasks));

  loadToUi(tasks);
}

function search() {
  //   console.log("running");
  let searchBarValue = document.getElementById("search-bar").value;
  let filterType = document.getElementById("search-bar-filter").value;
  let sortType = document.getElementById("sort-task").value;
  //   console.log(filterType);
  let tasks = getTasks();
  console.log(searchBarValue);

  searchedtasks = tasks.filter((task) => {
    return task.title.toLowerCase().includes(searchBarValue.toLowerCase());
  });

  console.log(searchedtasks);
  searchedtasks.sort(function (a, b) {
    switch (sortType) {
      case "date":
        let temp = new Date(a.due) - new Date(b.due);
        // console.log(temp);
        return temp;
      case "completed":
        return b.status - a.status;
      case "incompleted":
        return a.status - b.status;
      default:
        return 0;
    }
  });

  loadToUi(searchedtasks, filterType);
}

function filtertasks(val) {
  document.getElementById("search-bar-filter").value = val;
  document.getElementById("search-bar-filter").click();
}

function loadToUi(parsedData, type = "all") {
  console.log(parsedData);
  loadDateOrNav();
  if (window.innerWidth <= 1024) {
    document.getElementById("sidebar").classList.remove("left");
  }
  listEle.innerHTML = "";
  let state = 0;

  //   let data = localStorage.getItem("tasks");
  //   parsedData = JSON.parse(data) || [];

  // const workTaskList = document.createElement("div");
  // workTaskList.classList.add("task-list-category-container");
  // const personalTaskList = document.createElement("div");
  // personalTaskList.classList.add("task-list-category-container");
  // const studyTaskList = document.createElement("div");
  // studyTaskList.classList.add("task-list-category-container");

  if (parsedData.length > 0) {
    parsedData.forEach((task, index) => {
      let taskContainer = document.createElement("div");
      taskContainer.classList.add("task-container");

      let titleDropCon = document.createElement("div");
      titleDropCon.classList.add("title-drop-con");
      let title = document.createElement("div");
      title.classList.add("title");
      // title.innerHTML='<i class="fa-solid fa-candy-cane candy"></i>'
      title.innerHTML = '<i class="fa-solid fa-thumbtack candy"></i>';
      title.appendChild(document.createTextNode(task.title));

      let menu = document.createElement("div");
      menu.classList.add("menu");

      let dots = document.createElement("div");
      dots.classList.add("dots");

      function createdot() {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        return dot;
      }

      let dropdown = document.createElement("div");
      dropdown.classList.add("dropdown");

      dots.appendChild(createdot());
      dots.appendChild(createdot());
      dots.appendChild(createdot());

      // <div class="menu">
      //     <div class="dots">
      //         <div class="dot"></div>
      //         <div class="dot"></div>
      //         <div class="dot"></div>
      //     </div>
      //     <div class="dropdown">
      //         <a href="#">Item 1</a>
      //         <a href="#">Item 2</a>
      //         <a href="#">Item 3</a>
      //     </div>
      // </div>

      let deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("delete task"));
      deleteButton.classList.add("delete-button");
      deleteButton.classList.add("drop-button");
      deleteButton.onclick = () => deleteTask(task.id);

      let statusButton = document.createElement("button");
      statusButton.classList.add("status-button");
      statusButton.classList.add("drop-button");
      if (task.status == true) {
        statusButton.appendChild(document.createTextNode("completed"));
      } else {
        statusButton.appendChild(document.createTextNode("incompleted"));
      }
      statusButton.onclick = () => {
        //   console.log("clicked");
        changeStatus(task.id);
        sortTask();
      };

      dropdown.appendChild(statusButton);
      dropdown.appendChild(deleteButton);

      menu.appendChild(dots);
      menu.appendChild(dropdown);

      let description = document.createElement("div");
      description.classList.add("desc");
      let desc = task.desc;
      if (task.desc.length > 60) {
        desc = task.desc.substring(0, 60);
        desc = desc.substring(0, desc.lastIndexOf(" ")) || desc.substring(0, 30);
        desc = desc + "...";
      }
      description.appendChild(document.createTextNode(desc));

      let categories = document.createElement("div");
      categories.classList.add("category-con");

      function createCategory(name) {
        let category = document.createElement("div");
        category.classList.add("category");
        category.appendChild(document.createTextNode(name));
        if (name == "work") {
          category.style.background = "#BBEBDA";
        } else if (name == "personal") {
          category.style.background = "#CACEFF";
        } else if (name == "study") {
          category.style.background = "#FCE3AD";
        }
        return category;
      }
      console.log(task.category);
      let categoriesArray = task.category;

      if (categoriesArray.includes("work")) {
        categories.appendChild(createCategory("work"));
      }
      if (categoriesArray.includes("personal")) {
        categories.appendChild(createCategory("personal"));
      }
      if (categoriesArray.includes("study")) {
        categories.appendChild(createCategory("study"));
      }

      const due = new Date(task.due);
      let day = "Monday";
      switch (due.getDay()) {
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

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let currentMonth = months[due.getMonth()];

      let dateCon = document.createElement("div");
      dateCon.classList.add("date-con");
      let timericon = document.createElement("div");
      timericon.innerHTML = '<i class="fa-solid fa-clock-rotate-left timer"></i>';
      timericon.classList.add("timer-icon");

      let date = document.createElement("div");
      date.classList.add("due-date");
      date.appendChild(
        document.createTextNode(`${due.getDate()} ${currentMonth} ${due.getFullYear()}`),
      );

      dateCon.appendChild(timericon);
      dateCon.appendChild(date);

      // console.log(day,currentMonth,due.getDate());
      let userCon = document.createElement("div");
      userCon.classList.add("user-con");
      let usrName = document.createElement("div");
      usrName.classList.add("login-user-name");
      usrName.appendChild(document.createTextNode(currentLoginUser));

      let userWrapper = document.createElement("div");
      userWrapper.classList.add("user-wrapper");
      let userAvatarNameWrapper = document.createElement("div");
      userAvatarNameWrapper.classList.add("userAvatarNameWrapper");
      userAvatarNameWrapper.innerHTML = '<img src="./img/avatar.png" class="avatar" />';
      userAvatarNameWrapper.appendChild(usrName);
      userWrapper.appendChild(userAvatarNameWrapper);
      let stateContainer = document.createElement("div");
      stateContainer.style.cursor = "pointer";
      stateContainer.onclick = () => {
        console.log(task.id);
        changeStatus(task.id);
      };
      stateContainer.classList.add("state");
      if (task.status) {
        stateContainer.innerHTML = '<i class="fa-regular fa-circle-check state-icon"></i>';
        stateContainer.appendChild(document.createTextNode("Done"));
        stateContainer.style.background = "#94FFCA";
      } else {
        stateContainer.innerHTML = '<i class="fa-regular fa-circle-xmark state-icon"></i>';
        stateContainer.appendChild(document.createTextNode("Pending"));
        stateContainer.style.background = "#FED7D1";
      }
      userWrapper.appendChild(stateContainer);
      userCon.appendChild(userWrapper);
      title.onclick = () => {
        console.log("click working");
        editTaskPanel.style.right = "0%";
        let editTitle = document.querySelector(".edit-title");
        let editdesc = document.querySelector(".edit-desc");
        let editdate = document.querySelector(".edit-date");
        editTitle.innerHTML = task.title;
        editdesc.innerHTML = task.desc;
        editdate.innerHTML = `${due.getDate()} ${currentMonth} ${due.getFullYear()}`;
        editwork.classList.remove("highlight-cat");
        editpersonal.classList.remove("highlight-cat");
        editstudy.classList.remove("highlight-cat");
        work.classList.remove("highlight-cat");
        personal.classList.remove("highlight-cat");
        study.classList.remove("highlight-cat");
        savecategoryarray();
        savecategoryarray(task.category);
        task.category.forEach((item) => {
          switch (item) {
            case "work":
              editwork.classList.add("highlight-cat");
              break;
            case "personal":
              editpersonal.classList.add("highlight-cat");
              break;
            case "study":
              editstudy.classList.add("highlight-cat");
              break;
          }
        });
        let save = document.querySelector(".save");
        save.onclick = () => {
          let alltasks = getTasks();
          console.log(task);
          alltasks.map((item) => {
            if (item.id == task.id) {
              item.title = editTitle.innerHTML;
              item.desc = editdesc.innerHTML;
              item.category = getcategoryarray();
            }
          });

          localStorage.setItem(`${currentLoginUser}-tasks`, JSON.stringify(alltasks));
          search();
          editTaskPanel.style.right = "-100%";
        };
      };

      titleDropCon.appendChild(title);
      titleDropCon.appendChild(menu);

      let deletebutton2 = document.createElement("div");
      deletebutton2.classList.add("delete-icon-button");
      deletebutton2.innerHTML = '<i class="fa-solid fa-trash delete-icon-button"></i>';
      deletebutton2.onclick = () => deleteTask(task.id);
      titleDropCon.appendChild(deletebutton2);
      taskContainer.appendChild(titleDropCon);
      taskContainer.appendChild(description);
      taskContainer.appendChild(categories);
      taskContainer.appendChild(dateCon);
      taskContainer.appendChild(userCon);
      function addOrNot(list, taskcon, task) {
        //   console.log(type);
        if (type == "all") {
          state++;
          list.appendChild(taskcon);
        } else if (type == "incompleted") {
          if (task.status == false) {
            state++;
            list.appendChild(taskcon);
          }
        } else if (type == "completed") {
          if (task.status == true) {
            state++;
            list.appendChild(taskcon);
          }
        }
      }

      // switch (task.category) {
      //   case "work":
      //     addOrNot(workTaskList, taskContainer, task);
      //     break;
      //   case "personal":
      //     addOrNot(personalTaskList, taskContainer, task);
      //     break;
      //   case "study":
      //     addOrNot(studyTaskList, taskContainer, task);
      //     break;
      // }

      addOrNot(listEle, taskContainer, task);
      console.log(state);

      // listEle.appendChild(taskContainer)
    });
  }

  if (state == 0) {
    console.log("no data");
    listEle.innerHTML = `<img src="./img/no.png" class="no-data" />`;
  }

  // listEle.appendChild(workTaskList);
  // listEle.appendChild(personalTaskList);
  // listEle.appendChild(studyTaskList);
}

function getTasks() {
  return JSON.parse(localStorage.getItem(`${currentLoginUser}-tasks`)) || [];
}
function saveTasks() {
  return JSON.parse(localStorage.getItem(`${currentLoginUser}-tasks`)) || [];
}
function creatcategoryarray() {
  localStorage.setItem("categoriesArray", JSON.stringify([]));
}
function getcategoryarray() {
  if (!JSON.parse(localStorage.getItem("categoriesArray"))) {
    localStorage.setItem("categoriesArray", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("categoriesArray")) || [];
}
function savecategoryarray(data = []) {
  localStorage.setItem("categoriesArray", JSON.stringify(data));
}
