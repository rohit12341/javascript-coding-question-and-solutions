class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
    let node = new Node(val);
    if(!this.first) {
        this.first = node;
        this.last = node;
    } else {
        this.last.next = node;
        this.last = node;
    }
    this.size++;
    return this;
    }

    dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
        this.last = null;
        this.first = null;
    } else {
        this.first = this.first.next;
    }
    this.size--;
    return temp; 
    }

    TraverseAndFind(val){
        let data = [];
        let found = null;
        let foundIndex = 0;
        if(!this.first) return null;
        !this.first && val === this.first.val ? (found = this.first, foundIndex = 1) : found = null; 
        let current = this.first;
        while(current.next){
         val === current.val  ? found = current: found = null;
         data.push(current.val);
         current = current.next;
         foundIndex++;
        }
        data.push(current.val);
        console.log(data, found, foundIndex);
    }

    

}

const q = new Queue();
q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
q.enqueue('4');
q.TraverseAndFind('3');
//console.log(q.dequeue());
console.log(q);