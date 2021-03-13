module.exports = function towelSort (matrix) {
    let res = [];

    if(matrix !== undefined){
      for(let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];

        if(i % 2 === 0) {
          arr.sort(function(a,b){
            return a - b
          });
        }
        else {
          arr.sort(function(a,b){
            return b - a
          });
        }

        for(let j = 0; j < arr.length; j++) {
          res.push(arr[j]);
        }
      }
    }

    return res;
}
