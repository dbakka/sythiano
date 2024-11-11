# Synthiano 🎹 🌊

Synthiano is a web-based sound synthesis engine that fuses Amapiano and Synthwave elements into a unique sonic experience. The project aims to create a bridge between African rhythms and retro-futuristic soundscapes, specifically designed for fitness and movement.

## Features ✨

- **Log Drum Synthesis**: Authentic Amapiano-style bass engine
- **Synthwave Pads**: Rich, atmospheric synthesizer pads
- **Arpeggiator**: Dynamic melodic patterns
- **Hybrid Percussion**: Fusion of electronic and traditional rhythms
- **Bass Engine**: Deep, powerful bass synthesis
- **Real-Time Control**: Interactive sound manipulation
- **Web Audio API**: Modern web audio technology

## Demo 🎵

Try the live demo: [Synthiano Web Demo](https://dbakka.github.io/sythiano)

## Technical Stack 🛠

- Web Audio API
- Vanilla JavaScript
- HTML5
- CSS3
- ES6 Modules

## Getting Started 🚀

### Prerequisites

- Modern web browser (Chrome/Firefox recommended)
- Local development server (e.g., Live Server)

### Installation

1. Clone the repository
```bash
git clone https://github.com/dbakka/sythiano.git
```

2. Navigate to project directory
```bash
cd sythiano
```

3. Open with a local server
```bash
# Using VS Code Live Server
# Or any other local server of your choice
```

### Usage

1. Open the application in your browser
2. Click individual sound components to activate
3. Experiment with different combinations
4. Use 'Stop All' to reset

## Project Structure 📁

```
sythiano/
├── src/
│   ├── components/
│   │   ├── logDrum.js     # Amapiano bass engine
│   │   ├── synthPad.js    # Atmospheric pads
│   │   ├── synthArp.js    # Arpeggiator
│   │   ├── percussion.js  # Rhythm section
│   │   └── synthBass.js   # Bass synthesis
│   ├── test.js           # Component testing
│   └── index.html        # Main interface
└── README.md
```

## Sound Components 🎛

### Log Drum
- Amapiano-style bass
- Adjustable pitch and resonance
- Dynamic envelope shaping

### Synth Pad
- Rich stereo field
- Multiple oscillators
- Built-in effects

### Arpeggiator
- Customizable patterns
- Tempo synchronization
- Scale-based note selection

### Percussion
- Hybrid rhythm generation
- Traditional and electronic elements
- Pattern sequencing

### Bass Engine
- Deep sub frequencies
- Filter modulation
- Dynamic compression

## Development 👨‍💻

### Adding New Components

1. Create new component file in `src/components/`
2. Follow existing component structure:
```javascript
const createComponent = (audioContext) => {
    return {
        output: gainNode,
        start() {
            // Start logic
        },
        stop() {
            // Stop logic
        }
    };
};
```
3. Import and add to test.js

### Testing

Currently using manual testing through the web interface. Automated tests coming soon.

## Future Plans 🔮

- [ ] Additional sound components
- [ ] Visual feedback system
- [ ] MIDI support
- [ ] Preset system
- [ ] Mobile optimization
- [ ] Advanced modulation options
- [ ] Pattern sequencer
- [ ] Effect processing

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments 🙏

- Inspired by Amapiano music culture
- Synthwave aesthetic and sound design
- Web Audio API community
- Modern music production techniques

## Contact 📫
Check out my twitter or Linkedin

Project Link: [https://github.com/dbakka/sythiano](https://github.com/dbakka/sythiano)

---

Made with ❤️ for music and code