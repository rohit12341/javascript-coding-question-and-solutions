function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
   // return Math.floor(Math.log10(Math.abs(num))) + 1;
    return (''+num).length; 
}

function maxDigits(arr){
    let max = 0;
    for(let i = 0;i< arr.length;i++){
        max = Math.max(max, digitCount(arr[i]));
    }
    return max;
}

function RadixSort(nums){   
let maxDigit = maxDigits(nums);
let num = [];
for(let i = 0; i < maxDigit; i++){
let bukcet = Array.from({length:10}, ()=> []);
for(let j = 0; j<nums.length; j++){
   let digit = getDigit(nums[j], i);
   bukcet[digit].push(nums[j]);
}
nums = [].concat(...bukcet);
}
return nums;
}
const r = RadixSort([20, 343, 34534, 543, 213, 3, 675]);
console.log(r);



// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
//   }
  
//   function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
//   }
  
//   function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//       maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
//   }
  
//   function radixSort(nums){
//       let maxDigitCount = mostDigits(nums);
//       for(let k = 0; k < maxDigitCount; k++){
//           let digitBuckets = Array.from({length: 10}, () => []);
//           for(let i = 0; i < nums.length; i++){
//               let digit = getDigit(nums[i],k);
//               digitBuckets[digit].push(nums[i]);
//           }
//           nums = [].concat(...digitBuckets);
//       }
//       return nums;
//   }

// const r = radixSort([20, 343, 34534, 543, 213, 3, 675]);
// console.log(r);