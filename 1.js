const axios = require("axios");

const test1 = async function() {
  const res = await axios.get("https://api.github.com/users/github");
  return res
  //  throw new Error('xxxx')
  
};

const test2 = async function() {
  const res = await axios.get("https://github.com/");
};

// console.log(test1(), 'test1()');

async function test(){
  // 如果test1没有return, a为 undefined
  const a = await test1();
  const b = await test2();
  console.log(a, 'a');
  console.log(b, 'b');
}

// test()


const p1 = new Promise((resolve, reject)=>{
  const res = axios.get("https://api.github.com/users/github")
  resolve(res)
})

// p1.then(res=>{
//   console.log(res, 'res');
// })

const p2 = new Promise((resolve, reject)=>{
  const res = axios.get("https://github.com/")
  resolve(res)
})

// Promise.all([p1,p2]).then(res=>{
//   console.log(res, 'all');
// })

// Promise.race([p1,p2]).then(res=>{
//   console.log(res, 'race');
// })
