// generate binary number 
function GenBin(n){
let bin = [];
for(var i=1;i<=n;i++){
let binary = i.toString(2).split('').reverse().join('');    
bin.push(binary);
}
return bin;
}


const gen = GenBin(10);
console.log(gen);


// binary to decimal number
var dec = [];
for(var j=0;j<gen.length;j++){    
let tempstr = gen[j].split('');
let sum = 0;
for(var k=0;k<tempstr.length;k++){
sum += tempstr[k]*Math.pow(2, k);
}
dec.push(sum);
}

console.log(dec);
