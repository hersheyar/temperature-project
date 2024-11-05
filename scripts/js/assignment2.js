//Temperature Problem

function convertTemp (){
    let temperatureCelsius = prompt("What is the Temperature in Celsius: ");
    let fahrenheit = temperatureCelsius * 9/5 + 32;

    document.getElementById("temp").innerHTML =`<p> ${fahrenheit} </p>`;
}
