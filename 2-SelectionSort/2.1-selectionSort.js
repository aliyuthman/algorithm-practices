const log = (data) => console.log(data);

/*

selection sort allowed selection  and swapping position of any two numbers

-- This is achieve by assuming the first element as selected by the outer loop to to be the minimun otherwise inner loop selection assumed the minimun.
*/

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];

  //   const temp = array[index1];
  //   array[index1] = array[index2];
  //   array[index2] = temp;
};

function selectionSort(items) {

  log(items);

  let min;

  for (let i = 0; i < items.length; i++) {
    min = i;

    for (let j = i + 1; j < items.length; j++) {
      // log(`i * j = ${items[i]} * ${items[j]}`);

      if (items[j] < items[min]) {
        min = j;
      }
    }

    log(`Before swapping:  ${items}`);
    swap(items, i, min);
    log(`Swapped: ${items}`);


  }

  return items;
}
// selectionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

const arrayNums = [7, 2, 1, 10, 9, 4, 6, 3, 5, 8];

const sortedArray = selectionSort(arrayNums);

log(sortedArray);
