const axios = require("axios");

// 1.async和await
const test = async function() {
  const res = await axios.get("https://api.github.com/users/github");
  log(res);
  // return res 
};

// resolve, pending, reject
console.log(test());

// test().then(res=>{
//   console.log(res, 'res');
// })

2.
const a = axios.get('https://api.github.com/users/github')

// a.then(res=>log(res))

// 3. Promise 新建后就会立即执行。
const promise = new Promise(function(resolve, reject) {
  // todo 处理逻辑
  const res = axios.get("https://api.github.com/users/github");
  resolve(res);
});

// promise.then(res => log(res));

function log(res) {
  console.log(`name: ${res.data.name}`);
  console.log(`url: ${res.data.url}`);
}


