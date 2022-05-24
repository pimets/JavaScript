let example = "this is a low quality example";
console.log(example);
console.log(typeof "this is a low quality example");
console.log("I can agree " + example)

function square(number){
    return number * number;
}
console.log(square(5));
let myInt = 35;
let myFloat = 18.21;
console.log(typeof myInt);

const decimals = 1.265985478536698541;
decimals;
const twoDecimals = decimals.toFixed(2);
twoDecimals;
console.log(twoDecimals);

const num1 = 10;
const num2 = 50;
console.log(9 * num1);
console.log(num1 ** 3);
console.log(num1/num2);

let numb4 = 4;
numb4++;
console.log(numb4);

// Data type 
let numOne = 10;
let numTwo = 10;
console.log(numOne == numTwo);

let py = "Python";
let js = "JavaScript";
console.log(py == js);

// Array
let nums = [5, 10, 15];
nums[0] = 33;
console.log(nums);
let numbers = nums;
console.log(numbers == nums);

//strings
let firstName = "Ximena";
let lastName = "Echavarria";
let placeLive = "Montevideo";
let vacationPlace = "the beach";
let space= " ";
let about = firstName+ space + lastName + space + "lives in " + placeLive + space + "and loves going to " + vacationPlace;
console.log(about);


//escape sequence
console.log('hope to see you soon,\n dont you?');
console.log( "Back to that day you said \'I love reading books\'")

let x = 6;
console.log(x += 4);
console.log( x -= 2);
console.log(x /=2);
console.log(x *= 3);

console.log(x);
let y = 6;
console.log(x === y);
console.log(x !== y);
console.log(x < y);
document.write("<br>");
// document.write()
first = "¡Hi Tenalulu!";
second = "how are you?";
frase = first + second;
document.write(frase);
document.write("<br>");
//concat
numerito1 = '53';
numerito2 = 8;
result = numerito1.concat(numerito2);
document.write(result);
document.write("<br>");
//${}
name1 = "Pepe"
activity = `He is ${name1} and he knows the alphabet`;
document.write(activity);
document.write("<br>");
"\n"  
//logical operators
lan1 = 12;
lan2 = 24;
lan3 = 25;
lan4 = 92;
lan5 = 91;

op = (lan5 > lan2 && lan4 < lan3) || (!(lan1 === lan2) || lan3 != lan3);
console.log(op)

// hoisting
console.log(pipo);
var pipo = "shmith";
console.log(pipo);

/* conditional
let nameFirst= "Ximena";
if (nameFirst == "Maria") {
    alert("Your name is Maria");
}
else if (nameFirst = "Ximena"){
    alert("I think that's your second name");
}
else {
    alert("You are an Impostor");
} */

//Array
let pc1 = {
    pcName : "Xime Central",
    pcProcessor : "rayzon 5",
    ram: "16 gb",
    hardDisk : "1 TB",
}
document.write("<br>");
let pcName = pc1["pcName"];
let pcProcessor = pc1["pcProcessor"];
let ram = pc1["ram"];
let hardDisk = pc1["hardDisk"];
let desctiption = `name of may pc is ${pcName}<br> and is has a ${pcProcessor} processor, ${ram} ram, and a hard disk  ${hardDisk}`;
document.write(desctiption);

//loops
for (let step = 0; step < 5; step++) {
    console.log('Walking left one meter');
}
document.write("<br>");
//function
function sayHi(){
    answer = prompt("hi Ximena, how are you?");
    if (answer === "fine"){
        alert("I'm glad");
    } else {
        alert("Oh no! What a pity");
    }
}
sayHi();	
document.write("<br>");

function sum(firstNum, secondNum){
    let res = firstNum + secondNum;
    document.write(res);
    document.write("<br>");
}
sum(38, 45)

//cookies
document.cookie = "my_name=ximena";
function showCookies() {
    const output =
    document.getElementById('cookies')
    output.textContent = 'this is my cookie ' + document.cookie
}

function clearOutputCookies() {
    const output = 
    document.getElementById('cookies')
    output.textContent = ''
}

