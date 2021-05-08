function myflat(arr){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr=newArr.concat(myflat(arr[i]))
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    let arr = new Array(line);
    console.log(JSON.parse(arr));
    console.log(myflat(JSON.parse(arr)))
    rl.close();  // 退出
});