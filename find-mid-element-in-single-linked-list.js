class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){
    let node = new Node(val);
    if(!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
        }
    this.size++;
    return this;
    }

    pop(){
        if(!this.head) return false;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
        let current = this.head;
        let newTail;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
    }
    this.size--;
    return this;
    }

    traverse(){
     let current = this.head;
   //  let count = 0;
     let arr = [];
     let middle;
     while(current.next){
         arr.push(current.val);
         current = current.next;
        // count++;
     }
     arr.push(this.tail.val);
    // return count+1;
    if(arr.length%2 === 0) middle = arr[arr.length/2];
    if(arr.length%2 === 1) middle = arr[Math.floor(arr.length/2)];
     return {element: arr, middle: middle};
    }


    reverse(){
     let node = this.head;
     this.head = this.tail;
     this.tail = node;
     let next;
     let prev = null;
     for(var i=0;i<this.size;i++){
     next = node.next;
     node.next = prev;
     prev = node;
     node = next;
     }
     return this;
    }

    removeDuplicate(){
       let dup = [];
        let current2 = this.head;
        while(current2.next){
        let current = current2;
        while(current.next){
            if(current2.val === current.next.val){
                dup.push(current.next.val);
                var temp = current.next;
                current.next = temp.next;
            } else {
                current = current.next;
            }
        }
        current2 = current2.next;
    }
        return [dup, this];
    }


    KthNode(n){
    if(n < 0 || n >= this.length) return null;    
    let current = this.head;
    let counter = 0;
    while(n !== counter){
        current = current.next;
        counter++;
    }
    return current;
    }

    unshift(val){
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
    return this;
    }

    getbyindex(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
     return current;
    }

    AddatIndex(index, val){
     if(index < 0 || index > this.size) return false;
     if(index === this.size) this.push(val);
     if(index === 0) this.unshift(val);
     let prev = this.getbyindex(index-1);
     console.log('prev: ' + prev.val);
    }
}

let list = new SingleLinkedList();
// push 
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(2);
list.push(5);
list.push(6);

// pop
list.pop();

// traverse
let element = list.traverse();
console.log(element);

// sum of linkedlist
let sum = element.element.reduce((total, i)=> total+i);
console.log('sum of linked list: '+ sum);

// remove duplicate elements
let dup = list.removeDuplicate();
console.log(dup);


// find nth node in list
let kthnode = list.KthNode(2);
console.log(kthnode);


// ad element at position in linked list
list.AddatIndex(3, 'new');

// list.reverse();
console.log(list);