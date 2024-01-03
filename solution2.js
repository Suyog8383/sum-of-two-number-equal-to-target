let arr=[3,2,4];
let target=6;
function sumNumber(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
       let num= target-arr[i];
       if(obj.hasOwnProperty(num)){
           return [obj[num],i]
           break;
       }else{
           obj[arr[i]]=i;
       }
       
    }
   
     return -1;
}
console.log(sumNumber(arr));
