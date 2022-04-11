const log = (data) => console.table(data);

/*Binary Search can only be done sorted array else it won't work*/

/*

---------------------------------
Binary Search
---------------------------------
if a linear search is like searching an unsorted deck of cards, binary search is like searching in a dictionary. Dictionaries are sorted alphabetically. The key is that the dictionary is sorted which means to use binary search we must have our unsorted array sorted first. 

Binary Search procedures:
-------------------------

Starting with a sorted array, check the middle array value. If the value is a match, then the value has been found. If the value is greater than the sought value, repeat this process for the values to the left, otherwise for the values to the right.  


1. Find the middle index for any unsearched array
2. Check the element at the middle index for the value being sought for. 


*/

const objArray = [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
  { id: 24, name: "Ben" },
];

const binarySearch = (id, array) => {
  //recording the start and end of the range of unsearched as min and max
  let rangeMin = 0;
  let rangeMax = array.length - 1;

  let middleIndex; //middle of the unsearched array
  let element; //target element unknown yet

  while (rangeMin <= rangeMax) {
    //while we have unsearched region //true
    log(`min: ${rangeMin} | max: ${rangeMax} | Mid: ${middleIndex}`)
    middleIndex = Math.floor((rangeMin + rangeMax) / 2); //pick the middle of the unsearched region

    element = array[middleIndex];

    if (element.id == id) {
      //   return true;

      return element;
    } else if (element.id < id) {
      rangeMin = middleIndex + 1;
    } else {
      rangeMax = middleIndex - 1;
    }
  }

  return void 0;
};

log(binarySearch(24, objArray));
