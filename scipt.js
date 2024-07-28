// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const ball = document.getElementById('ball');
    body.classList.toggle('dark-mode');
    ball.classList.toggle('dark-mode');

    // Store the dark mode preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
      if(document.getElementById('icon').classList.contains ('fa-moon')){
             document.getElementById('icon').classList.replace('fa-moon','fa-sun')
      }else{
              document.getElementById('icon').classList.replace('fa-sun','fa-moon')
      }
}

// Check localStorage for dark mode preference on page load
document.addEventListener('DOMContentLoaded', function () {
    const darkModeStorage = localStorage.getItem('darkMode');
    if (darkModeStorage) {
        const body = document.body;
        const ball = document.getElementById('ball');
        if (darkModeStorage === 'true') {
            // body.classList.add('dark-mode');
            // ball.classList.add('dark-mode');
            let main = document.getElementById('main').style.color = "pink"
         
        } else {
            // body.classList.remove('dark-mode');
            // ball.classList.remove('dark-mode');
             
        }
    }
});