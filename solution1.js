let arr=[3,2,4];
let target=6;
function sumNumber(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
}
console.log(sumNumber(arr));
