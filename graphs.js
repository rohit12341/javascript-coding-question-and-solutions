class Graph {
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(v1, v2){
     this.adjList[v1].push(v2);
     this.adjList[v2].push(v1);
    }

    removeEdge(v1, v2){
        this.adjList[v1] = this.adjList[v1].filter(v=> v !== v2);
        this.adjList[v2] = this.adjList[v2].filter(v=> v !== v1);
    }

    removeVertex(vertex){
        while(this.adjList[vertex].length){
            const adjVertex = this.adjList[vertex].pop();
            this.removeEdge(vertex, adjVertex);
        }
        delete this.adjList[vertex];
    }

    DFSRecursive(start){
        let result = [];
        let visited = {};
        const list = this.adjList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            list[vertex].forEach(neighbour=>{
                if(!visited[neighbour]) {
                    return dfs(neighbour);
                }
            })
        })(start);
        return result;
    }

    DFSIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        const list = this.adjList;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            list[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                visited[neighbour] = true;
                stack.push(neighbour);
            }
            }) 
        }
        return result;
    }

    BFS(start){
        let queue = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        let list = this.adjList;
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            list[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex('1');
g.addVertex('2');
g.addVertex('3');
g.addVertex('4');
g.addEdge('1', '2');
g.addEdge('1', '4');
g.addEdge('2', '4');
g.addEdge('1', '3');
g.addEdge('4', '3');
g.addEdge('2', '3');
// g.removeEdge('1', '2');
// g.removeVertex('3');
let result = g.DFSRecursive('1');
let result2 = g.DFSIterative('1');
let result3 = g.BFS('1');
console.log(result, result2, result3);
console.log(g);



class PQ {
    constructor(){
        this.values = [];
    }

    enQueue(val, priority){
        this.values.push({val, priority});
        this.sort();
       }
    deQueue(){
        return this.values.shift();
    }   
    sort(){   
    this.values.sort((a, b)=> a.priority - b.priority);
    }  
}

class WeightedGraph {
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
     if(!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
     if(!this.adjList[vertex1] || !this.adjList[vertex2]) return null;
     this.adjList[vertex1].push({node:vertex2, weight});
     this.adjList[vertex2].push({node:vertex1, weight});
    }

    dijkastra(start, finish){
    const nodes = new PQ();
    const distaces = {};
    const previous = {};
    let smallest;
    let path = [];

    // initial state
    for(let vertex in this.adjList){
        if(vertex === start){
            distaces[vertex] = 0;
            nodes.enQueue(start, 0);
        } else {
            distaces[vertex] = Infinity;
            nodes.enQueue(start, Infinity);
        }
        previous[vertex] = null;
    }

    while(nodes.values.length){
        smallest = nodes.deQueue().val;
        if(smallest === finish){
            // finished
            while(previous[smallest]){
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }
        if(smallest || distaces[smallest] !== Infinity) {
            for(let neighbour in this.adjList[smallest]){
                // finding neighbour node
                let nextNode = this.adjList[smallest][neighbour];
                // new distance for next node 
                let candidate = distaces[smallest] + nextNode.weight;
                let nextNeighbour = nextNode.node;
                if(candidate < distaces[nextNeighbour]){
                    // updationg next smallest neighbour
                    distaces[nextNeighbour] = candidate;
                    // updating previous
                    previous[nextNeighbour] = smallest;
                    // enqueue priority queue with new priority
                    nodes.enQueue(nextNeighbour, candidate);
                }
            }
        }
    }
    return path.concat(smallest).reverse();
    }
}


let w = new WeightedGraph();
w.addVertex('A');
w.addVertex('B');
w.addVertex('C');
w.addVertex('D');
w.addVertex('E');
w.addVertex('F');
w.addEdge('A', 'B', 4);
w.addEdge('A', 'C', 2);
w.addEdge('B', 'E', 3);
w.addEdge('C', 'D', 2);
w.addEdge('C', 'F', 4);
w.addEdge('D', 'E', 3);
w.addEdge('D', 'F', 1);
w.addEdge('E', 'F', 1);
const dist = w.dijkastra('A', 'D');
console.log(dist);
console.log(w);




// const q = new PQ();
// q.enQueue(10, 5);
// q.enQueue(100, 2);
// q.enQueue(1, 1);
// q.enQueue(20, 2);
// q.deQueue();
// console.log(q);

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }


    enQueue(val, priority){
     let node = new Node(val, priority);
     this.values.push(node);
     this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length-1;
        let element = this.values[index];
        while(index > 0) {
           let parentIndex = Math.floor((index-1)/2);
           let parent = this.values[parentIndex];
           if(element.priority >= parent.priority) break;
           this.values[parentIndex] = element;
           this.values[index] = parent;
           index = [parentIndex]; 
        }
    }


    deQueue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
      let index = 0;
      let length = this.values.length;
      let element = this.values[0];  
      while(true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let leftChild, rightChild, swap = null;
          if(leftChildIndex < length) {
              leftChild = this.values[leftChildIndex];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIndex;
              }
          }

          if(rightChildIndex < length) {
              rightChild = this.values[rightChildIndex];
              if(swap === null && rightChild.priority < element.priority || 
                swap !== null && rightChild.priority < leftChildIndex.priority ){
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


const pq = new PriorityQueue();
pq.enQueue(55, 1);
pq.enQueue(60, 2);
pq.enQueue(10, 5);
pq.enQueue(10, 1);
pq.enQueue(100, 4);
pq.deQueue();
console.log(pq);