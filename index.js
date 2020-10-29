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
