class MaxBinaryHeap{
 constructor(){
     this.values = [41, 39, 33, 18, 27, 12];
 }

 insert(element){
     this.values.push(element);
     this.BubbleUp();
 }

 BubbleUp(){
 let index = this.values.length-1;
 const element = this.values[index];
 while(index > 0){
 let parentIndex = Math.floor((index-1)/2);
 let parent = this.values[parentIndex];
 if(element <= parent) break;
 this.values[parentIndex] = element;
 this.values[index] = parent;
 index = parentIndex;
 }
 }

// [55, 50, 41, 39, 27, 12, 33, 18]
// [18, 50, 41, 39, 27, 12, 33]
 RemoveMax(){
let max = this.values[0];
let end = this.values.pop();
 if(this.values.length > 0){
     this.values[0] = end;
     this.sinkDown();
 }
 return max;
 }

 sinkDown(){
     let index = 0;
     let length = this.values.length;
     let element = this.values[0];
     while(true){
         let leftChildIndex = 2 * index + 1;
         let rightChildIndex = 2 * index + 2;
         let leftChild, rightChild, swap = null;
         if(leftChildIndex < length) {
             leftChild = this.values[leftChildIndex];
             if(leftChild > element) {
                 swap = leftChildIndex;
             }
         }

         if(rightChildIndex < length){
             rightChild = this.values[rightChildIndex];
             if(swap === null && rightChild > element || 
                swap !== null && rightChild > leftChild){
                    swap = rightChildIndex;
                }
         }

         if(swap === null) break;
         this.values[index] = this.values[swap];
         this.values[swap] = element;
         index = swap;
     }
 }

}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(50);
const r = heap.RemoveMax();
const r2 = heap.RemoveMax();
console.log(r, r2);
console.log(heap);


class MinBinaryHeap{
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12];
    }
   
    insert(element){
        this.values.push(element);
        this.BubbleUp();
    }
   
    BubbleUp(){
    let index = this.values.length-1;
    const element = this.values[index];
    while(index > 0){
    let parentIndex = Math.floor((index-1)/2);
    let parent = this.values[parentIndex];
    if(element <= parent) break;
    this.values[parentIndex] = element;
    this.values[index] = parent;
    index = parentIndex;
    }
    }
   
   // [55, 50, 41, 39, 27, 12, 33, 18]
   // [18, 50, 41, 39, 27, 12, 33]
    RemoveMax(){
   let max = this.values[0];
   let end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
    }
    return max;
    }
   
    sinkDown(){
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild, swap = null;
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }
   
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if(swap === null && rightChild > element || 
                   swap !== null && rightChild > leftChild){
                       swap = rightChildIndex;
                   }
            }
   
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
   
   }
   
   const heap2 = new MinBinaryHeap();
   // heap.insert(55);
   //heap.insert(50);
   //const r = heap.RemoveMax();
   //const r2 = heap.RemoveMax();
   //console.log(r, r2);
   console.log(heap2);



class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
} 
   class PriorityQueue{
    constructor(){
        this.values = [];
    }
   
    Enqueue(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);
        this.BubbleUp();
    }
   
    BubbleUp(){
    let index = this.values.length-1;
    const element = this.values[index];
    while(index > 0){
    let parentIndex = Math.floor((index-1)/2);
    let parent = this.values[parentIndex];
    if(element.priority >= parent.priority) break;
    this.values[parentIndex] = element;
    this.values[index] = parent;
    index = parentIndex;
    }
    }
   
   // [55, 50, 41, 39, 27, 12, 33, 18]
   // [18, 50, 41, 39, 27, 12, 33]
    Dequeue(){
   let min = this.values[0];
   let end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
    }
    return min;
    }
   
    sinkDown(){
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild, swap = null;
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
   
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if(swap === null && rightChild.priority < element.priority || 
                   swap !== null && rightChild.priority < leftChild.priority){
                       swap = rightChildIndex;
                   }
            }
   
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
   
   }
   
   const p = new PriorityQueue();
    p.Enqueue(55, 1);
    p.Enqueue(60, 2);
    p.Enqueue(10, 5);
    p.Enqueue(10, 1);
    const pr = p.Dequeue();
//    const r2 = heap.RemoveMax();
    console.log(pr);
    console.log(p);


// TC = O(n) priority queue inset/delete
// log(n) binary heap insertion/deleton
// search O(n)   