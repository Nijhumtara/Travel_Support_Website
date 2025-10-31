// Run on page load and when window resizes
function handleResponsiveRedirect() {
  const currentPage = window.location.pathname;

  // If screen width is 480px or less and not already on mobile page
  if (window.innerWidth <= 480 && !currentPage.includes("plan_page_for_mobile.html")) {
    window.location.href = "plan_page_for_mobile.html";
  }

  // If screen width is greater than 480px and currently on mobile page
  if (window.innerWidth > 480 && currentPage.includes("plan_page_for_mobile.html")) {
    window.location.href = "plan.html"; // Change this to your main page
  }
}

// Run once on page load
handleResponsiveRedirect();

// Run again whenever the window is resized
window.addEventListener("resize", handleResponsiveRedirect);
