const log = (data) => console.log(data);



/*
The insertion sort has two loops. The outer loop moves element by element through the array, while the inner loop compares the element chosen in the outer loop to the element next to it in the array. If the element selected by the outer loop is less than the element selected by the inner loop, array elements are shifted over to the right to make room for the inner-loop element. 

*/


const insertionSort = array => {

    let outerIndex, innerIndex;
    let len = array.length;
    let selectedValue;

    for(outerIndex = 0; outerIndex < len; outerIndex++){

        selectedValue = array[outerIndex];

    }


    return array;
}


const arrayNums = [7, 2, 1, 10, 9, 4, 6, 3, 5, 8];


log(insertionSort(arrayNums));
