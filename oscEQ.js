let osc;
let fft;
let playing;

function radioEqValue() {
    rEq0 = document.getElementById('frq0');
    rEq1 = document.getElementById('frq1');
    rEq2 = document.getElementById('frq2');
    rEq3 = document.getElementById('frq3');
    rEq4 = document.getElementById('frq4');
    rEq5 = document.getElementById('frq5');
    rEq6 = document.getElementById('frq6');
    rEq7 = document.getElementById('frq7');
    rEq8 = document.getElementById('frq8');
    rEq9 = document.getElementById('frq9');

    if (rEq0.checked == true) {
        radioEqFreq = int(rEq0.value);
    } else if (rEq1.checked == true) {
        radioEqFreq = int(rEq1.value);
    } else if (rEq2.checked == true) {
        radioEqFreq = int(rEq2.value);
    } else if (rEq3.checked == true) {
        radioEqFreq = int(rEq3.value);
    } else if (rEq4.checked == true) {
        radioEqFreq = int(rEq4.value);
    } else if (rEq5.checked == true) {
        radioEqFreq = int(rEq5.value);
    } else if (rEq6.checked == true) {
        radioEqFreq = int(rEq6.value);
    } else if (rEq7.checked == true) {
        radioEqFreq = int(rEq7.value);
    } else if (rEq8.checked == true) {
        radioEqFreq = int(rEq8.value);
    } else if (rEq9.checked == true) {
        radioEqFreq = int(rEq9.value);
    }
}

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
        pSBtn.html('play');
    }
}

function setup() {
    createCanvas(400, 400);

    osc = new p5.Oscillator(0, 'sine');
    osc.amp(0.25);

    fft = new p5.FFT();

    pSBtn = createButton('play');
    pSBtn.mousePressed(playStopBtn);
}

function draw() {
    radioEqValue();
    osc.freq(radioEqFreq);

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

/* function loaded() {
} */