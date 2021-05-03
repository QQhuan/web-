#include <stdio.h>
#include <string.h> 
//返回最大值
int indexofstring(int* stones, int* flag, int len){
    int max = -1, index = 0;
    for(int i = 0; i < len; i++){
        if(flag[i] == 0 && max < stones[i]){
            max = stones[i];
            index = i;
        }
    }
    return index;
}
int lastStoneWeight(int* stones, int stonesSize){
    int flag[stonesSize]; //标记数组
    for(int i = 0; i < stonesSize; i++){ 
        flag[i] = 0;    //设置元素初始值为0
    }
    int x, y; //石头x, y
    int rest = stonesSize; //剩余石头
    while(rest > 1){
        y = indexofstring(stones, flag, stonesSize); 
        x = indexofstring(stones, flag, stonesSize);
        if(stones[x] == stones[y]){
            flag[x] = 1;
            flag[y] = 1;
            rest -= 2;
        }else{
            flag[x] = 1;
            stones[y] -= stones[x];
            rest--;
        }
    }
    if(rest == 0)
        return 0;
    else
        return stones[indexofstring(stones, flag, stonesSize)];
}

int main(){
	int f[6] = {2,7,4,1,8,1};
	printf("%d\n", lastStoneWeight(f, 6));
	return 0;
}

