let placeholder = document.getElementById('placeholder');
let input = document.getElementById('input');
let password = document.getElementById('input').value;
let progressBar = document.getElementById('progress-bar');

function validatePassword(password) {
    // Checking for conditions
    let hasLowercase = /[a-z]/.test(password);
    let hasUppercase = /[A-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecialCharacter = /[!@?&$#%]/.test(password);
    let hasMinLength = password.length >= 8;

    // Get the correct picture based on condition
    updateImage("lowercase-uppercase", hasLowercase && hasUppercase);
    updateImage("number", hasNumber);
    updateImage("special-character", hasSpecialCharacter);
    updateImage("min-length", hasMinLength);
}

function updateImage(criteria, isValid) {
    let imageElement = document.querySelector(`img[data-criteria="${criteria}"]`);  // Find pic for criteria
    if (imageElement) {
        // Actualize pic based on criteria
        imageElement.src = isValid ? "img/check.png" : "img/cancel.png";
    }
}

function resetImages() {
    // Reset all pics
    const images = document.querySelectorAll('.content img');
    images.forEach(image => {
        image.src = 'img/cancel.png';
    });
}


// EventListener for input if onFocus or onBlur and changes the placeholder class

input.addEventListener("focus", () => {
    placeholder.classList.add('onFocus');
    input.style.borderColor = 'rgb(173, 102, 241)';
});

input.addEventListener("blur", () => {
    placeholder.classList.remove('onFocus');
    input.style.borderColor = 'rgb(28, 28, 28)';
    input.value = '';
    resetImages();
});