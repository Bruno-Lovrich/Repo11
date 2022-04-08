var myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr) {

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j +1]) {
        var sor = arr[j];
        arr[j] = arr[j + 1];
        arr[j +1] = sor;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(myArr));

module.exports = bubbleSort;