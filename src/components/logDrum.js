const createLogDrum = (audioContext) => {
    // Initialize gain node immediately since it's used as output
    const masterGainNode = audioContext.createGain();
    masterGainNode.gain.value = 0.8;
    
    let isPlaying = false;
    let intervalId = null;

    // Function to create and play one drum hit
    const playDrumHit = () => {
        if (!isPlaying) return;

        const now = audioContext.currentTime;
        
        // Create fresh nodes for each hit
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        // Set up filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, now);
        filter.Q.setValueAtTime(8, now);
        
        // Set up oscillator
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(55, now); // A1
        
        // Set up gain envelope
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.9, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        
        // Connect nodes
        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(masterGainNode);
        
        // Start and stop the oscillator
        osc.start(now);
        osc.stop(now + 0.5);
        
        // Clean up nodes after they're done
        setTimeout(() => {
            osc.disconnect();
            filter.disconnect();
            gainNode.disconnect();
        }, 500);
    };

    return {
        output: masterGainNode,
        start() {
            console.log('Starting log drum');
            isPlaying = true;
            
            // Play first hit immediately
            playDrumHit();
            
            // Set up interval for repeated hits
            intervalId = setInterval(playDrumHit, 500); // 120 BPM
        },
        stop() {
            console.log('Stopping log drum');
            isPlaying = false;
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    };
};

export default createLogDrum;