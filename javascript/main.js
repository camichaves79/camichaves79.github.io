var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var startTime = Date.now(); // Record the start time
var duration = 900000000; // Duration of the color transition in milliseconds

var draw = function () {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    var fraction = Math.min(elapsedTime / duration, 1); // Calculate the fraction of the transition completed

    // Interpolate the green color component from 255 to 0
    var greenValue = Math.floor(200 * (1 - fraction));
    var color = `rgb(0, ${greenValue}, 0)`; // Construct the color string

    q.getContext('2d').fillStyle = 'rgba(0,0,0,.06)';
    q.getContext('2d').fillRect(0, 0, width, height);
    q.getContext('2d').fillStyle = color; // Use the interpolated color

    letters.map(function (y_pos, index) {
        text = String.fromCharCode(3e4 + Math.random() * 33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });

    if (fraction === 1) clearInterval(intervalId); // Optionally stop the interval when the transition is complete
};

var intervalId = setInterval(draw, 33);

// Optionally, you can still use setTimeout to clear the interval after 10 seconds or after the color transition completes
setTimeout(function () {
    clearInterval(intervalId);
}, duration);
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvasBackground');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = '#3498db'; // Example: solid color fill
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = '#3498db';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
});

function initScroll() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth' // You can use 'auto' instead of 'smooth' for an instant scroll
    });
}

function blurrBg() {
    var el = document.getElementById('vignette');
    el.classList.add("blurred-bg");
}

window.onload = function () {
    initScroll();
    setTimeout(blurrBg, 8000);
};
function toggleDropdown(projectId) {
    var dropdown = document.getElementById(projectId + '-dropdown');
    var button = document.getElementById(projectId + 'Id');
    if (button.innerText === 'Show Details') {
        button.innerText = 'Hide Details'
    }
    else {
        button.innerText = "Show Details"
    }
    dropdown.classList.toggle("hidden");
};