/*This Selection Function will sort the array by repeatedly finding 
the minimum element and putting it at the beginning. Once all numbers are 
in order they will turn light green */


//Function Selection
async function selection(){
    console.log('In selection()');
    const element = document.querySelectorAll(".bar");
    //For loop verifying elements
    for(let i = 0; i < element.length; i++){
        console.log('In ith loop');
        //Setting min_index
        let min_index = i;
        // Element that will swap positions with the next Min Value will be the color Blue
        element[i].style.background = 'blue';
        for(let j = i+1; j < element.length; j++){
            console.log('In jth loop');
            // Current Element being compared for Min Value Index will be the color Red
            element[j].style.background = 'red';

            //Setting Delay
            await waitToFinish(setDelay);
            //If loop comparing Min Value, swapping values
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    element[min_index].style.background = 'yellow';
                }
                min_index = j;
            } 
            else{
                //Comparison value, if element is more than Min Value color will be Yellow
                element[j].style.background = 'yellow';
            }   
        }
        //Setting Delay
        await waitToFinish(setDelay);
        //Swapping Elements
        swap(element[min_index], element[i]);
        // Changing Min element index back to Yellow as it is swapped.
        element[min_index].style.background = 'yellow';
        // Elements that are in order will be lightgreen.
        element[i].style.background = 'lightgreen';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn(); //Disabling All other Sorting Arrays
    disableSizeSlider(); //Disabling Size Btn
    disableChangeArrayBtn(); //Disabling "Change Array" Btn
    await selection(); //Wait for Selection Array to finish then enable ...
    enableSortingBtn(); //Enable All other Sorting Arrays
    enableSizeSlider(); // Enable Size Btn
    enableChangeArrayBtn(); //Enable "Change Array" Btn
});
