// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headChange = 0;
let middleChange = 0;
let bottomChange = 0;
// set state for all of the character's catchphrases
let catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const value = headDropdown.value;
    // increment the head change count state
    headChange++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url(../assets/${value}-head.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    // increment the middle change count state
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    // increment the bottom change count state
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const value = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(value);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You changed the head ${headChange} times, the middle ${middleChange} times, and the bottom ${bottomChange} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of catchphrases) {
        // and for each catchphrase
        // create an HTML element with the catchphrase as its text content
        const display = document.createElement('p');
        display.classList.add('catchphrase');
        display.textContent = catchphrase;
        catchphrasesEl.append(display);
    }
    // and append that HTML element to the cleared-out DOM
}
