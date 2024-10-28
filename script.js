const trombaButton1 = document.getElementById('trombaButton1');
const trombaButton2 = document.getElementById('trombaButton2');
const trombaSound1 = document.getElementById('trombaSound1');
const trombaSound2 = document.getElementById('trombaSound2');

trombaButton1.addEventListener('click', () => {
  trombaSound1.currentTime = 0; 
  trombaSound1.play();
});

trombaButton2.addEventListener('click', () => {
  trombaSound2.currentTime = 0; 
  trombaSound2.play();
});
