let a =[
    [6,2,9],
    [5,8,4],
    [1,7,3],
    [7,3,9]
]
for( let i =0; i<a.length; i++){
    
        if (i % 2 ==0) {
            for(let j= 0; j< a[0].length;j++){
                console.log(a[i][j]);
            }
        }else {
            for(let j=a[0].length-1; j>=0; j--){
                console.log(a[i][j]);                
            }
        }
    }

