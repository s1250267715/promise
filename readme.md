# promise 和 async/await 

# promise 介绍

1. Promise对象用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作。
它有以下三种状态：
pending：初始值，不是fulfilled，也不是rejected
fulfilled：代表操作成功
rejected：代表操作失败

2. Promise有两种状态改变的方式，既可以从pending转变为fulfilled，也可以从pending转变为rejected。Promise 新建后就会立即执行, 一旦状态改变，就「凝固」了，会一直保持这个状态，不会再发生变化。当状态发生变化，promise.then绑定的函数就会被调用。

3. Promise接受一个「函数」作为参数，该函数的两个参数分别是resolve和reject
resolve函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去； 
reject函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

4. 基本api

.then()  语法: Promise.prototype.then(onFulfilled, onRejected)
对promise添加onFulfilled和onRejected回调，并返回的是一个新的Promise实例（不是原来那个Promise实例），且返回值将作为参数传入这个新Promise的resolve函数。

.catch() 语法：Promise.prototype.catch(onRejected)
该方法是.then(undefined, onRejected)的别名，用于指定发生错误时的回调函数。

.finally() 语法：Promise.prototype.catch(onFinally) (目前已被遗弃 2.js)
如果你想在 promise 执行完毕后无论其结果怎样都做一些处理或清理时，finally() 方法可能是有用的。

.all() 语法：Promise.all(iterable)
该方法用于将多个Promise实例，包装成一个新的Promise实例。eg:

var p = Promise.all([p1, p2, p3]);
Promise.all方法接受一个数组（或具有Iterator接口）作参数，数组中的对象（p1、p2、p3）均为promise实例（如果不是一个promise，该项会被用Promise.resolve转换为一个promise)。它的状态由这三个promise实例决定。

当p1, p2, p3状态都变为fulfilled，p的状态才会变为fulfilled，并将三个promise返回的结果，按参数的顺序（而不是 resolved的顺序）存入数组，传给p的回调函数。(2.js)
当p1, p2, p3其中之一状态变为rejected，p的状态也会变为rejected，并把第一个被reject的promise的返回值，传给p的回调函数。(3.js)
这多个 promise 是同时开始、并行执行的，而不是顺序执行(4.js)

.race() 语法：Promise.race(iterable)
该方法同样是将多个Promise实例，包装成一个新的Promise实例。

var p = Promise.race([p1, p2, p3]); (5.js)
Promise.race方法同样接受一个数组（或具有Iterator接口）作参数。当p1, p2, p3中有一个实例的状态发生改变（变为fulfilled或rejected），p的状态就跟着改变。并把第一个改变状态的promise的返回值，传给p的回调函数。
在第一个promise对象变为resolve后，并不会取消其他promise对象的执行

.resolve() 语法：Promise.resolve(value);Promise.resolve(promise);Promise.resolve(thenable);

它可以看做new Promise()的快捷方式。

Promise.resolve('123');
<!-- 等同于 -->
new Promise(function (resolve) {
    resolve('123');
});

.reject() 语法：Promise.reject(reason)
Promise.reject返回一个被拒绝的Promise对象, 它也是new Promise()的快捷方式。

tips: reject 和 catch 的区别 (9.js)
promise.then(onFulfilled, onRejected)
在onFulfilled中发生异常的话，在onRejected中是捕获不到这个异常的。
promise.then(onFulfilled).catch(onRejected)
.then中产生的异常能在.catch中捕获

# async/await介绍: 
 async 是asynchronous“异步”的简写，而 await 可以认为是 async wait 的简写。所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成

1. async用来表示函数是异步的，定义的函数会返回一个promise对象，可以使用then方法添加回调函数。
2. await关键字只能出现在用async声明的函数体内。该函数会隐式地返回一个Promise对象，函数体内的return值，将会作为这个Promise对象resolve时的参数。

#对比
async 相比于 Promise，代码更简洁, 能更好地处理then链.(10.js)
