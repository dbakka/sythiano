const createSynthArp = (audioContext) => {
    const now = audioContext.currentTime;
    const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
    let currentNote = 0;
    
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Set up filter
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    filter.Q.value = 4;
    
    // Set up oscillator
    osc.type = 'sawtooth';
    
    // Connect nodes
    osc.connect(filter);
    filter.connect(gainNode);
    
    let intervalId;
    
    return {
        output: gainNode,
        start() {
            osc.start(now);
            intervalId = setInterval(() => {
                osc.frequency.setValueAtTime(notes[currentNote], audioContext.currentTime);
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
                currentNote = (currentNote + 1) % notes.length;
            }, 200); // 16th notes at 120bpm
        },
        stop() {
            clearInterval(intervalId);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
            osc.stop(audioContext.currentTime + 0.2);
        }
    };
};

export default createSynthArp;