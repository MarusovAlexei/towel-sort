
module.exports = function towelSort(matrix) {
  if (matrix !== undefined) {
    let count = 0;
    let result = [];
    let flag = true;

    while (count < matrix.length) {
      if (flag) {
        result = result.concat(matrix[count]);
        flag = false;
      } else {
        result = result.concat(matrix[count].reverse())
        flag = true;
      }
      count++;
    };

    return result;
  }

  function towelSort(matrix) {
    let count = 0;
    let result = [];
    let flag = true;

    while (count < matrix.length) {
      if (flag) {
        result = result.concat(matrix[count]);
        flag = false;
      } else {
        result = result.concat(matrix[count].reverse())
        flag = true;
      }
      count++;
    };

    return result;
  }
  return [];
}