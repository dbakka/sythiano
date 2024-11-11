// Import components
import createLogDrum from './logDrum.js';
import createSynthPad from './synthPad.js';
import createSynthArp from './synthArp.js';
import createPercussion from './percussion.js';
import createSynthBass from './synthBass.js';

class SynthianoTester {
    constructor() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = 0.8;
            this.masterGain.connect(this.audioContext.destination);
            this.activeComponents = {};
            console.log('Audio context initialized successfully');
        } catch (error) {
            console.error('Failed to initialize audio:', error);
            throw error;
        }
    }

    async testComponent(componentName) {
        try {
            console.log(`Attempting to play ${componentName}`);
            
            // Ensure audio context is running
            if (this.audioContext.state !== 'running') {
                console.log('Resuming audio context...');
                await this.audioContext.resume();
            }

            // Stop if already playing
            if (this.activeComponents[componentName]) {
                console.log(`Stopping ${componentName}`);
                this.activeComponents[componentName].stop();
                delete this.activeComponents[componentName];
                return;
            }

            let component;
            let creator;

            // Get the appropriate component creator
            switch(componentName) {
                case 'logDrum':
                    creator = createLogDrum;
                    break;
                case 'synthPad':
                    creator = createSynthPad;
                    break;
                case 'synthArp':
                    creator = createSynthArp;
                    break;
                case 'percussion':
                    creator = createPercussion;
                    break;
                case 'synthBass':
                    creator = createSynthBass;
                    break;
                default:
                    throw new Error(`Unknown component: ${componentName}`);
            }

            // Create and initialize component
            if (creator) {
                try {
                    component = creator(this.audioContext);
                    if (!component || !component.output || !component.start || !component.stop) {
                        throw new Error(`Invalid component structure for ${componentName}`);
                    }
                    component.output.connect(this.masterGain);
                    component.start();
                    this.activeComponents[componentName] = component;
                    console.log(`${componentName} started successfully`);
                } catch (err) {
                    console.error(`Failed to initialize ${componentName}:`, err);
                    throw err;
                }
            }
        } catch (error) {
            console.error(`Error playing ${componentName}:`, error);
            throw error;
        }
    }

    stopAll() {
        console.log('Stopping all components');
        Object.entries(this.activeComponents).forEach(([name, component]) => {
            try {
                if (component && typeof component.stop === 'function') {
                    component.stop();
                    console.log(`Stopped ${name}`);
                }
            } catch (error) {
                console.error(`Error stopping ${name}:`, error);
            }
        });
        this.activeComponents = {};
    }
}

export default SynthianoTester;