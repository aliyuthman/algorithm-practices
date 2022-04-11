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

         //we are to add each item to the sum but need to check the type of items the array[i] is holding before doing that

         if(Array.isArray(array[i])){//if this is true then, we recursively call nested add

            const innerArraySum = nestedAd(array[i]); //the result will be added to back our sum


            sum += innerArraySum;

            
         } else {

            sum += array[i];
         }
    }
       


        //return sum
    return sum;
}



log(nestedAd([1, 2, 3, 4, [7, 10]]));