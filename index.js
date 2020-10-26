let data = [
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
];

let username = prompt("enter the name:");

let filteredData = data.filter(function (element) {
  if (element.lastName.toLowerCase() === username.toLowerCase()) {
    return true;
  } else {
    return false;
  }
});

if (filteredData.length == 0) {
  alert("User is not found ¯\\_(ツ)_/¯");
}

let resultUser = filteredData[0];
let result = `user name: ${resultUser.firstName} ${resultUser.lastName} 
user age: ${resultUser.age}`;
alert(result);
