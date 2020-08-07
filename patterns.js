// right aligned traiangle

var n = 6;
let arr = [];
for(var i=1;i<=n;i++){
    var s = '';
    for(var j=1;j<=i;j++){
    s+='#';
    }
    arr.push(s);
}
console.log(arr.toString().replace(/,/g, ' '));


// lucky number

function LuckeySeven(arr){
for(var i =2;i<arr.length;i++){
    if(arr[i]+arr[i-1]+arr[i-2] === 7){
   console.log('lucky');
    }
    else {
        console.log('not lucky');
    }
}
}

LuckeySeven([3,2,4,3,0,6]);



// overlapping number in ranges

function Overlapping(arr){
    let count = 0;
for(var i=arr[0];i<arr[1];i++){
    if(i>=arr[2] && i<= arr[3]){
   count++;
    }
}
console.log(count);
// for(var i=arr[4];i<arr.length;i++){
    if(count>=arr[4]){
    return count;
    } 
    else return false;
//}
}

console.log(Overlapping([10, 20, 4, 14, 4]));



// power without multiply and division
function power(a, b){
var sum = a;
inc = a;
for(var i=1;i<b;i++){
    for(var j=1;j<a;j++){
        sum += inc;
        };
   inc = sum;
};
return sum;
};

power(5,3);
console.log('\n');



// min max sum 

function MinMaxSum(arr){
  let sum = [];
  for(var i = 0;i<arr.length;i++){
      let s = 0;
      for(var j = 0;j<arr.length;j++){
      if(arr[i] === arr[j]) s+=0; else s+=arr[j];
      }
      sum.push(s);
  }
  var min = Math.min(...sum);
  var max = Math.max(...sum);
  let minmax = [min, max];

console.log(minmax);
}

MinMaxSum([1,2,3,4,5]);

