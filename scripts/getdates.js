document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
    var lastModified = document.lastModified;
    document.getElementById("modified").textContent = lastModified;
});

