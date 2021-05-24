function reverseInt(n){
    let str = Number(n).toString(2);
    return str.split('').reverse().join('');
}

let num = 18;
console.log(reverseInt(num));