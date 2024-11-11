const createSynthBass = (audioContext) => {
    const now = audioContext.currentTime;
    
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Set up filter
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    filter.Q.value = 2;
    
    // Set up oscillator
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(55, now); // A1
    
    // Connect nodes
    osc.connect(filter);
    filter.connect(gainNode);
    
    let intervalId;
    const bassline = [55, 55, 62, 49]; // A1, A1, D2, G1
    let step = 0;
    
    return {
        output: gainNode,
        start() {
            osc.start(now);
            intervalId = setInterval(() => {
                const noteTime = audioContext.currentTime;
                osc.frequency.setValueAtTime(bassline[step], noteTime);
                gainNode.gain.setValueAtTime(0, noteTime);
                gainNode.gain.linearRampToValueAtTime(0.5, noteTime + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.4);
                step = (step + 1) % bassline.length;
            }, 500); // Half notes at 120bpm
        },
        stop() {
            clearInterval(intervalId);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
            osc.stop(audioContext.currentTime + 0.2);
        }
    };
};

export default createSynthBass;