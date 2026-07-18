// =====================
// Dollar IQ script.js
// =====================

// ===== Time =====

function updateTime(){

const time = document.getElementById("time");

if(!time) return;

let now = new Date();

time.textContent =
String(now.getHours()).padStart(2,"0")
+ ":" +
String(now.getMinutes()).padStart(2,"0")
+ ":" +
String(now.getSeconds()).padStart(2,"0");

}

setInterval(updateTime,1000);
updateTime();


// ===== Date =====

function updateDate(){

const date = document.getElementById("date");

if(!date) return;

let now = new Date();

date.textContent =
"📅 "+
now.getDate()+"/"+
(now.getMonth()+1)+"/"+
now.getFullYear();

}

setInterval(updateDate,1000);
updateDate();


// ===== Dollar API =====

const API_URL = "https://dollar-api.dzhwar19999.workers.dev/";


async function getDollarPrice(){

try{

let response = await fetch(API_URL);

let data = await response.json();


let price = document.getElementById("price");

if(price){

price.textContent =
data.sell.toLocaleString()+" د.ع";

}


let change = document.getElementById("change");

if(change){

change.textContent =
"🟢 کڕین: "+
data.buy.toLocaleString()+
" | 🔴 فرۆشتن: "+
data.sell.toLocaleString();

}


}catch(error){

console.log(error);

}

}


getDollarPrice();

setInterval(getDollarPrice,60000);


// ===== Menu =====

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");


if(menuBtn && sideMenu){

menuBtn.onclick=function(){

sideMenu.classList.toggle("active");

}

}
// ===== Dark Mode =====

function darkMode(){

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

}


if(localStorage.getItem("darkMode")=="true"){

document.body.classList.add("dark");

}


// ===== Languages =====

const languages = {

ku:{

home:"سەرەکی",
chart:"گراف",
gold:"زێڕ",
more:"زیاتر",

appTitle:"💵 Dollar IQ",
rateText:"نرخی 100 دۆلار",

convertText:"گۆڕینی دراو",
currencyBoxText:"دراوەکان",
goldPriceText:"نرخی زێڕ",
chartBoxText:"گراف",

newsText:"هەواڵ",
alertText:"ئاگادارکردنەوە",
calculatorText:"حاسبە",
settingsBoxText:"ڕێکخستن",

homeText:"سەرەکی",
languageText:"گۆڕینی زمان",
settingsText:"ڕێکخستن",

newsTitle:"📰 نوێترین هەواڵەکان",
newsDollar:"💵 نرخی دۆلار نوێکرایەوە",
newsGold:"🪙 نرخی زێڕ چاودێری دەکرێت",
newsMarket:"📈 گۆڕانی بازاڕی دراو",

alertTitle:"ئاگادارکردنەوە",
alertDesc:"کاتێک نرخ گەیشتە ئەم بڕە، ئاگادارت دەکەینەوە",
alertBtn:"پاشەکەوتکردن",
alertPlaceholder:"نرخی دۆلار بنووسە"

},


en:{

home:"Home",
chart:"Chart",
gold:"Gold",
more:"More",

appTitle:"💵 Dollar IQ",
rateText:"100 Dollar Rate",

convertText:"Currency Converter",
currencyBoxText:"Currencies",
goldPriceText:"Gold Price",
chartBoxText:"Chart",

newsText:"News",
alertText:"Notifications",
calculatorText:"Calculator",
settingsBoxText:"Settings",

homeText:"Home",
languageText:"Change Language",
settingsText:"Settings",

newsTitle:"📰 Latest News",
newsDollar:"💵 Dollar price updated",
newsGold:"🪙 Gold price monitored",
newsMarket:"📈 Currency market changes",

alertTitle:"Notifications",
alertDesc:"You will be notified when price reaches this value.",
alertBtn:"Save",
alertPlaceholder:"Enter dollar price"

}

};
// ===== Apply Language =====

function changeLanguage(lang){

let t = languages[lang];

if(!t) return;


let texts = {

homeText2:t.home,
chartText2:t.chart,
goldText2:t.gold,
moreText:t.more,

homeText:t.homeText,
chartText:t.chart,
goldText:t.gold,

settingsText:t.settingsText,
languageText:t.languageText,

appTitle:t.appTitle,
rateText:t.rateText,

convertText:t.convertText,
currencyBoxText:t.currencyBoxText,
goldPriceText:t.goldPriceText,
chartBoxText:t.chartBoxText,

newsText:t.newsText,
alertText:t.alertText,
calculatorText:t.calculatorText,
settingsBoxText:t.settingsBoxText,

newsTitle:t.newsTitle,
newsDollar:t.newsDollar,
newsGold:t.newsGold,
newsMarket:t.newsMarket,

alertTitle:t.alertTitle,
alertDesc:t.alertDesc,
alertBtn:t.alertBtn

};


for(let id in texts){

let element=document.getElementById(id);

if(element){

element.textContent=texts[id];

}

}


let input=document.getElementById("alertPrice");

if(input){

input.placeholder=t.alertPlaceholder;

}


localStorage.setItem("lang",lang);

}



// ===== Load Language =====

window.onload=function(){

let savedLang =
localStorage.getItem("lang") || "ku";

changeLanguage(savedLang);

};



// ===== About Page =====

const aboutBtn =
document.getElementById("aboutBtn");

const aboutPage =
document.getElementById("aboutPage");


if(aboutBtn && aboutPage){

aboutBtn.onclick=function(){

aboutPage.style.display =
aboutPage.style.display=="block"
?"none"
:"block";

}

}