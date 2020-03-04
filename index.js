

 //primitive - string , number, boolean, symbol
// reference- object,(arrays)
// spl values-null(obj),undefined,not null(NaN)

//-------String methods---------------

let m='subiksha';
//length of string
console.log(m.length)
//output=8
var str1 = "Sri";
var str2 = "subiksha";
var name = str1.concat(str2);
console.log(name)
//`${a} ${b}` another method
//concat res = Srisubiksha
console.log(str2.endsWith("subiksha"))
//endsWith res= true
console.log(str1.includes("Sri"))
//includes res= true
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
var sl=str2.slice(0,4);
console.log(sl)
//returns the sliced value subi
var sp=str2.split("ksha")
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
var h="   hello  you";
console.log(h.trim())
//trims the space in between-hello you

//--------Number Methods------------

let a=15.596;
console.log(a.toFixed(1))
//rounds to one digits 15.6
console.log(performance.memory)
// toExponential(x)
// toString()

