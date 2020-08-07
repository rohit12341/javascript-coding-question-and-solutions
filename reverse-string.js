
function strRev(str){
  const res = str.split('').reverse().join('');
  return res;
}


function strRev1(str){
    const len = str.length;
    let newstr = '';
    for(var i=len-1;i>=0;--i){
        newstr += str[i];
    }
    return newstr;
}


function strRev2(str){
    if(str === ''){
        return '';
    } else {
       return strRev2(str.substr(1)) + str.charAt(0); 
    }
}


let str = "rohit meena";
strRev(str);
console.log(strRev(str));


strRev1(str);
console.log(strRev1(str));


strRev2(str);
console.log(strRev2(str));