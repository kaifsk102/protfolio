
const typingAnimationElement = document.getElementById('typewriter-text');

// Create an array of typing text
const typingTexts = [
  ' Web Developer ',
  ' Programmer' ,
  ' Tech Enthusiast  ',
];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 200); // Increase the delay to slow down the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 200 + 1000); // Add a delay before starting the next text
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);







//Tab Links



function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}







document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    button.classList.toggle('active');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});







document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log({ name, email, message });
});





document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach((bar, index) => {
    
    const dynamicWidth = [90, 80, 90, 80, 85, 80, 75, 80, 80, 75][index]; // Replace with your own dynamic logic

    // Set custom property for animation
    bar.style.setProperty('--progress-width', `${dynamicWidth}%`);
    bar.style.width = `${dynamicWidth}%`;
    bar.style.animation = 'progressAnimation 2s ease-in-out forwards';
  });
});






const menuBtn = document.getElementById('menu-btn'); 
const mobileMenu = document.getElementById('mobile-menu'); 
menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden');
 });