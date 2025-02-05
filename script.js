const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

let lastSeconds = 0;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update hours and minutes without flip effect
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;

    // Check if seconds have changed
    if (seconds !== lastSeconds) {
        // Add flip effect to seconds
        secondsElement.classList.add('flip');
        
        setTimeout(() => {
            secondsElement.textContent = seconds;
            secondsElement.classList.remove('flip');
        }, 250); // Half the duration of the flip effect

        lastSeconds = seconds; // Update lastSeconds
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();