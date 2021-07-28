let osc;
let fft;
let playing;

function oscPlaying() {
    osc.start();
    playing = true;
}

function oscStopped() {
    osc.stop();
    playing = false;
}

function playStopBtn() {
    if (playing == false) {
        oscPlaying();
        pSBtn.html('stop');
    } else {
        oscStopped();
        pSBtn.html('play!');
    }
}

function setup() {
    createCanvas(400, 400);

    osc = new p5.Oscillator(0, 'sine');
    osc.amp(0.25);

    fft = new p5.FFT();

    pSBtn = createButton('start!');
    pSBtn.mousePressed(playStopBtn);
}

function draw() {
    const frequency = int(document.querySelector('input[name="frequency"]:checked').value);
    osc.freq(frequency);

    background(0);
    let waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(250);
    strokeWeight(2);
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        vertex(x, y);
    }
    endShape();
}