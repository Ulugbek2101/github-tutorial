"use strict";

/* const numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");

const seriesDB = {
    count: numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    privat: false,
};

const a = prompt("Oxirgi ko'rgan serialgiz?"),
      b = prompt("Nechi baho berasiz"),
      c = prompt("Oxirgi ko'rgan serialgiz?"),
      d = prompt("Nechi baho berasiz");

seriesDB.series[a]=b;
seriesDB.series[c]=d;


console.log(numberOfSeries); */

// const age = +prompt("How old are you?", "");

// if (age>25) {
//     console.log("Horror films");
// } else if(age>18 && age<25) {
//     console.log("Boyevik films");
// } else {
//     console.log("Carton");
// }

// (age>25) ? console.log("Horror films") : console.log("Carton")

// const color = "green";

// switch(color){
//     case "red":
//         console.log("Stop");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     case "yellow":
//         console.log("Slowly");
//         break;
//     default:
//         console.log("Traffic jam");
// }

// let a=1;

// while (a<100){
//     console.log(a);
//     a++;
// }

// let a=1;

// do {
//     console.log(a);
//     a++;
// }
// while(a<=100);

// let a=1;

// for(a=1; a<=10; a++){
//     console.log(a);
// }

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");

// const seriesDB = {
//     count: numberOfSeries,
//     series:{},
//     actors:{},
//     genres:[],
//     privat: false,
// };
 

// for(let i=0; i<2; i++ ){
//     const a = prompt("Oxirgi ko'rgan serialgiz?"),
//       b = prompt("Nechi baho berasiz");
//     if( a != null && b != null && a !=" " && b != ""){
//         seriesDB.series[a]=b;
//         console.log("Done");
//     } else{
//         console.log("Error");
//         i--;
//     }   
// }

// if(seriesDB.count<5){
//  console.log("Kam serial ko'ribsiz");
// }else if(seriesDB.count >=5 && seriesDB.count < 10){
//     console.log("Siz classik tomoshabin ekansiz");
// }else{
//     console.log("Siz serialchi zvezda ekansiz");
// }

// console.log(seriesDB);


// 26.01.2023

//  function declaration
function sayHello(text){
    console.log(text);
}

sayHello("Hello world");


function calc(a, b){
    return a+b;
}

console.log(calc(20, 5));

// function expression
const  logger = function(a, b){
    return a+b;
};

console.log(logger(12, 7));

// Arrow function 
const   calc = (a, b) => a+b;

console.log(calc(12, 10));
