/*This Insertion Function will review each element and align 
all elements from small to large. Once all numbers are in order 
they will turn light green */

//Function Insertion
async function insertion(){
    console.log('In insertion()');
    //Selecting Element using querySelector
    const element = document.querySelectorAll(".bar");

    // First element bar will be the color light green
    element[0].style.background = 'lightgreen';
    //For loop verifying elements
    for(let i = 1; i < element.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = element[i].style.height;
        // New inserted Element will be the color blue
        element[i].style.background = 'blue';

        //Setting Delay
        await waitToFinish(setDelay);

        //While loop comparing elements and setting them in order
        while(j >= 0 && (parseInt(element[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // Elements out of order will remain the color blue
            element[j].style.background = 'blue';
            element[j + 1].style.height = element[j].style.height;
            j--;

            //Setting Delay
            await waitToFinish(setDelay);

            // Once element has been set in order it will turn lightgreen
            for(let k = i; k >= 0; k--){
                element[k].style.background = 'lightgreen';
            }
        }
        element[j + 1].style.height = key;
        // Elements that are in order will be lightgreen.
        element[i].style.background = 'lightgreen';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn(); //Disabling All other Sorting Arrays
    disableSizeSlider(); //Disabling Size Btn
    disableChangeArrayBtn(); //Disabling "Change Array" Btn
    await insertion(); //Wait for Insertion Array to finish then enable ...
    enableSortingBtn(); //Enable All other Sorting Arrays
    enableSizeSlider(); // Enable Size Btn
    enableChangeArrayBtn(); //Enable "Change Array" Btn
});