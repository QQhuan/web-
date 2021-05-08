//每一趟都创建了两个数组进行存储再合并返回
let quickSort = function(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr.splice(pivotIndex, 1)[0]; //删除该元素并返回
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right)); //拼接三个数组
}

//
let partition = function (arr, i, j) {
    let flag = arr[i];
    while(i < j) {
        while (i < j && arr[j] >= flag) {
            j--;
        }
        while (i < j && arr[i] <= flag) {
            i++;
        }
        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return i;
}
let quickSort2 = function(arr, i, j){
    let pivot;
    if(i < j){
        pivot = partition(arr, i, j);
        quickSort2(arr, i, pivot-1);
        quickSort2(arr, pivot+1, j);
    }
};

let arr = [4, 3, 2, 1, 6, 7, 8];
quickSort2(arr, 0, arr.length-1);
console.log(arr);

// 快排
function quickSort3(arr, i, j) {
    if(i < j) {
        let left = i;
        let right = j;
        let pivot = arr[left];
        while(i < j) {
            while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
                j--;
            }
            if(i < j) {
                arr[i++] = arr[j];
            }
            while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
                i++;
            }
            if(i < j) {
                arr[j--] = arr[i];
            }
        }
        arr[i] = pivot;
        quickSort3(arr, left, i-1);
        quickSort3(arr, i+1, right);
        return arr;
    }
}

// example
let arr2 = [2, 10, 4, 1, 0, 9, 5 ,2];
console.log(quickSort3(arr2, 0 , arr.length-1));