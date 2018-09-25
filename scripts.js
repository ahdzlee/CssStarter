function dropdownMenu() {
  var navbarDropdown = document.getElementById('navbarDropdown');
  if (navbarDropdown.className === 'topnav') {
    // change topnav to topnav.responsive
    navbarDropdown.className += ' responsive';
  } else {
    navbarDropdown.className = 'topnav';
  }
}
