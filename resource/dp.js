let arr = '0,1,-1|1,0,-1|1,1,1';
let arr2 = arr.split('|');
let N = arr.length;
let g = new Array(N);
let flag = [[]];
for(let i = 0; i < N; i++){
    let tmp = arr2[i];
    tmp = tmp.split(',');
    g[i] = new Array([...tmp]);
    for(let w = 0;w < N; w++){
        g[i][w] = parseInt(g[i][w]);
    }
    for(let j = 0;j < N; j++){
        if(g[i][j] !== -1){
            if(i == 0 && j == 0){
                flag[i][j] = g[i][j];
            }else{
                if(i == 0){
                    if(g[i][j] != -1){
                        flag[i][j]=flag[i][j-1]>=0?flag[i][j-1]+g[i][j]:g[i][j];
                    }else{
                        flag[i][j] = -1;
                    }
                }else if(j == 0){
                    if(g[i][j] != -1){
                        flag[i][j] = flag[i-1][j] >= 0?flag[i-1][j]+g[i][j]:g[i][j];
                    }else{
                        flag[i][j] = -1;
                    }
                }else{
                    if(g[i][j] != -1){
                        let p, q;
                        p = flag[i-1][j]>=0?flag[i-1][j]+g[i][j]:g[i][j];
                        q = flag[i][j-1]>=0?flag[i][j-1]+g[i][j]:g[i][j];
                        flag[i][j] = p>q?p:q;
                    }else{
                        flag[i][j] = -1;
                    }
                }
            }
        }else{
            flag[i][j] = -1;
        }
    }
}
let num1 = flag[N-1][N-1];
let k = N-1, l = N-1;
g[k][l] = 0;
while(1){
    if(k <=0 && l <= 0){
        break;
    }
    if(k == 0){
        while(l>0){
            g[k][l]=0;
            l--;
        }
        break;
    }
    if(l == 0){
        while(k>0){
            g[k][l]=0;
            k--;
        }
        break;
    }
    let p = flag[k-1][l];
    let q = flag[k][l-1];
    p>q?g[k-1][l] = 0:g[k][l-1]=0;
    p>q?k--:l--;
}
for(let i = 0; i < N; i++){
    for(let j = 0;j < N; j++){
        if(g[i][j] !== -1){
            if(i == 0 && j == 0){
                flag[i][j] = g[i][j];
            }else{
                if(i == 0){
                    if(g[i][j] != -1){
                        flag[i][j]=flag[i][j-1]>=0?flag[i][j-1]+g[i][j]:g[i][j];
                    }else{
                        flag[i][j] = -1;
                    }
                }else if(j == 0){
                    if(g[i][j] != -1){
                        flag[i][j]=flag[i-1][j]>=0?flag[i-1][j]+g[i][j]:g[i][j];
                    }else{
                        flag[i][j] = -1;
                    }
                }else{
                    if(g[i][j] != -1){
                        let p, q;
                        p = flag[i-1][j]>=0?flag[i-1][j]+g[i][j]:g[i][j];
                        q = flag[i][j-1]>=0?flag[i][j-1]+g[i][j]:g[i][j];
                        flag[i][j] = p>q?p:q;
                    }else{
                        flag[i][j] = -1;
                    }
                }
            }
        }else{
            flag[i][j] = -1;
        }
    }
}
let num2 = flag[N-1][N-1];
console.log(num1+num2);