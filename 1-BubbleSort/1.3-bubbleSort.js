const log = data => console.log(data);


const swap = (arrayArg, firstIndex, secondIndex) => {


    [arrayArg[firstIndex], arrayArg[secondIndex]] = [arrayArg[secondIndex], arrayArg[firstIndex]]



}


const bubbleSort = unsortArray => {


    let swapped = true; 

    while(swapped){

        swapped = false; //no swap yet

        for(let i = 0; i < unsortArray.length; i++ ){

            const nextIndex = i + 1;

            if(unsortArray[i] > unsortArray[nextIndex]){

                swap(unsortArray, i, nextIndex);
                swapped = true; //after each swapping we are setting back our swapped to true

            }


        }

       
    }

    const sortArray = unsortArray;
    return sortArray;
}


const scoreArray = [2.5, 10, 30.5, 21.3, 4, 11, 5, 9, 3, 1]


log(bubbleSort(scoreArray));




// const log = data => console.log(data);


// const swap = (arrayArg, firstIndex, secondIndex) => {


//     [arrayArg[firstIndex], arrayArg[secondIndex]] = [arrayArg[secondIndex], arrayArg[firstIndex]]



// }


// const bubbleSort = unsortArray => {


//     let swapped = false; //

//     while(!swapped){

//         swapped = true;

//         for(let i = 0; i < unsortArray.length; i++ ){

//             const nextIndex = i + 1;

//             if(unsortArray[i] > unsortArray[nextIndex]){

//                 swap(unsortArray, i, nextIndex);
//                 swapped = false;

//             }


//         }

       
//     }

//     const sortArray = unsortArray;
//     return sortArray;
// }


// const scoreArray = [2.5, 10, 30.5, 21.3, 4, 11, 5, 9, 3, 1]


// log(bubbleSort(scoreArray));



