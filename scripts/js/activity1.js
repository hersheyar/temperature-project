/* --------For loop---------------

for (initialization; condition; update) {
    // Code to execute in each iteration
}
*/

/*function byTwoTable() {
    const two = 2;
    let result = '';
    for (let i = 0; i <= 10; i++) {
        result += `${two} * ${i} = ${two * i}<br>`;
    }
    document.write(result);
}
byTwoTable();*/

/*for(let i=0; i<4; i++){
    document.write("My for loop is working!<br>")
}*/

/*for(let i = 2; i < 21; i+=2){
    document.write(`${i}<br>`);
}*/

/*function TwoByTwo() {
    const num = 5;
    let result = "" ;
    for (let i = 0; i <= 10; i++) {
        result += `${num} x ${i} = ${two * i}<br>`;
    }
    document.write(result);
}
TwoByTwo();*/

let students = ["jose","Micheal","Samson","Kit","Angel","Jonathan","Andrew"];
let ages =[22,35,20,43,37,33,27];

for(let i = 0; i < students.length; i++ ){
    document.getElementById("studentList").innerHTML+=`
    <tr>
        <td>${i+1}</td>
        <td>${students[i]}</td>
        <td>${ages[i]}</td>
    </tr>`;
}


