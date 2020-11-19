import modalControl from "./modal.js";
const modal = modalControl();
const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const ageInput = document.getElementById("age-input");
const $addUserToTableBtn = document.getElementById("add-user-to-table");

let $open = document.querySelector(".add-user");
let $close = document.querySelectorAll(".close");

$open.addEventListener("click", function () {
  modal.toggle("open");
});

for (let $btn of $close) {
  $btn.addEventListener("click", function () {
    modal.toggle("close");
  });
}

let $table = document.querySelector(".table");

function addUserToTable(user) {
  let dataRow = `<tr>
  	<td>${user.firstName}</td>
  	<td>${user.lastName}</td>
	  <td>${user.age}</td>
  </tr>`;
  $table.innerHTML += dataRow;
}

let usersJson = localStorage.getItem("users");
let users = JSON.parse(usersJson);

if (users === null) {
  users = [
    {
      firstName: "Ashton",
      lastName: "Kutcher",
      age: 40,
    },
    {
      firstName: "Bradley",
      lastName: "Pitt",
      age: 54,
    },
    {
      firstName: "Hannah",
      lastName: "Dakota",
      age: 24,
    },
    {
      firstName: "Roman",
      lastName: "Aheychik",
      age: 20,
    },
    {
      firstName: "Valentino",
      lastName: "Rossi",
      age: 41,
    },
    {
      firstName: "Macaulay",
      lastName: "Culkin",
      age: 40,
    },
  ];
  usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
}

for (let user of users) {
  addUserToTable(user);
}

$addUserToTableBtn.addEventListener("click", function () {
  let newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
  };
 
let getArray = localStorage.getItem('users');
let newArray = JSON.parse(getArray);
newArray.push(newUser);
let newStringArray = JSON.stringify(newArray);
 localStorage.setItem('users', newStringArray);

  addUserToTable(newUser);
  modal.toggle("close");
});

