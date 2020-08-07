class Hash {
    constructor(size = 20){
        this.keyMap = new Array(size);
    }


    _hash(key){
    let total = 0;
    let prime = 31;
    for(let i = 0;i<Math.min(key.length, 100);i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total+prime+value)%this.keyMap.length;
    }
    return total;
    }
 
    set(key, val){
     let index = this._hash(key);
     if(!this.keyMap[index]) {this.keyMap[index] = []};
     this.keyMap[index].push([key, val]);
     console.log('index: '+index);
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length;i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i];
                }
            }
        }
        return null;
    }

    values(){
    let arrValue = [];
    for(let i = 0;i<this.keyMap.length;i++){
        if(this.keyMap[i]){
            for(let j = 0;j<this.keyMap[i].length;j++){
                if(!arrValue.includes(this.keyMap[i][j][1])){
                  arrValue.push(this.keyMap[i][j][1]);
                }
            }
        }
    }
    return arrValue;
    }

    keys(){
        let keyValues = [];
        for(let i = 0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j = 0;j<this.keyMap[i].length;j++){
                    if(!keyValues.includes(this.keyMap[i][j][0])){
                     keyValues.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keyValues;
    }


}


const table = new Hash();
const key = table._hash('rohit');
console.log('key: '+key);

table.set('name', 'rohit');
table.set('name', 'kumar');
table.set('town', 'tonk');
table.set('age', '20 year');
table.set('name', 'kumar');
table.set('age', '20 year');
console.log(table.get('age'));
console.log(table.values());
console.log(table.keys());

console.log(table.keyMap);



// time complexity

// avg case
// insert/delete/access = O(1)