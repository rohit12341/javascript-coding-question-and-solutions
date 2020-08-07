class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class ReverseStringStack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
    var node = new Node(val);
    if(!this.first){
        this.first = node;
        this.last = node;
    } else {
        let temp = this.first;
        this.first = node;
        this.first.next = temp;
    }
    this.size++;
    return this;
    }

    pop(){
        if(!this.first) return null;
        else if(this.first === this.last){
            this.last = null;
        } else {
        var temp = this.first;
         this.first = this.first.next;
        }
        this.size--;
        return temp;
    }
}

const reverse = new ReverseStringStack;
// reverse.push("1");
// reverse.push("2");
// reverse.push("3");
// console.log(reverse.pop());


// let str2 = '{()}[](';
// function RevPeran(str){
//     let stack = [];
// for(var i=0;i<=str.length;i++){
//     if(str[i]==='{' || str[i]==='(' || str[i]==='['){
//         stack.push(str[i]);
//     } else {
//         stack.pop();
//     }
// }

// if(stack.length === 0){
//     console.log('balanced');
// } else {
//     console.log('unbalanced');
// }
// }
// console.log(RevPeran(str2));

let str = 'rohit';
function rev(str){
let s = str.split('');
let rev = [];
    for(var i=0;i<s.length;i++){
    reverse.push(s[i]);
    }
    for(var i=0;i<=s.length;i++){
        rev.push(reverse.pop());
        }
    return rev;
}

console.log(reverse);
console.log(rev(str));