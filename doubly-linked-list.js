class Node {
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}


class doublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
    var newNode = new Node(val);    
    if(this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
    } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    }
    this.length++;
    return this;
    }


    pop(){
     if(!this.head) return null;
     if(this.length === 1){
     this.head = null;
     this.tail = null;
     } else {
     let pop = this.tail;
     this.tail = pop.prev;
     this.tail.next = null;
     pop.prev = null;
      }
    this.length--;
    return pop;
    }

    shift(){
        if(this.length === 0) return null;
        if(this.length === 1){
        this.head = null;
         this.tail = null;
        }
        var oldHead = this.head;
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
         this.head.prev = newNode;
         newNode.next = this.head;
         this.head = newNode;
        }
        this.length++;
        return this;
    }

    getByIndex(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
            current = current.next;
            count++;
            }
        } else {
            count = this.length-1;
            current = this.tail;
            while(count !== index){
            current = current.prev;
            count--;
        }
        }
        return current;
    }

    setByIndex(index, value){
    var node = this.getByIndex(index);
    if(!node){
     return null;
    }else {
    node.value = value;
    return node;
    }
    }

    insetAtIndex(index, value){
        if(index < 0 || index >= this.length) return null;
        else if(index === 0) this.unshift(value);
        else if(index === this.length) this.push(value);
        else {
         let newNode = new Node(value);
         let beforeNode = this.getByIndex(index-1);
         let afterNode = beforeNode.next;
         beforeNode.next = newNode; newNode.prev = beforeNode;
         newNode.next = afterNode; afterNode.prev = newNode;
         this.length++;
         return true;   
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.length) return null;
        else if(index === 0) this.shift();
        else if(index === this.length) this.pop();
        else {
            let removed = this.getByIndex(index);
            let beforeNode = removed.prev;
            let afterNode = removed.next;
            beforeNode.next = afterNode; 
            afterNode.prev = beforeNode;
            removed.next = null;
            removed.prev = null;
            this.length--;
            return removed;  
        }
    }


}


const list = new doublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.unshift("new");
// console.log(list.getByIndex(3));
// console.log(list.setByIndex(2, "set"));
// console.log(list.setByIndex(2, "set"));
console.log(list.removeFromIndex(2));

console.log(list);




// TC 
// insertion, deletion - O(1)
// searching, access = O(n)




