class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST{
    constructor(){
        this.root = null;
    }

    insertnode(val){
        let node = new Node(val);
        if(!this.root) {
         this.root = node;
         return this;
        } else {
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


    findNode(val){
    if(!this.root) return null;
    if(val === this.root.val){
        return this.root;
    } else {
        let current = this.root;
        while(true){
            if(val < current.val){
                if(current.left.val === val){
                    return current.left;
                }
                current = current.left;
            } else {
                if(current.right.val === val){
                    return current.right;
                }
                current = current.right;
            }
        }
    }
    }

    // findNode2(val){
    //     if(this.root==null) return null;
    //     let current = this.root;
    //     var found = false;
    //     while(current && !found){
    //             if(val < current.val){
    //                 current = current.left;
    //             } else if(val > current.val){
    //                 current = current.right;
    //             } else {
    //                 found = false;
    //             }
    //         }
    //         return current;
    //     }


        BFS(){
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
              node.left && traverse(node.left);
              data.push(node.val)
              node.right && traverse(node.right);
          }  
          traverse(current);
          return data;
        }
}

let bst = new BST();
bst.insertnode(20);
bst.insertnode(19);
bst.insertnode(21);
bst.insertnode(15);
bst.insertnode(18);
bst.insertnode(10);
// console.log(bst.findNode2(15));
console.log("BFS : " +bst.BFS());
console.log("DFS pre order: " +bst.DfsPreOrder());
console.log("DFS post order: " +bst.DfsPostOrder());
console.log("DFS in order: " +bst.DfsInOrder());
console.log(bst);



// big O of BST
// insertion, deletion - O(logn)
var a;
var b = (a=3) ? true : false;


