let placeholder = document.getElementById('placeholder');
let input = document.getElementById('input');
let password = document.getElementById('input').value;
let progressBar = document.getElementById('progress-bar');
let toggleButton = document.getElementById('toggleBtn');

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

// Updates progress bar in width and backgroundcolor
function updateProgressBar(password) {
    let progress = 0;
    let color = 'rgb(180, 180, 180)';
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        progress += 40;
    }
    if (/[0-9]/.test(password)) {
        progress += 20;
    }
    if (/[!@?&$#%]/.test(password)) {
        progress += 20;
    }
    if (password.length >= 8) {
        progress += 20;
    }
    if (progress === 100) {
        color = 'lightgreen';
    }
    else if (progress >= 80) {
        color = 'yellow';
    } else if (progress >= 60) {
        color = 'orange';
    } else if (progress >= 40) {
        color = 'red';
    } else {
        color = 'rgb(180, 180, 180)'; 
    }
    progressBar.style.width = `${progress}%`;
    progressBar.style.backgroundColor = color;
}

// Resets the check images, when input is empty
function resetImages() {
    if (password === '') {
        const images = document.querySelectorAll('.content img');
        images.forEach(image => {
            image.src = 'img/cancel.png';
        });
    }

}

// Toggle password visibility
function togglePasswordVisibility() {
    if (input.type === 'password') {
        input.type = 'text';
        toggleButton.src = 'img/not-visible.png';
    } else {
        input.type = 'password';
        toggleButton.src = 'img/visible.png';
    }
}

// Eventlistener for input , updating the progressbar
document.getElementById("input").addEventListener("input", (event) => {
    updateProgressBar(event.target.value);
});

// EventListener for input if onFocus or onBlur and changes the placeholder class
input.addEventListener("focus", () => {
    input.style.borderColor = 'rgb(173, 102, 241)';
});

input.addEventListener("blur", () => {
    input.style.borderColor = 'rgb(28, 28, 28)';
});


