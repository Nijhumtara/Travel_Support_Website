// Functionality for travel_insurance page

const navBar = document.querySelector("#nav_bar");
const logo = document.querySelector("#logo");
const travelDropDownIcon = document.querySelector("#travelDropDownIcon");
const navOptions = document.querySelector("#nav_options");
const travelLink = document.querySelector("#travelLink");
const travel_insurance_section = document.querySelector("#travel_insurance_section");

let travelIsOpen = false;

// Build functionality and include add necessary classes

travelLink.addEventListener("click", () => {
  if (!travelIsOpen) {
    logo.src = "travel_logo.png";
    navBar.classList.add("travel_nav_bar");
    travelDropDownIcon.classList.add("travel_rotate");
    navOptions.classList.add("travel_nav_bar_link");
    travel_insurance_section.style.display = "block";
    travelIsOpen = true;
  }
  else{
    logo.src = "logo.png";
    navBar.classList.remove("travel_nav_bar");
    travelDropDownIcon.classList.remove("travel_rotate");
    navOptions.classList.remove("travel_nav_bar_link");
    travel_insurance_section.style.display = "none";
    travelIsOpen = false;
  }
});

const blackPart = document.querySelector('#black-part');
const infoContainer = document.querySelector("#info_container");

travelLink.addEventListener('click', () => {
  // get actual rendered height of infoContainer (number)
  const infoHeight = infoContainer.offsetHeight;

  if (infoHeight < 430) {
    blackPart.style.height = "482.5px";
  }
  else if (infoHeight < 455) {
    blackPart.style.height = "510px";
  } 
  else {
    blackPart.style.height = "543.5px";
  }
});
