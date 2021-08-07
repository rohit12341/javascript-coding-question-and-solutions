function snakePatternMatrix(matrix, row, col){
let res = [];
for(let i = 0; i<row; i++){
    if(i%2 == 0){
       for(let j = 0; j<col; j++){
        res.push(matrix[i][j]);
       }
    } else {
     for(let j = col-1; j>=0; --j){
        res.push(matrix[i][j]);
       }   
    }
}
return res;
}

let mat = [ [ 10, 20, 30, 40 ],
            [ 15, 25, 35, 45 ],
            [ 27, 29, 37, 48 ],
            [ 32, 33, 39, 50 ] ];

snakePatternMatrix(mat, 4, 4);            
