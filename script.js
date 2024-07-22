//Get elements from HTML
const input = document.getElementById("text-input")
const checkButton = document.getElementById("check-button");
const resultDisplay = document.getElementById("result");

//Click Function
checkButton.addEventListener("click", (e) => {
    //Prevent form from submiy
    e.preventDefault();
    //Initializied variable
    let inputValue = input.value;
    let inputValueBackward = "";
    //Check if input value is not empty
    if (!inputValue){
        alert("Please input a value")
        return;
    };
    //Filter input text
    inputValue = textFilter(inputValue);
    inputValueBackward = textBackward(inputValue);

    //Initialized and show tetx result
    let textResult = inputValue === inputValueBackward ? `<span class="bold">${input.value}</span> is a palindrome.`:`<span class="bold">${input.value}</span> is not a palindrome` ;
    resultDisplay.innerHTML = textResult;

    //Set input value back to empty
    input.value = "";
})

//Function to make text spelled backward
const textBackward = (textInput) => {
    const inputLength = textInput.length;
    let result = "";
    for(let i = inputLength - 1; i >= 0; i--){
        result += textInput[i]
    }
    return result;
}

//Filter non-alpanumeric text using regex
const textFilter = (textInput) => {
    const regex = /[^a-z0-9]/ig;
    return textInput.replace(regex, '').toLowerCase();
}