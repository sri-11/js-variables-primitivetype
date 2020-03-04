

 //primitive - string , number, boolean, symbol
// reference- object,(arrays)
// spl values-null(obj),undefined,not null(NaN)

//-------String methods---------------

let m='subiksha';
//length of string

console.log(m.length)
//output=

let str1 = "Sri";
let str2 = "subiksha";
let name = str1.concat(str2);

console.log(name)
//`${a} ${b}` another method
//concat res = Srisubiksha

console.log(str2.endsWith("subiksha"))
//endsWith res= true

console.log(str1.includes("Sri"))
//includes res=true

console.log(str1.indexOf('i'))
//2 based on the index val

console.log(str2.lastIndexOf("a"))
//lastindex val is 7

console.log(str1.repeat(3))
// string repeated as per  the given number

console.log(str1.replace("Sri","Goodgirl"))
//   to replace same char /i{char)/g 
//      case sensitive letters /(char)/i 
//replacing string value Sri-Goodgirl

console.log(str1.search("i"))
//returns the position of Sri-2

let sl=str2.slice(0,4);
console.log(sl)
//returns the sliced value subi

let sp=str2.split("ksha")
console.log(sp)
//string split to subi

console.log(str1.startsWith("Sri"))
// True - string starts with Sri

console.log(str2.substr(0,4))
//returns subi based on the substr values 

console.log(str1.substring(0,3))
//returns sri based on the substring values

console.log(str1.toLowerCase())
//sri -lowercase

console.log(str1.toUpperCase())
//SRI - uppercase

let h="   hello  you";
console.log(h.trim())
//trims the space in between-hello you

//-----------------------------------------------------------------

                //--------Number Methods------------

let a=15.596;
let b=15;
console.log(a.toFixed(1))
//rounds to one digit 15.6 output

console.log(performance.memory)//memory heap

let number =15.0596;
console.log(number.toExponential())
//converts to exponential notation-1.50596e+1 output

console.log(b.toString(16))
//coverts to hexavalue of 16-f as output


//-----------------------------------------------------------------

                //--------Global Methods------------

let a="Hello Js";
console.log(a)
//Displays the result stored in a variable.-Hello Js output

console.info(a)
//press f12 to see the info

console.warn(a)
//displays the result with a warning in yellow
 
 console.error(a)
 //displays the result with an error in red

console.table(["Panda", "cute", "Boi"]);
//displays the result in a table

//alert("panda yo cutie");
//displays an alert box with the given string 

// let box1=prompt("Panda","Good boi");
// console.log(box1)

// confirm("panda too much of cuteness!!!!");

let f="Shrek";
console.log(Number(f))
// tries to convert string to number which is null

console.log(isNaN(f))
//checks whether the given value is not a number-true-output

let s=("15.0596")
console.log(parseFloat(s))
//Converts a string to a floating-point number.

let j=("15")
console.log(parseInt(s))
//Converts a string to an integer.

let l=15;
console.log(String(l))
//coverts a integer to a string

console.log(Boolean(l))
//returns true if it is boolean


//-----------------------------------------------------------------