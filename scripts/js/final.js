function convertTemp() {
    let scale = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit: ").toUpperCase();
    let startTemp = parseFloat(prompt("Enter the starting temperature:"));
    let endTemp = parseFloat(prompt("Enter the ending temperature:"));
    let resultMessage = "";

    if (isNaN(startTemp) || isNaN(endTemp)) {
        resultMessage = "Please enter valid numbers for both the starting and ending temperatures.";
    } else {
        resultMessage = `Temperature conversions from ${startTemp}°${scale} to ${endTemp}°${scale}:<br>`;

        // Determine coldest and hottest temperatures in the range
        let coldTemp = Math.min(startTemp, endTemp);
        let hotTemp = Math.max(startTemp, endTemp);

        for (let temp = startTemp; temp <= endTemp; temp += 2) {
            let convertedTemperature;

            if (scale === "C") {
                convertedTemperature = (temp * 9 / 5) + 32;
                resultMessage += `${temp}°C = ${convertedTemperature.toFixed(2)}°F<br>`;
            } else if (scale === "F") {
                convertedTemperature = (temp - 32) * 5 / 9;
                resultMessage += `${temp}°F = ${convertedTemperature.toFixed(2)}°C<br>`;
            } else {
                resultMessage = "Invalid scale entered. Please enter 'C' for Celsius or 'F' for Fahrenheit.";
                break;
            }
        }

        // Update both thermometers based on the coldest and hottest temperatures
        updateThermometers(coldTemp, hotTemp, scale);
    }

    document.getElementById("temp").innerHTML = `<p>${resultMessage}</p>`;
}

function updateThermometers(coldTemp, hotTemp, scale) {
    const coldThermometerFill = document.getElementById("cold-thermometer-fill");
    const hotThermometerFill = document.getElementById("hot-thermometer-fill");

    let coldFillHeight, hotFillHeight, coldColor, hotColor;
    const minFillHeight = 5;  // Minimum fill height percentage to ensure visibility

    // Set fill heights and colors based on the Celsius range (0°C to 100°C)
    if (scale === "C") {
        coldFillHeight = Math.min(Math.max((coldTemp / 100) * 100, minFillHeight), 100);
        hotFillHeight = Math.min(Math.max((hotTemp / 100) * 100, minFillHeight), 100);
        coldColor = getTemperatureColor(coldTemp);
        hotColor = getTemperatureColor(hotTemp);
    } else {
        coldFillHeight = Math.min(Math.max(((coldTemp - 32) / (212 - 32)) * 100, minFillHeight), 100);
        hotFillHeight = Math.min(Math.max(((hotTemp - 32) / (212 - 32)) * 100, minFillHeight), 100);
        coldColor = getTemperatureColor((coldTemp - 32) * 5 / 9); // Convert to Celsius for color
        hotColor = getTemperatureColor((hotTemp - 32) * 5 / 9);   // Convert to Celsius for color
    }

    coldThermometerFill.style.height = `${coldFillHeight}%`;
    coldThermometerFill.style.backgroundColor = coldColor;

    hotThermometerFill.style.height = `${hotFillHeight}%`;
    hotThermometerFill.style.backgroundColor = hotColor;
}

function getTemperatureColor(temp) {
    if (temp <= -20) return '#0033cc';
    if (temp <= 0) return '#00f';
    if (temp <= 10) return '#33ccff';
    if (temp <= 20) return '#00ffff';
    if (temp <= 30) return '#0ff';
    if (temp <= 40) return '#99ff99';
    if (temp <= 50) return '#ff0';
    if (temp <= 60) return '#ffcc00';
    if (temp <= 70) return '#ffa500';
    if (temp <= 80) return '#ff6600';
    if (temp <= 90) return '#ff3300';
    if (temp <= 100) return '#f00';
    return '#990000';
}
