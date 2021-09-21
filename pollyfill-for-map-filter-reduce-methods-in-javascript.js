const arr = [1,2,3,4];

Array.prototype.myMap = function(cb){
if(!cb || typeof cb !== 'function') throw TypeError();
let res = [];
for(let i=0;i<this.length;i++){
res.push(cb.apply(this, [this[i], i, this]));
}
return res;
}

Array.prototype.myFilter = function(cb){
if(!cb || typeof cb !== 'function') throw TypeError();
let res = [];
for(let i=0;i<this.length;i++){
if(cb.apply(this, [this[i], i , this])) res.push(this[i]);
}
return res;
}

Array.prototype.myReduce = function(cbFun, initialValue){
if(!cbFun || typeof cbFun !== 'function') throw TypeError();
  let len = this.length;
  let i = 0;
  if(typeof initialValue === 'undefined' || initialValue === null) {
    initialValue =  this[0];
    ++i;
  } 
for(;i<len;i++){
 initialValue = cbFun.apply(this, [initialValue, this[i], i, this]);
}
return initialValue;
}


const mArr = arr.myMap((item)=>item*2);
const fArr = arr.myFilter((item)=>item%2 == 0);
const rArr = arr.myReduce((acc, curr)=>acc+curr, 0);
console.log(mArr, fArr, rArr);
