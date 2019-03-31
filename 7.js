// 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。

const a = Promise.resolve('foo')
// 等价于
const b = new Promise(resolve => resolve('foo'))

/**
 * （1）参数是一个 Promise 实例
如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
 */

const p = new Promise((resolve, reject)=>{
  reject('error')
})

const c = Promise.reject(p)

console.log(c);

return;
/**
 * （2）参数是一个thenable对象
 * Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
 */
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);
});

/**
 * 3）参数不是具有then方法的对象，或根本就不是对象
 * 如果参数是一个原始值，或者是一个不具有then方法的对象，
 * 则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
 */

const p2 = Promise.resolve('Hello');

p2.then(function (s){
  console.log(s)
})

/**
 * 4）不带有任何参数
 * Promise.resolve方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
 * 所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve方法。
 */

const p3 = Promise.resolve();

p3.then(res=>{
  console.log(res, 'res');
});


