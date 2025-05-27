# Birthday Website 

A beautiful, interactive two-page website created to celebrate Sanya's birthday and express heartfelt emotions.

## Features

- 🌻 Sunflower-themed design with animated background
- 🎉 Interactive confetti effect on the birthday page
- 💌 Heartfelt birthday and sorry letters
- 🎵 Background music with toggle control
- 📱 Fully responsive design for all devices
- ✨ Smooth animations and transitions
- 🌅 Different themes for each page (day and evening)

## Setup

1. Clone or download this repository
2. Add your background music files:
   - Place `birthday-music.mp3` in the `assets` folder for the birthday page
   - Place `reflective-music.mp3` in the `assets` folder for the sorry page
3. Open `index.html` in a web browser

## File Structure

```
.
├── index.html          # Birthday page
├── sorry.html          # Sorry page
├── styles.css          # Styling and animations
├── script.js           # Interactive features
└── assets/            # Music files
    ├── birthday-music.mp3
    └── reflective-music.mp3
```

## Customization

- To change the background music, replace the audio files in the `assets` folder
- To modify the text content, edit the letter sections in both HTML files
- To adjust the styling, modify the CSS variables in `styles.css`

## Browser Support

The website works best in modern browsers that support:
- CSS Animations
- CSS Grid
- ES6 JavaScript
- Web Audio API

## Notes

- The website uses the canvas-confetti library for the celebration effect
- Google Fonts (Dancing Script and Poppins) are used for typography
- All animations are CSS-based for better performance 
