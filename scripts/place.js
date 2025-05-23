function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const temp = 10;
    const wind = 5;
    const windchillElement = document.getElementById("windchill");
  
    if (temp <= 10 && wind > 4.8) {
      const chill = calculateWindChill(temp, wind);
      windchillElement.textContent = chill.toFixed(1) + " °C";
    } else {
      windchillElement.textContent = "N/A";
    }
  
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("modified").textContent = document.lastModified;
  });
  