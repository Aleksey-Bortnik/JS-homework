function timer(a) {
  console.log(a);

  for (let i = 1; i <= 60; i++) {
    setTimeout(() => {
      a++;
      console.log(a);
    }, i * 1000);
  }
  setTimeout(function () {
    alert("А minute has passed!");
  }, 60000);
}

function sum(array) {
    let arrayOfNumbers = array.filter(function (el) {return typeof el === "number"});
    let result = arrayOfNumbers.reduce(function(a, b) {return a + b});
    return result;
} 

