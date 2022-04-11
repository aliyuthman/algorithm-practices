/*

Insertion sort - it start with the first element in the array, compare this to its neighboring items, when out of order is found, element is not swapped with its neigboring element, instead, it looks for the appropriate place to insert the element or appropriate insertion point is found and the element is placed into sort order. 

This means the sort is done in only a single pass through the array. 


Steps:

1. Iterate - visit each item in the array from the start to the end. 

2. Compare - find out of order neighboring items

3. Shift and insert - find the insertion point, shift and insert

*/

const log = (data) => console.log(data);

const lessThan = (array, index1, index2) => array[index1] < array[index2];

const swap = (arrayArg, firstIndex, secondIndex) => {
  [arrayArg[firstIndex], arrayArg[secondIndex]] = [
    arrayArg[secondIndex],
    arrayArg[firstIndex],
  ];
};

const insertionSort = (array) => {
  // log(array);

  for (let i = 1; i < array.length; i++) {//interting through the arrays
    if (lessThan(array, i, i - 1)) { //true - finding out of order

      for (j = i; j > 0; j--) {//walks backward through the arrays
        if (lessThan(array, j, j - 1)) {//true - Finding proper insertion point
        //   log(array);
          swap(array, j, j - 1);// Inserting the out of order number by swapping
        //   log(array);
        }
      }
    }
  }

  return array;
};

log(insertionSort([14, 33, 27, 10, 35, 40, 42, 44]));
