//
// Menu button 
//

function openNav() {
    const nav = document.getElementById("myNav");
    if (nav) {
      nav.style.width = "100%"; // Set the width to 100% to make the overlay visible
    }
  }
  
  function closeNav() {
    const nav = document.getElementById("myNav");
    if (nav) {
      nav.style.width = "0%"; // Set the width to 0% to hide the overlay
    }
  }
    