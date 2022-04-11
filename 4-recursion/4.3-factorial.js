const log = (data) => console.log(data);


/*

factorial function will take a numeric input and repeatedly multiply the result of multiply the input by result of repeatedly removing one increasingly from the input


input * input - 1

*/


const factorial = n => {
  
    
    
    if ( n < 2 ) {

        return 1;
    } 


    return n * factorial(n - 1);

}



log(factorial(10));