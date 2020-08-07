function SlidingWindow(arr, k){
 let allsum = []; 
 for (var i = 0; i <= arr.length - k; i++)  {  
        max = arr[i];  
        for (var j = 1; j < k; j++)    {  
            if (arr[i + j] > max)  
                max = arr[i + j];  
        }  
     allsum.push(max);
    } 
return allsum;
}

const sum = SlidingWindow([4,5,3,3,10,12,15,18,20,22,50], 3);
console.log(sum);



function MaxOccuranceOfSameDigit(arr){
let max = arr[0];
let count = 0;
for(var i = 1;i<arr.length;i++){
if(arr[i] > max) max = arr[i];
}
for(var i = 0;i<arr.length;i++){
    if(max === arr[i]) count++;
}
console.log(count);
return max;
}

const num = MaxOccuranceOfSameDigit([3,2,1,3]);
console.log(num);



