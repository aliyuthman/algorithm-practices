const log = data => console.log(data);

/*

-- Linguistics, and art - recursion refers to the occurence of a thing defined in terms of itself. 

-- Computer Science - recursive function is a function that calls itself. 

-- Recursive functions are often elegant and solve complex problems throught the "The divide-and-conquer" method. 


-----------------------------------------------
Rules involving the use of recursion
-----------------------------------------------

Problems:

-- Wrong implementation of recursive function might result into infinite recursive. 

-- Infinite recursive calls result in stack overflow, 

-- Stack Overflow is when the maximum number of call stacks of the program execeeds the limited amount of address space(memory). 



One can observe the following rules to avoid recursive calls



1. Base case - a good implementation of recursive will have a correct base case. The base is a statement that defines when the recursion is terminated or stopped. Thus, it is also called the terminating case. 

__Mostly, stack overflow result from improper base case


*/



//Example


const countDownToZero = n => {

    if (n<0) return //


    log(n)

    return countDownToZero(n-1);


}




// countDownToZero(12);


//While use recursive function

/*

1. Define the function to perform a specific task
2. First call the function outside itself
3. Set the base ahead, for when the function will stop
4. call the function inside itself 


*/


//Example 2: factorial


const factorial = n => {

    if (n == 1) return n;

    log(`${n} * factorial(${n-1})`);

    return n * factorial(n - 1);
}



log(factorial(5));


/*

Note: Algorithms requires a deeper recursive call than JavaScript can handle, we instead pursue an iterative solution to the algorithm. 

--Just know that any function that is written in recursive methods can be rewritten in an iterative manner*/



