/*This Merge Function will merge the elements of one ore more arrays together 
so that values of one are appended to the end of the previous one. Once all numbers 
are in order they will turn green */


//Function Merge
async function merge(element, low, mid, high){
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);

    //Setting two Arrays
    let left = new Array(n1);
    let right = new Array(n2);

    //For loop for Array 1
    for(let i = 0; i < n1; i++){

        //Setting Delay
        await waitToFinish(setDelay);
        console.log('In merge left loop');
        console.log(element[low + i].style.height + ' at ' + (low+i));
        // Elements being compared will be orange - For Array 1
        element[low + i].style.background = 'orange';
        left[i] = element[low + i].style.height;
    }
    //For loop for Array 2
    for(let i = 0; i < n2; i++){

        //Setting Delay
        await waitToFinish(setDelay);

        console.log('In merge right loop');
        console.log(element[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // Elements being compared will be yellow - For Array 2
        element[mid + 1 + i].style.background = 'yellow';
        right[i] = element[mid + 1 + i].style.height;
    }

    //Setting Delay
    await waitToFinish(setDelay);

    //Initializing variable values at 0
    let i = 0, j = 0, k = low;

    //While loops to compare Array 1 to Array 2
    //If element is less than Array1 and less than Array 2...
    while(i < n1 && j < n2){

        //Setting Delay
        await waitToFinish(setDelay);

        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // Adding color when comparing for merge
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            
            element[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            } 
            element[k].style.height = right[j];
            j++;
            k++;
        }
    }
    //If element is less than Array1...
    while(i < n1){

        //Setting Delay
        await waitToFinish(setDelay);

        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = left[i];
        i++;
        k++;
    }
    //If element is less than Array2...
    while(j < n2){

        //Setting Delay
        await waitToFinish(setDelay);

        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = right[j];
        j++;
        k++;
    }
}

//Function to merge the elements
async function mergeSort(element, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 element l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(element, l, m);
    await mergeSort(element, m + 1, r);
    await merge(element, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(element.length) - 1;
    disableSortingBtn(); //Disabling All other Sorting Arrays
    disableSizeSlider(); //Disabling Size Btn
    disableChangeArrayBtn(); //Disabling "Change Array" Btn
    await mergeSort(element, l, r); //Wait for Merge Array to finish then enable ...
    enableSortingBtn(); //Enable All other Sorting Arrays
    enableSizeSlider(); // Enable Size Btn
    enableChangeArrayBtn(); //Enable "Change Array" Btn 
});
    