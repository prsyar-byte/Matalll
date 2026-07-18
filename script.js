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


// ===== Live Dollar Price =====

const API_URL =
"https://dollar-api.dzhwar19999.workers.dev/";


async function getDollarPrice(){

try{

const response = await fetch(API_URL);

const data = await response.json();


// فرۆشتن (نرخی سەرەکی)

const price = document.getElementById("price");

if(price){

price.textContent =
data.sell.toLocaleString()+" د.ع";

}


// کڕین و فرۆشتن

const changeText =
document.getElementById("change");


if(changeText){

changeText.innerHTML =

"🟢 کڕین: "+
data.buy.toLocaleString()+
" د.ع<br><br>"+

"🔴 فرۆشتن: "+
data.sell.toLocaleString()+
" د.ع";

}


}catch(error){

console.log(error);

}

}


getDollarPrice();

setInterval(getDollarPrice,60000);
// =====================
// Menu
// =====================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if(menuBtn && sideMenu){

menuBtn.onclick = function(){

sideMenu.classList.toggle("active");

}

}


// =====================
// Dark Mode
// =====================

function darkMode(){

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

}


if(localStorage.getItem("darkMode") === "true"){

document.body.classList.add("dark");

}


// =====================
// Language System
// =====================

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

settingsText:"ڕێکخستن",
languageText:"گۆڕینی زمان",

alertTitle:"ئاگادارکردنەوە",
alertDesc:"کاتێک نرخ گەیشتە ئەم بڕە ئاگادارت دەکەینەوە",
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

settingsText:"Settings",
languageText:"Change Language",

alertTitle:"Notifications",
alertDesc:"You will be notified when the price reaches this value.",
alertBtn:"Save",
alertPlaceholder:"Enter dollar price"

},


ar:{

home:"الرئيسية",
chart:"الرسم البياني",
gold:"الذهب",
more:"المزيد",

appTitle:"💵 Dollar IQ",
rateText:"سعر 100 دولار",

convertText:"تحويل العملات",
currencyBoxText:"العملات",
goldPriceText:"سعر الذهب",
chartBoxText:"الرسم البياني",
newsText:"الأخبار",
alertText:"التنبيهات",
calculatorText:"الحاسبة",
settingsBoxText:"الإعدادات",

settingsText:"الإعدادات",
languageText:"تغيير اللغة",

alertTitle:"التنبيهات",
alertDesc:"سيتم إشعارك عند وصول السعر إلى هذه القيمة.",
alertBtn:"حفظ",
alertPlaceholder:"أدخل سعر الدولار"

}

};
// =====================
// Change Language
// =====================

function changeLanguage(lang){

let t = languages[lang];

if(!t) return;


let texts = {

homeText2:t.home,
chartText2:t.chart,
goldText2:t.gold,
moreText:t.more,

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

settingsText:t.settingsText,
languageText:t.languageText,

alertTitle:t.alertTitle,
alertDesc:t.alertDesc,
alertBtn:t.alertBtn

};


for(let id in texts){

let el = document.getElementById(id);

if(el){

el.textContent = texts[id];

}

}


const input = document.getElementById("alertPrice");

if(input){

input.placeholder = t.alertPlaceholder;

}


localStorage.setItem("lang",lang);

}


// =====================
// Load Language
// =====================

window.onload = function(){

let lang =
localStorage.getItem("lang") || "ku";

changeLanguage(lang);

};
// =====================
// About Button
// =====================

const aboutBtn = document.getElementById("aboutBtn");
const aboutPage = document.getElementById("aboutPage");


if(aboutBtn && aboutPage){

aboutBtn.onclick = function(){

    if(aboutPage.style.display === "block"){

        aboutPage.style.display = "none";

    }else{

        aboutPage.style.display = "block";

    }

};

}