const p1 = new Promise((resolve, reject) => {
  resolve("first");
  // reject("first");
});

p1.then(
  res => {
    console.log(res, "res");
    // throw new Error('error')
    return Promise.reject('xxxx')
  },
  error => {
    console.log(error, "then error");
    // return Promise.reject(error)
  }
).catch(error=>{
  console.log(error, 'catch error');
})
