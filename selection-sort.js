function selectionSort(arr){
for(var i=0;i<arr.length;i++){
var lowest =i;
for(var j = i+1;j<arr.length;j++){
if(arr[lowest] > arr[j]){
	lowest = j;
}
}
	if(i !== lowest){
		[arr[i], arr[lowest]] = [arr[lowest], arr[i]];
		// var temp = arr[i];
		// arr[i] = arr[lowest];
		// arr[lowest] = temp;
	}
}
return arr;
}
console.log(selectionSort([0,2,5,12,34,23,13,9]));

// time c - n square 
// 



function InsertionSort(arr){
for(let i = 1;i<arr.length;i++){
	let current = arr[i];
	for(var j = i-1;j >= 0 && arr[j] > current;j--){
		arr[j+1] = arr[j];
	}
	arr[j+1] = current;
}
return arr;
}
console.log(InsertionSort([5,12,34,23,13,9]));
// current = 34
// arr [j+1] = 12
