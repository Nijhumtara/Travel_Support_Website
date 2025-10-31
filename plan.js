const backLink = document.getElementById("back_link");
const backIcon = document.getElementById("back-icon");

// Get previous page info from localStorage
const previousPage = localStorage.getItem("previousPage");

function goBack() {
  if (previousPage === "home") {
    // If came from home
    window.location.href = "index.html";
  } else if (previousPage === "travel") {
    // If came from travel section inside home page
    window.location.href = "index.html";
  } else {
    // Default fallback if nothing found
    window.history.back();
  }
}

// Add event to both icon and link
backLink.addEventListener("click", goBack);
backIcon.addEventListener("click", goBack);
