const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
let loginuser;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function getUser(){
    let uid= getCookie('loginuser');
     let users = JSON.parse(localStorage.getItem('users'));
     let finduser =  users.find((element) => {
        return element.id == uid;
   });
   if(finduser!= undefined && finduser!= null){
        //alert(finduser.firstName);
        loginuser = finduser;
        showTask();
    }else{
        location.assign('login.html')
    }
}

function addTask() {
    if (inputBox.value === ''){
        alert("You must right something");
    }
    else {
        saveData(inputBox.value);
        showTask();
    }

   
    inputBox.value = '';
  
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(taskname) {
    let todo = [];
    if(localStorage.getItem('toDoList') != null){
         todo = JSON.parse(localStorage.getItem('toDoList'));
    }
    let taskobj = {
        'user_id':loginuser.id,
        "TaskName":taskname
    }
     todo.push(taskobj)
    localStorage.setItem("toDoList", JSON.stringify(todo));
}

function showTask() {

    let todo = [];
    if(localStorage.getItem('toDoList') != null){
         todo = JSON.parse(localStorage.getItem('toDoList'));
    }
    listContainer.innerHTML = '';
    if(todo.length > 0){
         console.log(loginuser);
         
        todo.forEach(element => {
            console.log(element.user_id);
            console.log(loginuser.id);
             if(element.user_id == loginuser.id){
        let li = document.createElement('li');
        li.innerHTML = element.TaskName;
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        listContainer.appendChild(li);
             }
 
        });
    }

   // listContainer.innerHTML = localStorage.getItem("data");
}
getUser();


// This JavaScript code appears to be related to a to-do list application that allows users to add and manage tasks. It uses web storage (localStorage and cookies) to store user data and tasks locally in the user's browser. Let's break down the code and explain its functionality step by step:

// HTML Elements:

// The code interacts with two HTML elements, which are obtained using getElementById:
// inputBox: Represents an input element where users can type their tasks.
// listContainer: Represents an unordered list (UL) element where the tasks are displayed.
// getCookie Function:

// This function is used to retrieve a cookie by name. It takes a cookie name (cname) as an argument.
// It uses the document.cookie property to access and decode the cookies stored in the browser.
// It then iterates through the cookies to find the one with the specified name and returns its value.
// getUser Function:

// This function is responsible for identifying the currently logged-in user.
// It calls getCookie to get the value of a cookie named "loginuser," which should store the user's ID.
// It also attempts to retrieve user data from the browser's localStorage, assuming that user data is stored there as a JSON object.
// If a user with the retrieved ID is found in the user data, it sets the loginuser variable to that user's information. Otherwise, it redirects the user to a login page.
// addTask Function:

// This function is called when the user wants to add a new task.
// It checks if the inputBox is empty. If it is, an alert is shown to inform the user that they need to enter a task.
// If the input is not empty, it calls the saveData function to save the task, and then it calls showTask to update the displayed task list.
// Event Listener for List Container:

// This event listener is attached to the listContainer and listens for click events.
// It checks if the clicked element is an LI element, and if so, it toggles the "checked" class for that LI element.
// If the clicked element is a SPAN element, it removes the parent LI element (which represents a task) from the list.
// After either action, it calls saveData to save the updated task list.
// saveData Function:

// This function is responsible for saving a new task to local storage.
// It retrieves the existing task data from local storage, parses it as a JSON object, and appends the new task.
// It then stores the updated task list back into local storage.
// showTask Function:

// This function is called to display the tasks on the web page.
// It retrieves the task list from local storage and clears the listContainer.
// It then iterates through the tasks, checking if each task belongs to the currently logged-in user (based on user IDs).
// If a task belongs to the user, it creates an LI element and appends it to the listContainer.
// getUser Function (Bottom of the Code):

// This function is called initially to determine the logged-in user and show their tasks on the web page.
// In summary, this code provides basic functionality for a to-do list application. It allows users to add tasks, mark them as completed, and remove tasks. User data is stored in local storage, and user authentication is based on a cookie that contains a user ID.

