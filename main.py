import os
import time
import telebot
import requests
from bs4 import BeautifulSoup

# لێرەدا تۆکنی بۆتەکەت دابنێ
API_TOKEN = '8723540558:AAHZUcMsNs4A27pQgg5aOZiG4jUx4cJ6Iwg'
bot = telebot.TeleBot(API_TOKEN)

# لۆگینی سەرەکی سایتەکە
TARGET_URL = "https://baxawan.com/"

@bot.message_handler(commands=['start'])
def send_welcome(message):
    welcome_text = (
        "سڵاو لە بۆتی ئۆتۆماتیکی باخەوان چات!\n\n"
        "بۆ داخلکردنی ناوەکان، لیستەکە بەم شێوازە بنێرە:\n"
        "Name, Gender, Day, Month, Year\n\n"
        "بۆ نموونە:\n"
        "Ahmad, Male, 15, 6, 1998\n"
        "Shanya, Female, 1, 1, 2000"
    )
    bot.reply_to(message, welcome_text)

@bot.message_handler(func=lambda message: True)
def handle_guest_logins(message):
    lines = message.text.split('\n')
    bot.reply_to(message, f"دەستکرا بە پرۆسەی داخلکردنی {len(lines)} ناو...")
    
    # دروستکردنی Session بۆ هێشتنەوەی پەیوەندی بە یەک ئایپی
    session = requests.Session()
    
    success = 0
    failed = 0
    
    for line in lines:
        if not line.strip():
            continue
        try:
            # جیاکردنەوەی زانیاری دەقەکە
            parts = [p.strip() for p in line.split(',')]
            if len(parts) < 5:
                bot.send_message(message.chat.id, f"❌ ئەم دێڕە کێشەی هەیە: {line}")
                continue
                
            username, gender, day, month, year = parts
            
            # گۆڕینی ڕەگەز بۆ شێوازی فۆرمی سایتەکە (نێر یان مێ)
            gender_val = "1" if gender.lower() == "male" else "2"
            
            # داتای ناردن بۆ فۆرمی سایتەکە
            payload = {
                'name': username,
                'gender': gender_val,
                'day': day,
                'month': month,
                'year': year,
                'guest_login': '1' # ئەمە پێویستە بۆ لۆگینی وەک میوان
            }
            
            # ناردنی داواکاری لۆگین
            headers = {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36'
            }
            response = session.post(TARGET_URL, data=payload, headers=headers)
            
            # پشکینی ئەوەی داخڵ بووە یان نا
            if response.status_code == 200:
                success += 1
                bot.send_message(message.chat.id, f"✅ ناوەکە سەرکەوتووانە داخڵ بوو: {username}")
            else:
                failed += 1
                bot.send_message(message.chat.id, f"❌ کێشە لە داخلبوونی ئەم ناوە هەیە: {username}")
                
            # چاوەڕوانی کەمێک کات بۆ ئەوەی سایتەکە بلۆکت نەکات
            time.sleep(2)
            
        except Exception as e:
            failed += 1
            bot.send_message(message.chat.id, f"⚠️ هەڵەیەک ڕوویدا بۆ: {line}\nهەڵەکە: {str(e)}")
            
    bot.send_message(message.chat.id, f"📊 کۆتایی هات!\nسەرکەوتوو: {success}\nشکستخواردوو: {failed}")

# بەگەڕخستنی بۆتەکە
print("بۆتەکە ئێستا کار دەکات...")
bot.polling()


