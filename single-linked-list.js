class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
           this.head = newNode;
           this.tail = this.head; 
        } else {
           this.tail.next = newNode;
           this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return null;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return currentHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
         this.head = newNode;
         this.tail =newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
    }

    set(index, value){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val){
        if(index < 0 || index >= this.length ) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length ) return false;
        if(index === this.length) return this.pop();
        if(index === 0) return this.shift();  
        var prev = this.get(index-1);
        var rm = prev.next;
        prev.next = rm.next;
        this.length--;
        return rm;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
         next = node.next;
         node.next = prev;
         prev = node;
     node = next;
        }
    }


    FindLoop(){
    if(!this.head || !this.head.next) return false;
    let fast = this.head;
    let slow = this.head;

    // slow = slow.next;
    // fast = fast.next.next;

     while(fast && fast.next){
         if(slow.val === fast.val)
         break;
         slow = slow.next;
         fast = fast.next.next;
         if(slow.val !== fast.val) 
         return null;

         slow = head; 
         while (slow !== fast) { 
             slow = slow.next; 
             fast = fast.next; 
         } 
       
         return slow; 
     }

    //  let slow = this.head;
    // while(slow.next){
    //  let fast = slow;   
    //   while(fast.next){
    //     console.log(fast.next.val===slow.val, fast.val,slow.val);
    //     fast = fast.next.next;
    //     }
    //   slow = slow.next;
    // }
    return this;
    }
}

var list = new SingleLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("1");
list.push("4");
list.push("5");
list.push("6");
list.push("2");
list.FindLoop();
//list.reverse();
console.log(list);


// time complexity
// insertion = O(1)
// remove = O(1) = best | O(n) - worst case
// seraching and access = O(n)
