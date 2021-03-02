class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right =  null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(val){
    let node = new Node(val);
    if(!this.root) {
        this.root = node;
        return this;
       }  else {
        var current = this.root;
       while(true){
             if(val === current.val) return null;
             if(val<current.val){
                     if(current.left === null){
                       current.left = node;
                       return this;
                     } 
                    current = current.left;
                } else {
                    if(current.right === null){
                        current.right = node;
                        return this;
                    } 
                    current = current.right
                }
       }  
     }
    }

    BFS(){
    if(!this.root) return null;
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
     while(queue.length !==0){
         node = queue.shift();
         data.push(node.val);
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right); 
     }
     return data;
    }
//       10
//    8      12
// 5


height(){
    if(!this.root) return null;
    let queue = [];
    let node = this.root;
    let h = 0;
    queue.push(node);
     while(queue.length !==0){
         let l = queue.length;
         while(l--){
         node = queue.shift();
         if(node.left) queue.push(node.left);
         if(node.right) queue.push(node.right);
        }
        h++;
     }
     return h;
    }

    LevelOfNode(val){
            if(!this.root) return null;
            let queue = [];
            let node = this.root;
            let h = 0;
            queue.push(node);
             while(queue.length !==0){
                 let l = queue.length;
                 while(l--){
                 node = queue.shift();
                 if(node.val===val) return h;
                 if(node.left) queue.push(node.left);
                 if(node.right) queue.push(node.right);
                }
                h++;
             }
       return h;
    }

    NextNodeOfGivenNode(n){
    if(!this.root) return null;
    let data = [];
    let queue = [];
    let next = 0;
    let node = this.root;
    queue.push(node);
    while(queue.length !== 0){
        node = queue.shift();
        data.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    if(n === data[data.length-1]) next = 0;
    else {
    for(let i=0;i<data.length;i++)
        data[i]===n ? next = data[i+1] : 0;
    }
    return next;
    }

    BinarySumTree(){
        if(!this.root) return null;
        let current = this.root;
       function traverse(node){ 
        if(node.left === null && node.right === null) return node.val;
        if(node.val === traverse(node.left)+traverse(node.right)) {
            return this.root.val;
        }
    }
    traverse(current);
//       10
//    8      12
// 5       
    }

    DfsPreOrder(){
     let data = [];
     let current = this.root;
    function traverse(node){
     data.push(node.val);
     if(node.left) traverse(node.left);
     if(node.right) traverse(node.right);
    }
    traverse(current);
     return data;
    }

    DfsPostOrder(){
    let data = [];
    let current = this.root;
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.val);
    }
    traverse(current);
    return data;
    }

    DfsInOrder(){
     let data = [];
     let current = this.root;
     function traverse(node){
         if(node.left) traverse(node.left);
         data.push(node.val);
         if(node.right) traverse(node.right);
     }
     traverse(current);
     return data;
    }
    
    findNode(val){
    if(!this.root) return null;
    if(this.root.val === val) return this.root;
    else {
        let current = this.root;
        while(true){
            if(val < current.val){
                if(val === current.left.val) return current.left;
                current = current.left;
            } else {
                if(val === current.right.val) return current.right;
                current = current.right;
            }
        }
    }
    }

    deleteTree(val){
    let node = this.findNode(val);
    if(!node) return null;
    if(!node.left && !node.right) return node = null;
    else {
     let current = node;
     function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      current = null;
      }
      traverse(current);
      return current;
    }
    }

}



let tree = new BinaryTree();
let tree2 = new BinaryTree();
tree.insert(10);
tree.insert(12);
tree.insert(8);
// tree.insert(14);
tree.insert(5);
 tree2.insert(10);
 tree2.insert(12);
 tree2.insert(8);

let t1 = tree.BFS();
let t2 = tree2.BFS();
console.log('balanced :' +  t1.every((item, index)=> item === t2[index]));
console.log('height of tree :' +tree.height());
console.log('Level of node in tree :' +tree.LevelOfNode(5));
console.log('Next node of given node in tree :' +tree.NextNodeOfGivenNode(12));
console.log('Tree is binary sum Tree:' +tree.BinarySumTree());
console.log("BFS : " + tree.BFS());
console.log("DFS pre order: " +tree.DfsPreOrder());
console.log("DFS post order: " +tree.DfsPostOrder());
console.log("DFS in order: " +tree.DfsInOrder());

console.log('found node:');
console.log(tree.findNode(8));

console.log('deleted node:');
console.log(tree.deleteTree(8));

console.log(tree);

var lenarr = [1,2,3]
lenarr[100] = 0;
console.log(lenarr.length);