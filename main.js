const mobileIcon = document.querySelector(".mobile-dashboard");
mobileIcon.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    console.log("logged");
    const dashboardHeading = document.querySelector(".dashboard-heading");
    const dashboardNav = document.querySelector("nav");
    dashboardHeading.classList.toggle("display-unset");
    dashboardNav.classList.toggle("display-unset");
  }
});
