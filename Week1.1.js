function targetTotal(arr, target){

let targetMatchArray = [];

    for(let i = 0 ; i < arr.length-1 ; i++){
        for(let j = i+1 ; j < arr.length; j++){
            if((arr[i] + arr[j]) == target){
                targetMatchArray.push([i,j]);
            }
        }
    }

return targetMatchArray;

}
let arr = [1,2,3,4,5];
let target = 7;
console.log(targetTotal(arr, target));
