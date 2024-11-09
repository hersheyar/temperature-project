//---------Conditions-----------
    //       If Statements in JS
    //         if(condition){
    //            code to be executed if condition is true;
    //         }

if(3>1){
    console.log("I am inside the if statement");
}

// ---------If else statement EX.------------
let isTrue = true;

if(isTrue){
    console.log("Yes");
} else{
    console.log("No");
}

let age = 21;

if(age >= 50){
    console.log("You are and adult!");
} else {
    console.log("You are underage")
}

// -----if-else--------

age = 75;

if(age < 13){
    console.log("I am a child");
} else if(age < 20) {
    console.log("I am a teen");
} else if (age < 64){
    console.log("I am an adult");
} else {
    console.log("I am a senior");
}


let week = new Date().getDay();

if(week == 1){
  console.log("mon");
}else if(week == 2){
    console.log("tue");
}else if(week == 3){
    console.log("wed");
}else if(week == 4){
    console.log("thur");
}else if(week == 5){
    console.log("fri");
}else if(week == 6){
    console.log("sat");
}else if(week == 0){
    console.log("sun");
} else{
    console.log("invalid")
}


//------------ Challenge Movie ticket Price;---------

//let yourAge= prompt("What is your age?");
//
//if(yourAge <= 11){
//    console.log("Your ticket cost $5");
//
//} else if(yourAge >=12 && yourAge <=17){
//    console.log("Your ticket costs $8");
//
//} else if(yourAge >= 18){
//    console.log("Your ticket cost $10");
//
//}else {
//    console.log();
//}
//

function wearClothing(){
    let temp = prompt("Enter the Temperature in Celsius!");
    let clothing;

    if(temp < 15){
        clothing = "Jacket";
        document.getElementById("").classList.add("");
    } else if(temp < 25){
        clothing = "Sweater";
    }else{
        clothing = "T-shirt";
    }

    document.getElementById("").innerHTML="Because of the Temperatue you should wear a " + clothing;
}
