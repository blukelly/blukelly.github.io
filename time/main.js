// JavaScript code to handle eye opening and closing on hover
const eyelids = document.querySelectorAll('.eyelid');

// Function to close all eyes (shut all eyelids)
function closeAllEyes() {
    eyelids.forEach(eyelid => {
        eyelid.style.height = '300px'; // Close the eye (cover the entire eye)
    });
}

// Function to open all eyes (lift all eyelids)
function openAllEyes() {
    eyelids.forEach(eyelid => {
        eyelid.style.height = '75'; // Open the eye (hide the eyelid)
    });
}

// Get the eye container elements
const clockContainers = document.querySelectorAll('.clock-container');

// Add event listeners to each clock container
clockContainers.forEach((container, index) => {
    container.addEventListener('mouseenter', () => {
        // Close all eyes when any clock container is hovered over
        closeAllEyes();
    });

    container.addEventListener('mouseleave', () => {
        // Open all eyes when mouse leaves any clock container
        openAllEyes();
    });
});


// JavaScript code to handle clock and rotating images

// Constants
const movingShapesContainers = document.querySelectorAll('.moving-shapes-container');
const clockRadii = Array.from(document.querySelectorAll('.clock-container')).map(container => container.offsetWidth / 2); // Radius of the clock containers
const shapeRadius = clockRadii[0] - 80; // Distance from center to shape

// Function to update the position of the moving shapes containers based on the current time
function updateShapePosition() {
    const now = new Date();
    const hours = now.getHours(); // Get the current hour
    const minutes = now.getMinutes(); // Get the current minute

    // Calculate the angle based on the hours for the first clock container
    const hoursAngle = ((hours % 12) / 12) * 360;

    // Convert the angle to radians
    const hoursRadians = (hoursAngle - 90) * (Math.PI / 180);

    // Calculate the new position of the moving shapes container for the first clock container
    const xHours = clockRadii[0] + shapeRadius * Math.cos(hoursRadians) - movingShapesContainers[0].offsetWidth / 2;
    const yHours = clockRadii[0] + shapeRadius * Math.sin(hoursRadians) - movingShapesContainers[0].offsetHeight / 2;

    // Update the position of the moving shapes container for the first clock container
    movingShapesContainers[0].style.left = `${xHours}px`;
    movingShapesContainers[0].style.top = `${yHours}px`;

    // Calculate the angle based on the minutes for the second clock container
    const minutesAngle = (minutes / 60) * 360;

    // Convert the angle to radians
    const minutesRadians = (minutesAngle - 90) * (Math.PI / 180);

    // Calculate the new position of the moving shapes container for the second clock container
    const xMinutes = clockRadii[1] + shapeRadius * Math.cos(minutesRadians) - movingShapesContainers[1].offsetWidth / 2;
    const yMinutes = clockRadii[1] + shapeRadius * Math.sin(minutesRadians) - movingShapesContainers[1].offsetHeight / 2;

    // Update the position of the moving shapes container for the second clock container
    movingShapesContainers[1].style.left = `${xMinutes}px`;
    movingShapesContainers[1].style.top = `${yMinutes}px`;
}

// Call the function every second to update the position of the moving shapes containers
setInterval(updateShapePosition, 1000);

// Run the function immediately on page load
updateShapePosition();
