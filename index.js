var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var startTime = Date.now();
var duration = 60000;

var draw = function () {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    var fraction = Math.min(elapsedTime / duration, 1);

    var greenValue = Math.floor(200 * (1 - fraction));
    var color = `rgb(0, ${greenValue}, 0)`;

    q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
    q.getContext('2d').fillRect(0, 0, width, height);
    q.getContext('2d').fillStyle = color;

    letters.map(function (y_pos, index) {
        text = String.fromCharCode(3e4 + Math.random() * 33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });

    if (fraction === 1) clearInterval(intervalId);
};

var intervalId = setInterval(draw, 33);

setTimeout(function () {
    clearInterval(intervalId);
}, duration);

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvasBackground');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = '#3498db';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = '#3498db';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
});

window.onload = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};
