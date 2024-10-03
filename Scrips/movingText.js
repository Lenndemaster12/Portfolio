/*FIRST MOVING TEXT*/
document.addEventListener('DOMContentLoaded', () => {
    const textEl = document.getElementById('movingtext')
    const speedEl = Object.assign(document.createElement('input'), {
        value: 1,
        step: 1,
        style: 'display: none;'
    });
    
    document.body.appendChild(speedEl);

    const text = 'Frontend Developer';
    let idx = 1;
    let speed = 300 / speedEl.value;

    const writeText = () => {
        textEl.innerText = text.slice(0, idx++);
        setTimeout(writeText, idx > text.length ? (idx = 1, 3000) : speed);
    }

    speedEl.addEventListener('input', e => speed = 300 / e.target.value);

    writeText();
});

