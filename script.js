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



// ===== Dollar Price =====

let dollarPrice = 143900;


function showDollarPrice(){

let price = document.getElementById("price");

if(price){

price.textContent =
dollarPrice.toLocaleString()+" د.ع";

}

}

showDollarPrice();
let oldPrice = dollarPrice;

setInterval(()=>{

let change = Math.floor(Math.random()*200)-100;

dollarPrice += change;

showDollarPrice();

let changeText = document.getElementById("change");

if(changeText){

if(dollarPrice > oldPrice){

changeText.textContent = "⬆️ +" + (dollarPrice-oldPrice) + " د.ع";
changeText.className="up";

}else if(dollarPrice < oldPrice){

changeText.textContent = "⬇️ -" + (oldPrice-dollarPrice) + " د.ع";
changeText.className="down";

}else{

changeText.textContent="⏸ 0 د.ع";

}

}

oldPrice = dollarPrice;

},10000);
// ===== Menu =====

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if(menuBtn && sideMenu){

menuBtn.onclick = function(){

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


if(localStorage.getItem("darkMode") === "true"){

document.body.classList.add("dark");

}
// ===== Language =====

const languages = {

ku:{
home:"سەرەکی",
chart:"گراف",
gold:"زێڕ",
more:"زیاتر",

currencyTitle:"💱 دراوەکان",
dollar:"دۆلار",
baghdad:"بۆرسەی بەغداد",
pound:"پاوەن",
europe:"یۆرۆ",
toman:"تومانی ئێران",
lira:"لیرەی تورکی",
dirham:"دەرهەمی ئیمارات",
saudi:"ڕیالی سعودی",

goldTitle:"🪙 نرخی زێڕ",
gold24:"زێڕی 24 عیار",
gold22:"زێڕی 22 عیار",
gold21:"زێڕی 21 عیار",
gold18:"زێڕی 18 عیار",
ounce:"ئۆنسەی زێڕ",
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
    newsPageTitle:"هەواڵ",
    alertTitle:"ئاگادارکردنەوە",
alertDesc:"کاتێک نرخ گەیشتە ئەم بڕە، ئاگادارت دەکەینەوە",
alertBtn:"پاشەکەوتکردن",
alertPlaceholder:"نرخی دۆلار بنووسە",
},


en:{
home:"Home",
chart:"Chart",
gold:"Gold",
more:"More",

currencyTitle:"💱 Currencies",
dollar:"US Dollar",
baghdad:"Baghdad Market",
pound:"British Pound",
europe:"Euro",
toman:"Iranian Toman",
lira:"Turkish Lira",
dirham:"UAE Dirham",
saudi:"Saudi Riyal",

goldTitle:"🪙 Gold Price",
gold24:"24K Gold",
gold22:"22K Gold",
gold21:"21K Gold",
gold18:"18K Gold",
ounce:"Gold Ounce",
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
newsGold:"🪙 Gold price is monitored",
newsMarket:"📈 Currency market changes",
    newsPageTitle:"News",
    alertTitle:"Notifications",
alertDesc:"You will be notified when the price reaches this value.",
alertBtn:"Save",
alertPlaceholder:"Enter dollar price",
},


ar:{
home:"الرئيسية",
chart:"الرسم البياني",
gold:"الذهب",
more:"المزيد",

currencyTitle:"💱 العملات",
dollar:"الدولار",
baghdad:"بورصة بغداد",
pound:"الجنيه",
europe:"اليورو",
toman:"التومان الإيراني",
lira:"الليرة التركية",
dirham:"الدرهم الإماراتي",
saudi:"الريال السعودي",

goldTitle:"🪙 سعر الذهب",
gold24:"ذهب عيار 24",
gold22:"ذهب عيار 22",
gold21:"ذهب عيار 21",
gold18:"ذهب عيار 18",
ounce:"أونصة الذهب",
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
homeText:"الرئيسية",
languageText:"تغيير اللغة",
    settingsText:"الإعدادات",
    newsTitle:"📰 آخر الأخبار",
newsDollar:"💵 تم تحديث سعر الدولار",
newsGold:"🪙 متابعة سعر الذهب",
newsMarket:"📈 تغيرات سوق العملات",
    newsPageTitle:"الأخبار",
    alertTitle:"التنبيهات",
alertDesc:"سيتم إشعارك عند وصول السعر إلى هذه القيمة.",
alertBtn:"حفظ",
alertPlaceholder:"أدخل سعر الدولار",
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

currencyTitle:t.currencyTitle,
dollarText:t.dollar,
baghdadText:t.baghdad,
poundText:t.pound,
europeText:t.europe,
tomanText:t.toman,
liraText:t.lira,
dirhamText:t.dirham,
saudiText:t.saudi,

goldTitle:t.goldTitle,
gold24Text:t.gold24,
gold22Text:t.gold22,
gold21Text:t.gold21,
gold18Text:t.gold18,
ounceText:t.ounce,

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
    newsPageTitle:t.newsPageTitle,
    alertTitle: t.alertTitle,
alertDesc: t.alertDesc,
alertBtn: t.alertBtn,

};


for(let id in texts){

    let element = document.getElementById(id);

    if(element){
        element.textContent = texts[id];
    }

}

const alertInput = document.getElementById("alertPrice");

if(alertInput){
    alertInput.placeholder = t.alertPlaceholder;
}

localStorage.setItem("lang",lang);

} // ← ئەم } ـە کەمە

// ===== Load Saved Language =====

window.onload = function(){

    let savedLang = localStorage.getItem("lang") || "ku";

    changeLanguage(savedLang);

};
// ===== Settings Box =====

const settingsBtn = document.getElementById("settingsBtn");
const settingsPage = document.getElementById("settingsPage");

if(settingsBtn && settingsPage){

settingsBtn.onclick = function(){

if(settingsPage.style.display === "block"){
    settingsPage.style.display = "none";
}else{
    settingsPage.style.display = "block";
}

}

}