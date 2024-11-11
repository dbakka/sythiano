const createSynthPad = (audioContext) => {
    const now = audioContext.currentTime;
    
    // Create oscillators
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Set up oscillators
    osc1.type = 'sawtooth';
    osc2.type = 'square';
    
    osc1.frequency.setValueAtTime(220, now); // A3
    osc2.frequency.setValueAtTime(220.5, now); // Slightly detuned
    
    // Set up gain
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
    
    // Connect oscillators to gain
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    
    return {
        output: gainNode,
        start() {
            osc1.start(now);
            osc2.start(now);
        },
        stop() {
            const releaseTime = audioContext.currentTime + 0.5;
            gainNode.gain.linearRampToValueAtTime(0, releaseTime);
            osc1.stop(releaseTime);
            osc2.stop(releaseTime);
        }
    };
};

export default createSynthPad;