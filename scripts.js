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

const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    console.log('dark mode toggle clicked');
	localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();

  });
}

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

  function showTabContent(tabId, tabType) {
	// Remove active class from all tabs of the specified type
	const tabs = document.querySelectorAll(`.${tabType}`);
	tabs.forEach((tab) => tab.classList.remove("active"));
  
	// Add active class to the clicked tab
	const activeTab = document.querySelector(`.${tabType}[onclick="showTabContent('${tabId}', '${tabType}')"]`);
	if (activeTab) {
	  activeTab.classList.add("active");
	}
  
	// Hide all tab panes of the specified type
	const tabPanes = document.querySelectorAll(`.${tabType}-pane`);
	tabPanes.forEach((pane) => pane.classList.remove("active"));
  
	// Show the selected tab pane
	const activePane = document.getElementById(tabId);
	if (activePane) {
	  activePane.classList.add("active");
	}
  }

// Show or hide the "Back to Top" button based on scroll position
window.addEventListener("scroll", function () {
	const backToTopButton = document.getElementById("back-to-top");
	if (window.scrollY > 200) {
	  backToTopButton.style.display = "block"; // Show the button
	} else {
	  backToTopButton.style.display = "none"; // Hide the button
	}
  });
  
  // Scroll to the top when the "Back to Top" button is clicked
  document.getElementById("back-to-top").addEventListener("click", function () {
	window.scrollTo({
	  top: 0,
	  behavior: "smooth", // Smooth scrolling effect
	});
  });


function filterSkills() {
  const searchInput = document.getElementById("skills-search").value.toLowerCase();

  // If the search input is empty, reset everything
  if (!searchInput) {
    resetTabsAndSkills();
    return; // Exit the function early
  }

  // Select all tab panes and skills
  const allTabPanes = document.querySelectorAll(".skills-tab-pane");
  const allSkills = document.querySelectorAll(".skills-container .skill");

  let matchFound = false;

  allTabPanes.forEach((pane) => {
    const skillsInPane = pane.querySelectorAll(".skill");
    let paneHasMatch = false;

    skillsInPane.forEach((skill) => {
      const skillTitle = skill.querySelector(".skill-title").textContent.toLowerCase();
      if (skillTitle.includes(searchInput)) {
        skill.style.display = "block"; // Show matching skills
        paneHasMatch = true;
        matchFound = true;
      } else {
        skill.style.display = "none"; // Hide non-matching skills
      }
    });

    // Activate the tab pane if it has a match
    if (paneHasMatch) {
      pane.classList.add("active");
      const tabId = pane.id;
      const correspondingTab = document.querySelector(`.skills-tab[onclick*="${tabId}"]`);
      if (correspondingTab) {
        correspondingTab.classList.add("active");
      }
    } else {
      pane.classList.remove("active");
      const tabId = pane.id;
      const correspondingTab = document.querySelector(`.skills-tab[onclick*="${tabId}"]`);
      if (correspondingTab) {
        correspondingTab.classList.remove("active");
      }
    }
  });

  // If no matches are found, reset everything
  if (!matchFound) {
    resetTabsAndSkills();
  }
}

function resetTabsAndSkills() {
  const allTabPanes = document.querySelectorAll(".skills-tab-pane");
  const allSkills = document.querySelectorAll(".skills-container .skill");
  const allTabs = document.querySelectorAll(".skills-tab");

  // Reset all tabs and panes
  allTabPanes.forEach((pane) => {
    pane.classList.remove("active");
    pane.style.display = ""; // Reset display property
  });

  // Reset all skills
  allSkills.forEach((skill) => {
    skill.style.display = "block"; // Show all skills
  });

  // Deactivate all tabs
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Activate the default tab (e.g., the first tab)
  const defaultTab = document.querySelector(".skills-tab");
  const defaultPaneId = defaultTab.getAttribute("onclick").match(/'([^']+)'/)[1];
  const defaultPane = document.getElementById(defaultPaneId);

  if (defaultTab && defaultPane) {
    defaultTab.classList.add("active");
    defaultPane.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
	const searchInput = document.getElementById("skills-search");
  
	// Listen for input changes (including when the "X" button is clicked)
	searchInput.addEventListener("input", () => {
	  filterSkills(); // Call the filterSkills function whenever the input changes
	});
  });