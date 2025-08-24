const textInput = document.getElementById("textInput");
const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const clearBtn = document.getElementById("clearBtn");

//Convert to UPPERCASE
upperBtn.addEventListener("click", () => {
    textInput.value = textInput.value.toUpperCase();
});

//Convert to lowercase
lowerBtn.addEventListener("click", () =>{
    textInput.value = textInput.value.toUppercase();
});

// Clear text
clearBtn.addEventListener("click", () => {
    textInput.value = "";
})
