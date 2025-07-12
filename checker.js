document.getElementById("check-btn").addEventListener("click", () => {
    const inputElement = document.getElementById("text-input");
    const resultElement = document.getElementById("result");
    const inputText = inputElement.value.trim();

    // Show an alert if no input is provided
    if (!inputText) {
        alert("Please input a value.");
        return;
    }

    // Function to check if a string is a palindrome
    const isPalindrome = (str) => {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reversedStr = cleanedStr.split("").reverse().join("");
        return cleanedStr === reversedStr;
    };

    // Determine the result and update the result div
    const isPalindromeResult = isPalindrome(inputText);
    resultElement.textContent = isPalindromeResult ? `${inputText} is a palindrome.` : `${inputText} is not a palindrome.`;

    // Show the result div if hidden
    if (resultElement.classList.contains("hidden")) {
        resultElement.classList.remove("hidden");
    }
});
