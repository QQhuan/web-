let arr = [5, 3, 2];
let len = 5;
let m = 3;
let h = 2;
let heights = [3, 2, 1, 1, 2];
let end = len - m;
let flag = -1;
for(let i = 0; i < end; i++){
    if(heights[i] <= h) {
        let n = m - 1;
        while (n) {
            if (heights[i + n] <= h) {
                n--;
            } else {
                break;
            }
        }
        if (n === 0) {
            if (flag < i) {
                flag = i + 1;
            }
        }
    }
}
console.log(flag);
