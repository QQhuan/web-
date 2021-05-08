let pro = new Promise(function (resolve, reject) { //new promise会立即执行
    console.log("hahaha");
    setTimeout(function () {
        //resolve("OK");
        reject("Type Uncaught")
    }, 1000);
});
pro.then(function success(res) {
    console.log(res);
}).then(value => console.log(value)).catch(function (error) {
    console.log(error);
});