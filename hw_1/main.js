let row = 5;
let col = 6;

const getTable = (row, col) => {
  let num = 1;
  let array = [];

  for (let j = 0; j < row; j++) {
    array.push([num]);
    num++;
  }
  for (let k = 0; k < col - 1; k++) {
    if (k % 2 !== 0) {
      for (let j = 0; j < row; j++) {
        array[j].push(num);
        num++;
      }
    } else {
      for (let j = row - 1; j >= 0; j--) {
        array[j].push(num);
        num++;
      }
    }
  }
  return array;
};
console.log(getTable(row, col));
