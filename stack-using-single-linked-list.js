


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.first) {
         this.first = node;
         this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        ++this.size;
        return this;
    }

    pop(){
        if(!this.first) return false;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
        }
        --this.size;
        return temp;
    }

 
    // check-given-expression-balanced-expression-not
    CheckExpression(exp){
        let balanced;
    for(let i =0;i<exp.length;i++){
        if(exp[i] === '(' || exp[i] === '{' || exp[i] === '['){
         this.push(exp[i]);
        }
        
        if(exp[i] === ')' || exp[i] === '}' || exp[i] === ']'){
           if(!this.first) return false;

           var top = this.first;
           this.pop();

           if((top === '(' && exp[i] !== ')') || 
           (top === '{' && exp[i] !== '}') || 
           (top === '[' && exp[i] !== ']')) {
               return false;
           }  
        }
    }
    if(this.size === 0)  balanced = true; 
    else balanced = false;
    return balanced;
    }


    DuplicateParenthesis(exp){
        for(let i =0;i<exp.length;i++){
            if(exp[i] !== ')'){
            this.push(exp[i]);
            }
         }
                 let top = this.pop();
                 if(top === '('){
                     return 'have duplicate';
                 }

                //  while(this.first !== '(') {
                //     // console.log('pop');
                //     this.pop();
                //     }
        return 'no duplicate';
     }  
}

let stack = new Stack();

// push
// stack.push("1");
// stack.push("2");
// stack.push("3");

//pop
// console.log(stack.pop());


// check expression
// const bal = stack.CheckExpression("{()}[{}]");
// console.log(bal);


// finding duplicate parenthesis 
const dup = stack.DuplicateParenthesis("((x+y))");
console.log(dup);


console.log(stack);



function Duplicate(exp){
    let stack = [];
    for(let i =0;i<exp.length;i++){
        if(exp[i] !== ')'){
            stack.push(exp[i]);
        } else {
            let top = stack.pop();
            let e = 0;
            while(top !== '('){
                e++;
                top = stack.pop();
            }
            if(e<1){
                return 1;
            }
        }
    }
     return false;
}

console.log(Duplicate('(x+y)'));



