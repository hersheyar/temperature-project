//Temperature Problem

function convertTemp (){
    let temperatureInput = prompt("What is the Temperature: ");


    let scale = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit: ").toUpperCase();
    let convertedTemperature;
    let resultMessage;

    if (scale === "C") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultMessage = `${temperatureInput}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        updateThermometer(temperatureInput, "C");
    } else if (scale === "F") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultMessage = `${temperatureInput}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        updateThermometer(convertedTemperature, "C"); // Use Celsius for thermometer consistency
    } else {
        resultMessage = "Invalid scale entered. Please enter 'C' for Celsius or 'F' for Fahrenheit.";
    }

    document.getElementById("temp").innerHTML = `<p>${resultMessage}</p>`;
}

function updateThermometer(temp, scale) {
    const thermometerFill = document.getElementById("thermometer-fill");
    let fillHeight, color;

    // Convert temperature to fill height based on Celsius range (0°C to 100°C)
    if (scale === "C") {
        fillHeight = Math.min(Math.max((temp / 100) * 100, 0), 100);
        color = getTemperatureColor(temp);
    } else {
        fillHeight = Math.min(Math.max(((temp - 32) / (212 - 32)) * 100, 0), 100);
        color = getTemperatureColor((temp - 32) * 5/9); // Convert Fahrenheit to Celsius for color consistency
    }

    thermometerFill.style.height = `${fillHeight}%`;
    thermometerFill.style.backgroundColor = color; // Set the color based on temperature
}

function getTemperatureColor(temp) {
    if (temp <= 0) return '#00f';
    if (temp <= 25) return '#0ff';
    if (temp <= 50) return '#ff0';
    if (temp <= 75) return '#ffa500';
    return '#f00';
}
