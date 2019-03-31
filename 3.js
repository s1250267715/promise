var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 3000, "first");
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(reject, 2000, "second");
  reject('second')
});
var p3 = new Promise((resolve, reject) => {
  reject('third');
});

Promise.all([p1, p2, p3]).then(
  function(values) {
    console.log(values);
  },
  function(error) {
    console.log(error);
  }
);
