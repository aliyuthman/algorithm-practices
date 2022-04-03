const log = (data) => console.log(data);

const bubbleSort = (unsortedArray) => {
  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (unsortedArray[i] < unsortedArray[j]) {
        //i = 0, j = (i + 1) = (0 + 1) = 1

        swap(unsortedArray, i, j);
      }
    }
  }

  const sortedArray = unsortedArray;

  return sortedArray;
};

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

log(bubbleSort([7, 2, 1, 10, 2, 4, 6, 3, 5]));
