
// Design dropdownMenu to Choose country to travel

const countryList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", 
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", 
  "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominica", "Ecuador",
  "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Greenland", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Singapore",
  "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tunisia", "Turkey",
  "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Include all countries to the list

const destList = document.querySelector("#destinationList");
countryList.forEach((dest) => {
  const li = document.createElement('li');
  li.textContent = dest;
  destList.append(li);
});

const dropdownSelect = document.getElementById('dropDownSelect');
const dropdownMenu = document.getElementById('dropdown_menu');
const searchInput = document.getElementById('searchInput');
const notFound = document.getElementById('notFound');
const selectedItems = document.getElementById('selectedItems');
const optionList = document.getElementById('destinationList'); // matches your destList id
const dropDownIcon = document.getElementById('dropDownIcon');

let selectedDestinations = [];

// Read all countries that were added dynamically
let allDestinations = Array.from(optionList.querySelectorAll('li')).map(li => li.textContent);

// Toggle dropdown open/close
dropdownSelect.addEventListener('click', () => {
  const isOpen = dropdownMenu.style.display === 'block';
  dropdownMenu.style.display = isOpen ? 'none' : 'block';
  dropdownSelect.classList.toggle('open', !isOpen);
  searchInput.removeAttribute('readonly');
  searchInput.focus();
});

// Rotate Drop Down Icon 
searchInput.addEventListener('focus', () => {
  dropDownIcon.classList.add('rotate');
});

searchInput.addEventListener('input', () => {
  dropDownIcon.classList.add('rotate');
});

searchInput.addEventListener('blur', () => {
  dropDownIcon.classList.remove('rotate');
});

// Filter countries as user types
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  optionList.innerHTML = '';
  let matched = [];
  let unmatched = [];

  allDestinations.forEach(dest => {
    if (dest.toLowerCase().includes(filter)) matched.push(dest);
    else unmatched.push(dest);
  });

  if (matched.length === 0 && filter !== '') {
    const destHeading = document.querySelector('#destinationHeading');
    destHeading.style.display = 'none';
    notFound.style.display = 'block';
  } else {
    notFound.style.display = 'none';

    // show matching countries first
    matched.forEach(dest => {
      const li = document.createElement('li');
      li.textContent = dest;
      optionList.appendChild(li);
    });

    // add a thin divider line between matched & unmatched
    if (matched.length > 0 && unmatched.length > 0 && filter !== '') {
      const hr = document.createElement('hr');
      optionList.appendChild(hr);
    }

    // show remaining countries below
    unmatched.forEach(dest => {
      const li = document.createElement('li');
      li.textContent = dest;
      optionList.appendChild(li);
    });
  }
});

// When user selects a country
optionList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const destination = e.target.textContent;
    if (!selectedDestinations.includes(destination)) {
      selectedDestinations.push(destination);
      addSelectedItem(destination);
    }
  }
});

// Add selected destination tag below input
function addSelectedItem(destination) {
  const span = document.createElement('span');
  span.textContent = destination;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '×';
  removeBtn.onclick = () => {
    span.remove();
    selectedDestinations = selectedDestinations.filter(d => d !== destination);
  };
  span.appendChild(removeBtn);
  selectedItems.appendChild(span);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownSelect.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
    dropdownSelect.classList.remove('open');
    searchInput.setAttribute('readonly', true);
  }
});

// Design leaving for travel date_field and return date_field
const dateTexts = document.querySelectorAll(".DateText");
const dateHiddens = document.querySelectorAll(".DateHidden");

dateTexts.forEach((textInput, index) => {
  const hiddenInput = dateHiddens[index];

  textInput.addEventListener("click", () => {
    hiddenInput.showPicker(); // open native date picker
  });

  hiddenInput.addEventListener("change", () => {
    textInput.value = hiddenInput.value.split("-").reverse().join("/"); // format DD/MM/YYYY
  });
});

// Design Age Section
const ageContainer = document.querySelector('#ageContainer');
const addBox = document.querySelector('#addBox');

// When clicking the "+" box, create a new age input beside it
addBox.addEventListener('click', function() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('age-wrapper');

  const newInput = document.createElement('input');
  newInput.type = 'number';
  newInput.classList.add('age-input');
  newInput.min = '0';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '×';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', () => {
    wrapper.remove(); // remove that input when clicked
  });

  wrapper.appendChild(newInput);
  wrapper.appendChild(removeBtn);

  // Insert before the + box
  ageContainer.insertBefore(wrapper, addBox);
});

// Handle Enter key
ageContainer.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && e.target.classList.contains('age-input')) {
    e.target.blur(); // remove focus
  }
});

// Functionality to go to Third Page

document.getElementById("btn").addEventListener("click", () => {
  localStorage.setItem("previousPage", "home");
  window.location.href = "plan.html";
});

document.getElementById("TI_btn").addEventListener("click", () => {
  localStorage.setItem("previousPage", "travel");
  window.location.href = "plan.html";
});

