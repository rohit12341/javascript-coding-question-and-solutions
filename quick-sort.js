function Pivot(arr, start = 0, end = arr.length - 1){
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let pivot = arr[start];
let swapindex = start;
for(let i = start + 1; i <= end; i++){
if(pivot > arr[i]){
    swapindex++;
    swap(arr, swapindex, i);
}
}

swap(arr, start, swapindex);
return swapindex;
}

function QuickSort(arr, left=0, right=arr.length-1){
 if(left < right){   
let pivotIndex = Pivot(arr, left, right);
//left
QuickSort(arr, left, pivotIndex-1);
//right
QuickSort(arr, pivotIndex+1, right);
}
return arr;
}

const q = QuickSort([4,6,9,1,2,5,3]);
console.log(q);

