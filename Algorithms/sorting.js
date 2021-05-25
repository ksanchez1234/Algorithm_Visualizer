/*This JavaScript file is used to bring all other algorithm files together
and assist in button functionality. Swaps Algorithms, use DOM to select elements, and
enables and disables buttons. */

// Function uses 'swap' to sort algorithms. Takes 2 DOM elements as input
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Function disables sorting buttons during sorting and enabled with below function.
function disableSortingBtn(){
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}
// Function enables sorting buttons 
function enableSortingBtn(){
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Function disables the size slider during sorting and enables with below function.
function disableSizeSlider(){
    document.querySelector("#array_size").disabled = true;
}
// Function enables the size slider
function enableSizeSlider(){
    document.querySelector("#array_size").disabled = false;
}

// Function disables the Change Array during sorting and enables with below function.
function disableChangeArrayBtn(){
    document.querySelector(".changeArray").disabled = true;
}
// Function enables the Change Array
function enableChangeArrayBtn(){
    document.querySelector(".changeArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitToFinish(millisecond) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, millisecond); 
    }) 
}

// Assigning arraySize the "array_size" value from DOM
let arraySize = document.querySelector('#array_size');

// Event-listener will update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createChangeArray(parseInt(arraySize.value));
});

//Default input for waitToFinish function will be 260ms
let setDelay = 260;

// Selecting speed slider from DOM
let setDelayElement = document.querySelector('#speed_input');

// Event-listener will update the set delay time 
setDelayElement.addEventListener('input', function(){
    console.log(setDelayElement.value, typeof(setDelayElement.value));
    setDelay = 320 - parseInt(setDelayElement.value);
});

// Array created to store all the randomly generated numbers
let array = [];

// This will display bars when user visits site
createChangeArray();

// Function will create a new array with conditions listed
function createChangeArray(noOfBars = 60) {
    // Function to delete old bars from DOM 
    deleteChild();

    // Printing Array of Random Numbers
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // Applying info to the div #bars element (HTML)
    const bars = document.querySelector("#bars");

    // Loop to create multiple element div
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Function to delete all previous bars so new can be added 
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting changeArray button from DOM and adding the Event-listener
const changeArray = document.querySelector(".changeArray");
changeArray.addEventListener("click", function(){
    console.log("From changeArray " + arraySize.value);
    console.log("From changeArray " + setDelay);
    enableSortingBtn();
    enableSizeSlider();
    createChangeArray(arraySize.value);
});