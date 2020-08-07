
function bubblesort(arr){
   const swap = (arr, j, j2) => {
   [arr[j], arr[j2]] = [arr[j2], arr[j]];
	};

    // for(var i = arr.length;i>0; i--) {
    // 	for(var j =0;j<i-1;j++){
	// 		if(arr[j]>arr[j+1])	
	// 		swap(arr, j, j+1);	
    // 	}
    // }

    for(var i = 0;i<arr.length; i++) {
    	for(var j =0;j<arr.length-i-1;j++){
			if(arr[j]>arr[j+1])	
			swap(arr, j, j+1);	
    	}
    }
    return arr;
}

console.log(bubblesort([5,1,2,45,23,3,7]));

// time complexity - n square 
// base case - O(n)
//