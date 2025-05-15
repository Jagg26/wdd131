document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("primary-nav");
  
    hamburger.addEventListener("click", () => {
      const isVisible = nav.style.display === "flex";
      nav.style.display = isVisible ? "none" : "flex";
      hamburger.innerHTML = isVisible ? "&#9776;" : "&times;";
    });
  });