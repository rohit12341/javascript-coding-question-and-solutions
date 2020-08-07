function merge(arr1, arr2){
let result = [];
let i = 0;
let j = 0;
while(arr1.length > i && arr2.length > j){
if(arr1[i] < arr2[j]){
result.push(arr1[i]);
i++;
} else {
result.push(arr2[j]);
j++;
}
}

while(i < arr1.length){
result.push(arr1[i]);
i++;
} 
while(j < arr2.length){
result.push(arr2[j]);
j++;
}

return result;
}

function mergesort(arr){
    if(arr.length <= 1) return arr;
    // divide and conquer approach
    let mid = Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergesort([10,24,76,73]));