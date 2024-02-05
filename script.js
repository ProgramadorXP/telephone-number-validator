'use strict'
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(userInput.value === "") {
        alert("Please provide a phone number");
    } else {
        validation(userInput.value);
        userInput.value = "";
    }
});

clearBtn.addEventListener('click', () => {
    if(userInput.value !== null) {
        resultsDiv.textContent = "";
    }
});

const validation = (userInput) => {
    const telRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    if(telRegex.test(userInput)) {
        resultsDiv.textContent += `Valid US number: ${userInput} \n`;
    } else {
        resultsDiv.textContent += `Invalid US number: ${userInput} \n`;
    }
};