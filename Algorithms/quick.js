/*This Quick Sort Function is meant to divide and conquer by swapping items
in place and partitioning a section of the array. It creates two empty arrays to 
hold elements less than the pivot value and elements greater than the pivot value, 
and then recursively sort the sub arrays.
 */

//Function to Partition the Array
async function partitionTheArray(element, l, r){
    console.log('In partitionTheArray()');
    let i = l - 1;
    // Determining Pivot value and assigning it the color "Red"
    element[r].style.background = 'red';

    //For loop
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionTheArray for j');
        // color current element
        element[j].style.background = 'yellow';
        
        // Setting Delay
        await waitToFinish(setDelay);

        if(parseInt(element[j].style.height) < parseInt(element[r].style.height)){
            console.log('In partitionTheArray for j if');
            i++;
            swap(element[i], element[j]);
            // Element being compared will be orange
            element[i].style.background = 'orange';
            if(i != j) element[j].style.background = 'orange';
            // Setting Delay
            await waitToFinish(setDelay);
        }
        else{
            // If element is less than Pivot Elemenent color Pink 
            element[j].style.background = 'pink';
        }
    }
    i++; 
    // Setting Delay
    await waitToFinish(setDelay);

    //Swap elements - Pivot height one
    swap(element[i], element[r]);
    console.log(`i = ${i}`, typeof(i));
    //Elements aligned will be green, while the others will be Pink
    element[r].style.background = 'pink';
    element[i].style.background = 'green';

    // Setting Delay
    await waitToFinish(setDelay);
    for(let k = 0; k < element.length; k++){
        if(element[k].style.background != 'green')
        element[k].style.background = 'lightgrey';
    }

    return i;
}

//Function QuickSort
async function quickSort(element, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));

    //Conditional Statement - If l is less than r...
    if(l < r){
        //Pivot Element will wait on above partition function
        let pivot_index = await partitionTheArray(element, l, r);
        await quickSort(element, l, pivot_index - 1);
        await quickSort(element, pivot_index + 1, r);
    }
    else{
        //Otherwise, it means elements are in order. They will be Green
        if(l >= 0 && r >= 0 && l <element.length && r <element.length){
            element[r].style.background = 'green';
            element[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = element.length - 1;
    disableSortingBtn(); //Disabling All other Sorting Arrays
    disableSizeSlider(); //Disabling Size Btn
    disableChangeArrayBtn(); //Disabling "Change Array" Btn
    await quickSort(element, l, r); //Wait for Quick Array to finish then enable ...
    enableSortingBtn(); //Enable All other Sorting Arrays
    enableSizeSlider(); // Enable Size Btn
    enableChangeArrayBtn(); //Enable "Change Array" Btn
});
