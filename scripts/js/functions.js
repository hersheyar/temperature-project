// -------------------------Functions------------------------;
//function multiplyThree(num){
//    return num * 3;
//}
//console.log(multiplyThree(4));
//console.log(multiplyThree(6));
//console.log(multiplyThree(5));
//
//function sum(num1,num2){
//    return num1 + num2;
//}
//let result1 = sum(10,3);
//console.log(result1);
//
//
//let sum2 = function(){
//    console.log(3+3);
//}
//sum2();
//
//let total = 0;
//let productName = prompt("Enter the product Name:")
//let productPrice = prompt("Enter the product Price:")
//
//function addCart(price){
//    total = total + price;
//    return total;
//}
//
//total = addCart(productPrice);
//
//function calculateTaxes(total){
//    return 1.11 * total;
//}
//
//document.write("<p>" + productName + " " + calculateTaxes(total).toFixed(2) + "</p>");


function doubleNumber(num){
    return num * 2;
}

console.log(doubleNumber(10));
console.log(doubleNumber(5));


function combineNames(firstName = 'Unknown', lastName = 'Unknown'){
    return firstName + " " + lastName
}

console.log(combineNames("Andrew","Hershey"));
console.log(combineNames("Andrew",));
console.log(combineNames());


function convertToSeconds(minutes) {
    console.log(minutes * 60);
}
convertToSeconds(5);
convertToSeconds(10);

function addProduct(){
    let prodName = prompt("Enter the product name: ");

    document.getElementById("list").innerHTML +=`<p> ${prodName} </p>`;
}