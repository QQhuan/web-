// perm function
var perm = function(s) {
    var result = [];
    if (s.length <= 1) {
        return [s];
    } else {
        for (var i = 0; i < s.length; i++) {
            var c = s[i];
            var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
            var l = perm(newStr);

            for (var j = 0; j < l.length; j++) {
                var tmp = c + l[j];
                result.push(tmp);
            }
        }
    }
    return result;
};

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    var nums = line;
    let arr = perm(nums);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    rl.close();  // 退出 
});