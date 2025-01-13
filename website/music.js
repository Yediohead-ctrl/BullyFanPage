import WaveSurfer from 'https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js';

// Add the URLs for your .mp3 files here
const audioFiles = {
    waveform1: '', // Replace with the path to your first audio file
    waveform2: '/audio2.mp3', // Replace with the path to your second audio file
};

// Initialize WaveSurfer for each container
const waveforms = {
    waveform1: WaveSurfer.create({
        container: '#waveform1',
        waveColor: '#4F4A85',
        progressColor: '#383351',
        url: audioFiles.waveform1, // Link the first audio file
    }),
    waveform2: WaveSurfer.create({
        container: '#waveform2',
        waveColor: '#4F4A85',
        progressColor: '#383351',
        url: audioFiles.waveform2, // Link the second audio file
    }),
};

// Select all play buttons
const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach(button => {
    button.addEventListener("click", () => {
        const waveformId = button.getAttribute("data-waveform");
        const wavesurfer = waveforms[waveformId];

        // Pause all other WaveSurfers
        Object.values(waveforms).forEach(ws => {
            if (ws !== wavesurfer) {
                ws.pause();
            }
        });

        // Toggle play/pause for the selected WaveSurfer
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            `;
        } else {
            wavesurfer.play();
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6 5h4v14H6zm8 0h4v14h-4z"/>
                </svg>
            `;
        }

        // Update button icon when audio ends
        wavesurfer.on('finish', () => {
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            `;
        });
    });
});