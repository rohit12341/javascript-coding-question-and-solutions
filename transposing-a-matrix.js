// returning a new matrix
function transposeOfMatrix(matrix, row, col){
  let res = [[],[],[]];
for(let i = 0; i<row; i++){
       for(let j = 0; j<col; j++){
         res[i][j] = matrix[j][i];
       }
    }
}

// optimized in-place technique
function transposeOfMatrixInPlace(matrix){
for(let i = 0; i<row; i++){
       for(let j = i+1; j<col; j++){
         // swaping items
         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]] ;
       }
    }
}

let mat = [ [ 10, 20, 30, 40 ],
            [ 15, 25, 35, 45 ],
            [ 27, 29, 37, 48 ],
            [ 32, 33, 39, 50 ] ];

transposeOfMatrix(mat, 4, 4);  
transposeOfMatrixInPlace(mat);
