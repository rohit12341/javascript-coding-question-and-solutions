
function palind(str){
    const oldstr = str;
    const res = str.split('').reverse().join('');
    return res === oldstr;
  }
  

function palind2(str){
    let ispalind = true;
    let oldstr = str;
    str.split('').forEach((itme, i)=>{
        if(itme !== oldstr[oldstr.length-1-i]){
        ispalind = false;
        }
    })
    return ispalind;
} 


function palind3(str){
    let oldstr = str;
   const match = str.split('').map((itme, i)=>{
    return itme !== oldstr[oldstr.length-1-i];
    })
    return match.some(m=>!m);
} 

function palind4(str){
    let newstr = str.toLowerCase().split('');
    for(let i= 0; i<newstr.length/2;i++){
       if(str[i] !== newstr[newstr.length-i-1]){
        return false;
       } 
    }
    return true;
}


function palind5(n){
    let orginal = n;
    let res = 0,i;
    while(n > 0){
    let rem = n%10;
    res = res*10+rem;
    n = parseInt(n/10);
    }
    if(orginal === res){
     console.log('palindrome');
    } else {
        console.log('not palindrome');
    }
}

  
let str = "rer";
palind(str);
console.log(palind(str));
  

palind2(str);
console.log(palind2(str));

palind3(str);
console.log(palind3(str));


palind4(str);
console.log(palind4(str));

let n = 1001;
palind5(n);
console.log(palind5(n));