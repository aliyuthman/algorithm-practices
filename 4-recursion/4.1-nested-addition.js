const log = (data) => console.log(data);


/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7

           
 
 */

const nestedAd = array => {

   
    let sum = 0 //set sum = 0

    //read the array by looping
    for(let i = 0; i < array.length; i++){

         //add each item to the sum
         sum += array[i];
    }
       


        //return sum
    return sum;
}



log(nestedAd([1, 2, 3, 4]));