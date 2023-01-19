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

const color = "green";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("GO");
        break;
    case "yellow":
        console.log("Slowly");
        break;
    default:
        console.log("Traffic jam");
}
