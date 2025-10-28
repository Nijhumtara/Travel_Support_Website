const navBar = document.querySelector("#nav_bar");
const logo = document.querySelector("#logo");
const travelDropDownIcon = document.querySelector("#travelDropDownIcon");
const navOptions = document.querySelector("#nav_options");
const travelLink = document.querySelector("#travelLink");
const travel_insurance_section = document.querySelector("#travel_insurance_section");

let travelIsOpen = false;

travelLink.addEventListener("click", () => {
  if (!travelIsOpen) {
    logo.src = "travel_logo.png";
    navBar.classList.add("travel_nav_bar");
    travelDropDownIcon.classList.add("rotate");
    navOptions.classList.add("travel_nav_bar_link");
    travel_insurance_section.style.display = "block";
    travelIsOpen = true;
  }
  else{
    logo.src = "logo.png";
    navBar.classList.remove("travel_nav_bar");
    travelDropDownIcon.classList.remove("rotate");
    navOptions.classList.remove("travel_nav_bar_link");
    travel_insurance_section.style.display = "none";
    travelIsOpen = false;
  }
});
