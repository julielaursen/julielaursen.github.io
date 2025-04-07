//
// Menu button 
//

function openNav() {
    document.getElementById("myNav").style.width = "100%"
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%"
  }
  
//
//    The Dark Mode System
//

function enableDarkMode() {
	document.body.classList.add('dark-mode');
	const header = document.querySelector('.site-header');
	if (header) {
	  header.classList.add('dark-mode');
	}
	localStorage.setItem('theme', 'dark');
}
function disableDarkMode() {
	document.body.classList.remove('dark-mode');
	const header = document.querySelector('.site-header');
	if (header) {
	  header.classList.remove('dark-mode');
	}
	localStorage.setItem('theme', 'light');
}

// determines a new users dark mode preferences
function detectColorScheme() {
	// default to the light theme
	let theme = 'light';

	// check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	// if it's not there, check to see if the user has applied dark mode preferences themselves in the browser
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	// if there is no preference set, the default of light will be used. apply accordingly
	theme === 'dark' ? enableDarkMode() : disableDarkMode();
}

// run on page load
detectColorScheme();

// add event listener to the dark mode button toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    console.log('dark mode toggle clicked');
	// on click, check localStorage for the dark mode value, use to apply the opposite of what's saved
	localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
});


document.addEventListener("DOMContentLoaded", function () {
	const words = document.querySelectorAll(".word-carousel .word");
	let currentIndex = 0;

	function showNextWord() {
	  words[currentIndex].classList.remove("active");
	  currentIndex = (currentIndex + 1) % words.length;
	  words[currentIndex].classList.add("active");
	}

	// Initially show the first word
	words[currentIndex].classList.add("active");

	// Change word every 3 seconds
	setInterval(showNextWord, 2000);
  });

  /* TAB NAVIGATION */

  function showTabContent(tabId) {
  // Remove active class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => tab.classList.remove('active'));

  // Add active class to the clicked tab
  const activeTab = document.querySelector(`.tab[onclick="showTabContent('${tabId}')"]`);
  activeTab.classList.add('active');

  // Hide all tab panes
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabPanes.forEach((pane) => pane.classList.remove('active'));

  // Show the selected tab pane
  const activePane = document.getElementById(tabId);
  activePane.classList.add('active');
}
