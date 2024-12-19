// Dropdown toggle
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown > a");
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = dropdown.nextElementSibling;
  
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          closeAllSubmenus();
          submenu.style.display = "block";
        }
      });
    });
  
    function closeAllSubmenus() {
      const allSubmenus = document.querySelectorAll(".submenu");
      allSubmenus.forEach((submenu) => {
        submenu.style.display = "none";
      });
    }
  
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
    });
  });