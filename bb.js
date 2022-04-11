const log = data => console.log(data);


function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {

  log(array);

  for (let i = 0; i < array.length ; i++) {

    
    // log(array[i]) // i = 1
    
    for (let j = i + 1; j < array.length  ; j++) { // j = 0

      const check = (array[i] > array[j]);

    
      log(`Is ${array[i]} > ${array[j]}? ${check}`);

      if (array[i] > array[j]) { // false
      
        log(`Locate unswap list; ${array}`);
      
        log(`Is ${array[i]} > ${array[j]}? ${check}`);
        swap(array, i, j);
        log(`Swapped list ${array}`);
      }

  
    }
  }
  

  // let swapped = false;

  // do {

  //   swapped = false;
  //   for(let i = 0; i < array.length; i++){

  //     const j = i + 1;

  //     const check = (array[i] > array[j])

  //     log(`Is ${array[i]} > ${array[j]}? ${check}`)

  //     if(array[i] > array[j]){

  //       log(`Unswap list; ${array}`);

  //       swap(array, j, i); 
  //       log(`Swapped list ${array}`) 


  //       swapped = true;

  //     }


  //   }




  // } while(swapped)
  return array;
}
console.log(bubbleSort([7,1,3,4,5,4,8])); // [1,2,3,4,5,6]