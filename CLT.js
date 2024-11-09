// Select the input field
const inpt = document.querySelector(".input");

// Function to append numbers or operators to the input
function appendNumber(value) {
    if (value === "AC") {//actioned keybutton
        inpt.value = ""; // Clear the display if "AC" is clicked
    } else if (value === "cut") //actioned keybutton
        {
        inpt.value = inpt.value.slice(0, -1); // Remove the last character for "cut"
    } else {
        inpt.value += value; // Append the clicked value to the input field
    }
}

// Function to evaluate the expression in the input
function solve() {
    try {
        let result = eval(inpt.value); // Evaluate the expression
        inpt.value = result; // Display the result in the input field
    } catch (error) {
        inpt.value = "Error"; // Display "Error" if the input is invalid
    }
}

// Listen for keyboard events
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Handle number keys (0-9)
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    // Handle operator keys
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendNumber(key);
    }
    // Handle dot for decimal point
    else if (key === '.') {
        appendNumber(key);
    }
    // Handle backspace key to delete last character
    else if (key === 'Backspace') {
        appendNumber("cut");
    }
    // Handle Enter key to evaluate the expression
    else if (key === 'Enter') {
        solve();
    }
    // Handle the "AC" clear function (you can assign a key like Escape or 'C' for clear)
    else if (key === 'Escape') {
        appendNumber("AC");
    }
});
