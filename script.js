// --- PART 2: Functions with parameters, return values, and scope ---

/**
 * Adds an animation class to an element, then removes it after a set time.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {string} className - The CSS animation class to apply.
 */
function toggleAnimation(element, className) {
    element.classList.add(className);

    // Remove class after animation ends (1.5s in this case)
    setTimeout(() => {
        element.classList.remove(className);
    }, 1500);
}

/**
 * Shows or hides the modal popup.
 * @param {HTMLElement} modalElement - The modal element.
 * @param {boolean} show - Whether to show (true) or hide (false) the modal.
 * @returns {string} - Returns status for logging.
 */
function setModalVisibility(modalElement, show) {
    if (show) {
        modalElement.classList.add("show");
        return "Modal opened";
    } else {
        modalElement.classList.remove("show");
        return "Modal closed";
    }
}

// --- Demonstrating local vs global scope ---
let globalMessage = "This is the playground's global message!";

function scopeExample() {
    let localMessage = "Hello from inside the function!";
    console.log(globalMessage); // Accessible
    console.log(localMessage);  // Accessible here
}
scopeExample();

// --- PART 3: Combine CSS + JS ---

// Animate box when button clicked
const box = document.querySelector(".box");
document.getElementById("animateBtn").addEventListener("click", () => {
    toggleAnimation(box, "animate");
});

// Modal controls
const modal = document.getElementById("myModal");
document.getElementById("openModal").addEventListener("click", () => {
    console.log(setModalVisibility(modal, true));
});
document.getElementById("closeModal").addEventListener("click", () => {
    console.log(setModalVisibility(modal, false));
});
