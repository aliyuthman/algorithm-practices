const log = data => console.log(data);


const swap = (array, iIndex, jIndex) => {


   return [array[iIndex], array[jIndex]] = [array[jIndex], array[iIndex]]
}


const selectionSort = arrayItems => {

    let min, arrayLength = arrayItems.length;

    for(let i = 0; i < arrayLength; i++){
    
    min = i; //assuming our minimum is i, then check if this is true from inner loop

    for(let j = i + 1; j < arrayLength; j++){

        if(arrayItems[min] > arrayItems[j]){//check if the presumed minimum is greater than j

            log(`${arrayItems[i]} > ${arrayItems[j]}`);

            min = j;

        }

        

    }


    swap(arrayItems, i, min);



    }

    return arrayItems;
}






log(selectionSort([7, 9, 1, 2, 6, 8, 4, 5, 3]));