var p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // console.log("slowPromise");
    resolve("one");
  }, 500);
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(
  function(value) {
    console.log("resolve", value);
  },
  function(error) {
    console.log("reject", error);
  }
);
