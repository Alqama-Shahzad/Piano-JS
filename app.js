// Object mapping keys to audio file paths
let keyPiano = {
    1: "audio/1.mp3",
    2: "audio/2.mp3",
    3: "audio/3.mp3",
    4: "audio/4.mp3",
    5: "audio/5.mp3",
    6: "audio/6.mp3",
    7: "audio/7.mp3",
    8: "audio/8.mp3",
    9: "audio/9.mp3",
    0: "audio/10.mp3",
    a: "audio/a.mp3",
    b: "audio/b.mp3",
    c: "audio/c.mp3",
    d: "audio/d.mp3",
    e: "audio/e.mp3",
    f: "audio/f.mp3",
    g: "audio/g.mp3",
  };
  
  // Add an event listener for keydown events
  document.addEventListener("keydown", (event) => playPiano(event.key));
  
  // Function to play the corresponding piano sound
  function playPiano(key) {
    // Create a new audio object and play the sound
    let audio = new Audio(keyPiano[key]);
    audio.play();
  
    // Select the element corresponding to the key
    let keyClick = document.querySelector(`[data-key="${key}"]`);
  
    // Add the 'active' class to the element
    keyClick.classList.add('active');
  
    // Remove the 'active' class after 500 milliseconds
    setTimeout(() => {
      keyClick.classList.remove('active');
    }, 500);
  }
  
  // Add event listeners for click and touch events on each piano key
document.querySelectorAll('.key').forEach((keyElement) => {
    keyElement.addEventListener('click', () => {
      let key = keyElement.getAttribute('data-key');
      playPiano(key);
    });
  
    keyElement.addEventListener('touchstart', () => {
      let key = keyElement.getAttribute('data-key');
      playPiano(key);
    });
  });