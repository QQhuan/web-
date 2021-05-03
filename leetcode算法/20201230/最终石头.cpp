#include <stdio.h>
#include <string.h> 
//�������ֵ
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
    int flag[stonesSize]; //�������
    for(int i = 0; i < stonesSize; i++){ 
        flag[i] = 0;    //����Ԫ�س�ʼֵΪ0
    }
    int x, y; //ʯͷx, y
    int rest = stonesSize; //ʣ��ʯͷ
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

