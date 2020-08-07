class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Queue {
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
    if(this.first === this.last) {
        this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
    }
}


const q = new Queue();
q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
console.log(q.dequeue());
console.log(q);