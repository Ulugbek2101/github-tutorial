"use strict";

const numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");

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


console.log(numberOfSeries);