const createPercussion = (audioContext) => {
    const masterGain = audioContext.createGain();
    masterGain.gain.value = 0.8;
    
    const createKick = () => {
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const now = audioContext.currentTime;
        
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
        
        gainNode.gain.setValueAtTime(1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        osc.connect(gainNode);
        gainNode.connect(masterGain);
        
        osc.start(now);
        osc.stop(now + 0.3);
    };
    
    let intervalId;
    
    return {
        output: masterGain,
        start() {
            intervalId = setInterval(() => {
                createKick();
            }, 500); // Quarter notes at 120bpm
        },
        stop() {
            clearInterval(intervalId);
        }
    };
};

export default createPercussion;