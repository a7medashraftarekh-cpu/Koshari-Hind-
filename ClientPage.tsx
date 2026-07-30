"use client";

import { useState, useEffect } from "react";

const menu = [
  {n:"علبه ميني",c:"كشري",p:20,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري سوبر",c:"كشري",p:25,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري ميجا",c:"كشري",p:30,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري استرا",c:"كشري",p:35,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري اسبيشيال",c:"كشري",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري هند عائلي",c:"كشري",p:45,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري هند جامبو",c:"كشري",p:50,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"بيتزا سجق (Small)",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/0b3b538a7983166c8a7dee9314e066955f1df579.webp"},
  {n:"بيتزا سجق (Medium)",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/0b3b538a7983166c8a7dee9314e066955f1df579.webp"},
  {n:"بيتزا سجق (Large)",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/0b3b538a7983166c8a7dee9314e066955f1df579.webp"},
  {n:"بيتزا لحمه (Small)",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.thursdaynightpizza.com/89a74525cca0ff10d7229b7ecbad4d36215ce96b.png"},
  {n:"بيتزا لحمه (Medium)",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.thursdaynightpizza.com/89a74525cca0ff10d7229b7ecbad4d36215ce96b.png"},
  {n:"بيتزا لحمه (Large)",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.thursdaynightpizza.com/89a74525cca0ff10d7229b7ecbad4d36215ce96b.png"},
  {n:"بيتزا سوسيس (Small)",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.tasteofhome.com/2bdce269b806fd4c255069e4d9405c0948229e62.jpg"},
  {n:"بيتزا سوسيس (Medium)",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.tasteofhome.com/2bdce269b806fd4c255069e4d9405c0948229e62.jpg"},
  {n:"بيتزا سوسيس (Large)",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.tasteofhome.com/2bdce269b806fd4c255069e4d9405c0948229e62.jpg"},
  {n:"بيتزا برجر (Small)",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/13ebccdbc18fd6fac78b7b80e2862748e21ce5ae.jpg"},
  {n:"بيتزا برجر (Medium)",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/13ebccdbc18fd6fac78b7b80e2862748e21ce5ae.jpg"},
  {n:"بيتزا برجر (Large)",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/13ebccdbc18fd6fac78b7b80e2862748e21ce5ae.jpg"},
  {n:"بيتزا مشروم (Small)",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.gozney.com/331085306643435e6105c63c044eb53e0c496cdf.jpg"},
  {n:"بيتزا مشروم (Medium)",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.gozney.com/331085306643435e6105c63c044eb53e0c496cdf.jpg"},
  {n:"بيتزا مشروم (Large)",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.gozney.com/331085306643435e6105c63c044eb53e0c496cdf.jpg"},
  {n:"بيتزا بسطرمة (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/11a8531bf00ad15ea5951ee2f03c8d64be49d94b.jpg"},
  {n:"بيتزا بسطرمة (Medium)",c:"بيتزا شرقي",p:120,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/11a8531bf00ad15ea5951ee2f03c8d64be49d94b.jpg"},
  {n:"بيتزا بسطرمة (Large)",c:"بيتزا شرقي",p:165,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/11a8531bf00ad15ea5951ee2f03c8d64be49d94b.jpg"},
  {n:"بيتزا سوبر سوبريم (Small)",c:"بيتزا شرقي",p:100,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا سوبر سوبريم (Medium)",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا سوبر سوبريم (Large)",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا مشكل جبن (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/www.inspiredtaste.net/201142907cd8aeac44def5619afc82ded238c124.jpg"},
  {n:"بيتزا مشكل جبن (Medium)",c:"بيتزا شرقي",p:115,i:"https://kimi-web-img.moonshot.cn/img/www.inspiredtaste.net/201142907cd8aeac44def5619afc82ded238c124.jpg"},
  {n:"بيتزا مشكل جبن (Large)",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/www.inspiredtaste.net/201142907cd8aeac44def5619afc82ded238c124.jpg"},
  {n:"بيتزا شاورما فراخ (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شاورما فراخ (Medium)",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شاورما فراخ (Large)",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ميكس فراخ (Small)",c:"بيتزا شرقي",p:100,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ميكس فراخ (Medium)",c:"بيتزا شرقي",p:135,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ميكس فراخ (Large)",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا زنجر (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا زنجر (Medium)",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا زنجر (Large)",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شيش (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شيش (Medium)",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شيش (Large)",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا تونه مفتته (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/uk.ooni.com/40190936c4fec4dd0e8c11db6b028ecae381deef.jpg"},
  {n:"بيتزا تونه مفتته (Medium)",c:"بيتزا شرقي",p:120,i:"https://kimi-web-img.moonshot.cn/img/uk.ooni.com/40190936c4fec4dd0e8c11db6b028ecae381deef.jpg"},
  {n:"بيتزا تونه مفتته (Large)",c:"بيتزا شرقي",p:155,i:"https://kimi-web-img.moonshot.cn/img/uk.ooni.com/40190936c4fec4dd0e8c11db6b028ecae381deef.jpg"},
  {n:"بيتزا تونه قطع (Medium)",c:"بيتزا شرقي",p:135,i:"https://kimi-web-img.moonshot.cn/img/www.crunchtimekitchen.com/2d5383e48969194f9c0a02ef1819fb552f58da7a.jpg"},
  {n:"بيتزا تونه قطع (Large)",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/www.crunchtimekitchen.com/2d5383e48969194f9c0a02ef1819fb552f58da7a.jpg"},
  {n:"بيتزا جمبري (Small)",c:"بيتزا شرقي",p:105,i:"https://kimi-web-img.moonshot.cn/img/ooni.com/c3dc6ee658081cf918fc274769ada37f0c336dfb.jpg"},
  {n:"بيتزا جمبري (Medium)",c:"بيتزا شرقي",p:135,i:"https://kimi-web-img.moonshot.cn/img/ooni.com/c3dc6ee658081cf918fc274769ada37f0c336dfb.jpg"},
  {n:"بيتزا جمبري (Large)",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/ooni.com/c3dc6ee658081cf918fc274769ada37f0c336dfb.jpg"},
  {n:"بيتزا سي فود (Small)",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/cdn.personalchefana.com/43b2d9f261fe9ee34baf9f7b20021f3981699769.jpg"},
  {n:"بيتزا سي فود (Medium)",c:"بيتزا شرقي",p:140,i:"https://kimi-web-img.moonshot.cn/img/cdn.personalchefana.com/43b2d9f261fe9ee34baf9f7b20021f3981699769.jpg"},
  {n:"بيتزا سي فود (Large)",c:"بيتزا شرقي",p:180,i:"https://kimi-web-img.moonshot.cn/img/cdn.personalchefana.com/43b2d9f261fe9ee34baf9f7b20021f3981699769.jpg"},
  {n:"بيتزا هند (Small)",c:"بيتزا شرقي",p:115,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا هند (Medium)",c:"بيتزا شرقي",p:145,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا هند (Large)",c:"بيتزا شرقي",p:190,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"طاجن فراخ",c:"الطواجن",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
  {n:"طاجن لحمه",c:"الطواجن",p:35,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
  {n:"ميكس طاجن فراخ",c:"الطواجن",p:55,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
  {n:"ميكس طاجن لحمه",c:"الطواجن",p:50,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
  {n:"طاجن فراخ موتزريلا",c:"الطواجن",p:60,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
  {n:"طاجن لحمه موتزريلا",c:"الطواجن",p:55,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
  {n:"فته فراخ",c:"وجبات سوري",p:80,i:"https://kimi-web-img.moonshot.cn/img/asif.org/811b3c58aab450df15234a0f91bdbb5565dca4b8.jpg"},
  {n:"وجبة زنجر",c:"وجبات سوري",p:95,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"وجبة عربي سنجل",c:"وجبات سوري",p:90,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"وجبة عربي سوبر",c:"وجبات سوري",p:125,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"وجبة عربي دبل",c:"وجبات سوري",p:155,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"بيتزا سوري",c:"وجبات سوري",p:125,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/d998b539356801f6a6c2f8ad58c44891bc1c378e.jpg"},
  {n:"دبل ورق",c:"وجبات سوري",p:155,i:"https://kimi-web-img.moonshot.cn/img/asif.org/811b3c58aab450df15234a0f91bdbb5565dca4b8.jpg"},
  {n:"وجبة ريزو",c:"وجبات سوري",p:85,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"شاورما فراخ",c:"وجبات سوري",p:50,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"زنجر",c:"وجبات سوري",p:55,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/2fb59f0c318c6a202e6cca728842b94ea5ebc6a6.jpg"},
  {n:"بطاطس سوري",c:"وجبات سوري",p:20,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
  {n:"بطاطس سوري جبنه",c:"وجبات سوري",p:30,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
  {n:"بانيه علي بطاطس",c:"وجبات سوري",p:25,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
  {n:"صاروخ سجق",c:"صاروخ ايطالي",p:90,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ لحمه",c:"صاروخ ايطالي",p:90,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ مشكل لحوم",c:"صاروخ ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ مشكل جبن",c:"صاروخ ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ زنجر",c:"صاروخ ايطالي",p:95,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ شاورما",c:"صاروخ ايطالي",p:95,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ هند",c:"صاروخ ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"➕ جبنة موتزريلا (صغير)",c:"اضافات الصاروخ",p:30,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"},
  {n:"➕ جبنة موتزريلا (وسط)",c:"اضافات الصاروخ",p:40,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"},
  {n:"➕ جبنة موتزريلا (كبير)",c:"اضافات الصاروخ",p:50,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"},
  {n:"➕ اضافة لحوم (صغير)",c:"اضافات الصاروخ",p:35,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/410fafec478e6238f873926f8382da261de23000.jpg"},
  {n:"➕ اضافة لحوم (وسط)",c:"اضافات الصاروخ",p:45,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/410fafec478e6238f873926f8382da261de23000.jpg"},
  {n:"➕ اضافة لحوم (كبير)",c:"اضافات الصاروخ",p:55,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/410fafec478e6238f873926f8382da261de23000.jpg"},
  {n:"➕ اضافة باربيكيو",c:"اضافات الصاروخ",p:25,i:"https://kimi-web-img.moonshot.cn/img/cdn.mafrservices.com/6b9a2f6e14990b41552e4bd8cd678b02d3732056.jpg"},
  {n:"➕ صوص شيدر",c:"اضافات الصاروخ",p:25,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
  {n:"نجرسكو",c:"نجرسكو",p:90,i:"https://kimi-web-img.moonshot.cn/img/www.akla7elwa.com/7e5c713b271394ff9de15a708990f75fabdf00cb.jpg"},
  {n:"بشاميل",c:"نجرسكو",p:50,i:"https://kimi-web-img.moonshot.cn/img/eatwellabi.com/d415cd08653dd9db9f647f637aa724945593c7e6.jpg"},
  {n:"مكرونه جمبري",c:"نجرسكو",p:90,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/ac32c4d72e53a5d8eccde6f3a37c1edf01ea7c52.jpg"},
  {n:"حواوشي لحمه كبير",c:"الحواوشي",p:40,i:"https://kimi-web-img.moonshot.cn/img/vid.alarabiya.net/e9404c6a641ed0f6aaf9d352a411f39be43f99f8.jpg"},
  {n:"حواوشي لحمه موتزريلا كبير",c:"الحواوشي",p:55,i:"https://kimi-web-img.moonshot.cn/img/www.khalty.net/e3604b681d65f37168ddebf2499aab33051250ea.jpg"},
  {n:"ربع فرخه ورك",c:"الفراخ المشويه",p:75,i:"https://kimi-web-img.moonshot.cn/img/www.eldahan.com/ce3140aa9d42485c510e37e14153124c1768a4ef.jpg"},
  {n:"نصف فرخه",c:"الفراخ المشويه",p:160,i:"https://kimi-web-img.moonshot.cn/img/www.eldahan.com/99265e6a73b5870130fa0c845bb95f1f01e94fd9.jpg"},
  {n:"ربع فرخه صدر",c:"الفراخ المشويه",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.eldahan.com/e9a9bf220cbbb6cd9a82f55c5365dc24952d9f13.jpg"},
  {n:"فرخه كامله",c:"الفراخ المشويه",p:300,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/e13a2d27dfcb231b143d1bd20461e5313baadd3d.jpg"},
  {n:"كريب شاورما لحمه",c:"كريب لحوم",p:70,i:"https://kimi-web-img.moonshot.cn/img/papai.online/c52fdda58635b0303d954daa0e99541f3376a190.png"},
  {n:"كريب برجر",c:"كريب لحوم",p:60,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/11fe503b7641f5c568deab459ad01f2263ed3ccd.jpg"},
  {n:"كريب كفته",c:"كريب لحوم",p:55,i:"https://kimi-web-img.moonshot.cn/img/www.khalty.net/6ea1028174a8c4849b616388486c827cef005bd4.webp"},
  {n:"كريب سوسيس",c:"كريب لحوم",p:55,i:"https://kimi-web-img.moonshot.cn/img/img-global.cpcdn.com/9357be0040a6a7cdefc915df5fe4fc3d301bff49.jpg"},
  {n:"كريب كفته سوسيس برجر",c:"كريب لحوم",p:70,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/45d24e873fcbdadb4e456a7125b3ce487f9d508d.png"},
  {n:"كريب مشروم",c:"كريب لحوم",p:55,i:"https://kimi-web-img.moonshot.cn/img/media.gemini.media/a534eed6f19f7460bc81676f93dd37867469daf3.jpg"},
  {n:"كريب مشكل لحوم",c:"كريب لحوم",p:80,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/45d24e873fcbdadb4e456a7125b3ce487f9d508d.png"},
  {n:"كريب سجق",c:"كريب لحوم",p:60,i:"https://kimi-web-img.moonshot.cn/img/majesty.com.eg/88540b55a042f06686901e1f7f10490047f16ebd.png"},
  {n:"كريب بطاطس رول",c:"كريب بطاطس وجبن",p:45,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
  {n:"كريب بطاطس",c:"كريب بطاطس وجبن",p:35,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
  {n:"كريب بطاطس شيدر",c:"كريب بطاطس وجبن",p:50,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
  {n:"كريب مشكل جبن",c:"كريب بطاطس وجبن",p:45,i:"https://kimi-web-img.moonshot.cn/img/papai.online/9002b21dabd68a86e472795d70b2bbfc0032f62f.png"},
  {n:"كريب بانيه",c:"كريب فراخ",p:60,i:"https://kimi-web-img.moonshot.cn/img/www.elqareanews.com/0385afcb2627466e6602e738a47995dfaf0ab81d.jpeg"},
  {n:"كريب استربس",c:"كريب فراخ",p:70,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/160366531c6b88ef02497a2ca6c5c14385012cbf.jpg"},
  {n:"كريب شاورما",c:"كريب فراخ",p:75,i:"https://kimi-web-img.moonshot.cn/img/papai.online/94e63da4c2d8cb36b6706a17c72c4291e1e664bc.png"},
  {n:"كريب استربس + شيش",c:"كريب فراخ",p:80,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/160366531c6b88ef02497a2ca6c5c14385012cbf.jpg"},
  {n:"كريب شاورما + استربس",c:"كريب فراخ",p:75,i:"https://kimi-web-img.moonshot.cn/img/papai.online/94e63da4c2d8cb36b6706a17c72c4291e1e664bc.png"},
  {n:"كريب فاهيتا دجاج",c:"كريب فراخ",p:80,i:"https://kimi-web-img.moonshot.cn/img/cdn.supermama.me/349b93a1e4d1252417d93f99cb1587cca7fcabdd.webp"},
  {n:"كريب مشكل فراخ",c:"كريب فراخ",p:80,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/160366531c6b88ef02497a2ca6c5c14385012cbf.jpg"},
  {n:"كريب شيش",c:"كريب فراخ",p:75,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/de37fd344e60a43b8d9e4ef1a31ce025c0aeba3b.jpg"},
  {n:"كريب هوهوز + شيكولاته",c:"كريب حلو",p:40,i:"https://kimi-web-img.moonshot.cn/img/www.jonathangarnier.com/4ffb3bb060f41d2e20413f388d6baa16840feb95.jpg"},
  {n:"كريب موز + شيكولاته",c:"كريب حلو",p:40,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/a4277754ba23bc7f636cc613e71834b69f9de9dc.jpg"},
  {n:"كريب مكسرات + شيكولاته",c:"كريب حلو",p:50,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/5116c13417940069d8aca2d1b7126bb5ff51b070.jpg"},
  {n:"كريب موز + مكسرات + عسل",c:"كريب حلو",p:55,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/5116c13417940069d8aca2d1b7126bb5ff51b070.jpg"},
  {n:"ارز بلبن صغير",c:"حلو هند",p:15,i:"/roz-blaban.png"},
  {n:"ارز بلبن كبير",c:"حلو هند",p:20,i:"/roz-blaban.png"},
  {n:"ارز بلبن فرن",c:"حلو هند",p:20,i:"/roz-blaban.png"},
  {n:"ارز بلبن لوتس",c:"حلو هند",p:25,i:"/roz-blaban.png"},
  {n:"ارز بلبن اوريو",c:"حلو هند",p:25,i:"/roz-blaban.png"},
  {n:"ارز بلبن مكسرات",c:"حلو هند",p:25,i:"/roz-blaban.png"},
  {n:"ام علي مكسرات",c:"حلو هند",p:25,i:"/om-ali.png"},
  {n:"مهلبية",c:"حلو هند",p:12,i:"/mahalabia.png"},
  {n:"جيلي مهلبية",c:"حلو هند",p:20,i:"/jelly.png"},
  {n:"كريم كارميل",c:"حلو هند",p:25,i:"/roz-blaban.png"},
  {n:"جيلي ساده",c:"حلو هند",p:15,i:"/jelly.png"},
  {n:"عيش توست",c:"اضافات هند",p:10,i:"https://kimi-web-img.moonshot.cn/img/pickyeaterblog.com/dab5ea3a023d82b8583f304ca6f13a8f217d0173.jpg"},
  {n:"سلطة صغيرة",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/6b375a4ec4cb877faeca8981b46248c62fddec54.jpg"},
  {n:"سلطة كبيرة",c:"اضافات هند",p:10,i:"https://kimi-web-img.moonshot.cn/img/static.rashaqa.net/3118792391454ac998bee74b011b379d65f71bd8.jpg"},
  {n:"تقلية",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/hungryinthailand.com/7b5dd4bdb4947bf54dd0611a12256d500e623db1.webp"},
  {n:"حمص",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/shortgirltallorder.com/875af8868049243e421bd42f00b1a2cdd07f3ca7.jpg"},
  {n:"صلصة",c:"اضافات هند",p:5,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/974064ffa01d05192030b745cf830506a1cad56a.jpg"},
  {n:"عدس",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/b66ac9745e04d0b9e0f5f7bc980de503814e2331.jpg"},
  {n:"شطة زيت",c:"اضافات هند",p:10,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/7076983618cbd58d873e82174cc63f15939852e8.jpg"},
  {n:"دقة",c:"اضافات هند",p:5,i:"https://kimi-web-img.moonshot.cn/img/cdn.loveandlemons.com/67f6887592507ac95506b1da7cfad8c484a1a399.jpg"},
  {n:"إضافات شاورما",c:"اضافات هند",p:25,i:"https://kimi-web-img.moonshot.cn/img/www.sadia-life.com/ba0f355f8cd9fa437ce6c1ff72b22743d95d1a3d.jpg"},
  {n:"إضافات موتزريلا",c:"اضافات هند",p:20,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"}
];

const offers = [
  {n:"عرض: أي 3 بيتزا وسط + فطير حلو",p:330},
  {n:"عرض: فطيرة لحمه + فطيرة فراخ + صاروخ سجق",p:260},
  {n:"عرض: وجبة طاجن فراخ (عيش+سلطة+أرز بلبن+بيبسي)",p:75},
  {n:"عرض: وجبة طاجن لحمة (عيش+سلطة+أرز بلبن+بيبسي)",p:70},
  {n:"عرض: وجبة كشري هند (عيش+سلطة+أرز بلبن+بيبسي)",p:45}
];

export default function ClientPage() {
  const [currentFilter, setCurrentFilter] = useState("الكل");
  const [cart, setCart] = useState<{item: typeof menu[0] | typeof offers[0]; qty: number}[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isAltTheme, setIsAltTheme] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('koshary-theme');
    if (saved === 'alt') setIsAltTheme(true);
  }, []);

  useEffect(() => {
    if (isAltTheme) {
      document.body.classList.add('alt-theme');
      localStorage.setItem('koshary-theme', 'alt');
    } else {
      document.body.classList.remove('alt-theme');
      localStorage.setItem('koshary-theme', 'default');
    }
  }, [isAltTheme]);

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(""), 2200);
    return () => clearTimeout(t);
  }, [toastMsg]);

  const filteredMenu = menu.filter(x => {
    const matchFilter = currentFilter === "الكل" || x.c === currentFilter;
    const matchSearch = !searchQuery || x.n.includes(searchQuery) || x.c.includes(searchQuery);
    return matchFilter && matchSearch;
  });

  const totalQty = cart.reduce((a, c) => a + c.qty, 0);
  const totalPrice = cart.reduce((a, c) => a + (c.item.p * c.qty), 0);

  function addToCart(idx: number) {
    const item = menu[idx];
    setCart(prev => {
      const existing = prev.find(c => c.item.n === item.n);
      if (existing) {
        return prev.map(c => c.item.n === item.n ? {...c, qty: c.qty + 1} : c);
      }
      return [...prev, {item, qty: 1}];
    });
    setToastMsg("اتضاف للسلة 🔥");
  }

  function addOfferToCart(i: number) {
    const offer = offers[i];
    setCart(prev => {
      const existing = prev.find(c => c.item.n === offer.n);
      if (existing) {
        return prev.map(c => c.item.n === offer.n ? {...c, qty: c.qty + 1} : c);
      }
      return [...prev, {item: offer, qty: 1}];
    });
    setToastMsg("العرض اتضاف للسلة 🎉");
  }

  function removeItem(i: number) {
    setCart(prev => {
      const newCart = [...prev];
      newCart[i].qty--;
      if (newCart[i].qty <= 0) {
        newCart.splice(i, 1);
      } else {
        newCart[i] = {...newCart[i]};
      }
      return newCart;
    });
  }

  function checkout() {
    if (!cart.length) {
      setToastMsg("السلة فاضية 😅");
      return;
    }
    const items = cart.map(c => c.qty > 1 ? `${c.item.n} (×${c.qty})` : c.item.n).join("، ");
    const msg = encodeURIComponent(`مرحباً كشري هند 👋\nعايز أطلب: ${items}\nالإجمالي التقريبي: ${totalPrice} جنيه`);
    window.open(`https://wa.me/201210195153?text=${msg}`, "_blank");
  }

  function filterMenu(cat: string) {
    setCurrentFilter(cat);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  }

  const cats = [
    ["كشري","🍲"],["بيتزا شرقي","🍕"],["الطواجن","🥘"],["وجبات سوري","🥙"],
    ["صاروخ ايطالي","🚀"],["نجرسكو","🍝"],["الحواوشي","🥪"],["الفراخ المشويه","🍗"],
    ["كريب لحوم","🌯"],["كريب بطاطس وجبن","🧀"],["كريب فراخ","🍗"],["كريب حلو","🍫"],
    ["حلو هند","🍮"],["اضافات هند","🥗"],["اضافات الصاروخ","🧀"]
  ];

  const filterButtons = ["الكل","كشري","بيتزا شرقي","الطواجن","وجبات سوري","صاروخ ايطالي","نجرسكو","الحواوشي","الفراخ المشويه","كريب لحوم","كريب بطاطس وجبن","كريب فراخ","كريب حلو","حلو هند","اضافات هند","اضافات الصاروخ"];

  return (
    <>
      <h1 className="sr-only">كشري هند في مغاغة - مطعم الأكل الأصيل منذ 1992</h1>

      <div className="announcement">🍽️ طعم أصيل من 1992 — اطلب دلوقتي من كشري هند مغاغة</div>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home">
            <img src="/logo.png" alt="شعار مطعم كشري هند في مغاغة" className="brand-logo" width="50" height="50" />
            <span><b>كشري هند</b><small>الأكل الأصيل</small></span>
          </a>
          <nav aria-label="القائمة الرئيسية">
            <a href="#home">الرئيسية</a>
            <a href="#menu">المنيو</a>
            <a href="#offers">العروض</a>
            <a href="#contact">الفروع</a>
          </nav>
          <button className="theme-btn" onClick={() => setIsAltTheme(!isAltTheme)} aria-label="تبديل المظهر">
            {isAltTheme ? '🌙' : '☀️'}
          </button>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)} aria-label="فتح سلة المشتريات">
            🛒 <span>السلة</span><b>{totalQty}</b>
          </button>
          <button className="menu-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="قائمة الجوال">☰</button>
        </div>
        <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMobileNavOpen(false)}>الرئيسية</a>
          <a href="#menu" onClick={() => setMobileNavOpen(false)}>المنيو</a>
          <a href="#offers" onClick={() => setMobileNavOpen(false)}>العروض</a>
          <a href="#contact" onClick={() => setMobileNavOpen(false)}>الفروع</a>
          <button className="mobile-cart-btn" onClick={() => {setIsCartOpen(true); setMobileNavOpen(false);}}>
            🛒 السلة <b>{totalQty}</b>
          </button>
          <button className="mobile-theme-btn" onClick={() => setIsAltTheme(!isAltTheme)}>
            {isAltTheme ? '🌙' : '☀️'} تبديل الألوان
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">منذ 1992 • مغاغة</div>
              <h2 className="hero-title">الطعم اللي<br /><span>مستنيك</span></h2>
              <p>كشري، بيتزا، مشويات، كريب، حواوشي، نجرسكوو ووجبات سوري — كل اللي بتحبه في مكان واحد.</p>
              <div className="hero-actions">
                <a href="#menu" className="btn primary">شوف المنيو <span>←</span></a>
                <a href="tel:01210195153" className="btn ghost">📞 اطلب الآن</a>
              </div>
              <div className="hero-stats">
                <div><b>1992</b><small>خبرة وطعم أصيل</small></div>
                <div><b>24/7</b><small>استقبال طلبات</small></div>
                <div><b>100%</b><small>طازة ومحبوبة</small></div>
              </div>
            </div>
            <div className="hero-card">
              <div className="plate-shadow"></div>
              <img src="/logo.png" alt="شعار كشري هند - مطعم الأكل الأصيل في مغاغة" className="hero-logo-img" width="220" height="220" />
              <div className="floating-tag tag-one">🔥 الأكثر طلبًا</div>
              <div className="floating-tag tag-two">⭐ طعم أصيل</div>
              <div className="hero-card-bottom"><b>كشري هند</b><span>طعم يرجعك تاني</span></div>
            </div>
          </div>
        </section>

        <section className="quick-cats" aria-label="التصنيفات السريعة">
          <div className="container category-row">
            {cats.map(([cat, icon]) => (
              <button key={cat} onClick={() => filterMenu(cat)} aria-label={`تصفية ${cat}`}>
                {icon}<span>{cat}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="offers" className="section offers-section">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">اختياراتنا</span><h2>عروض <span>تستاهل</span></h2></div>
              <a href="#menu">كل المنيو ←</a>
            </div>
            <div className="offers-grid">
              {offers.map((offer, i) => (
                <article className={`offer-card ${i === 0 ? 'featured' : ''}`} key={offer.n}>
                  <div className="offer-icon">
                    {i === 0 ? '🍕' : i === 1 ? '🚀' : i === 2 ? '🥘' : i === 3 ? '🥘' : '🍲'}
                  </div>
                  <div>
                    <small>{i === 0 ? 'عرض التوفير 1' : i === 1 ? 'عرض التوفير 2' : 'وجبات التوفير'}</small>
                    <h3>{offer.n.replace('عرض: ', '')}</h3>
                    <p>{i === 0 ? '+ فطير حلو بغاشة سكر ولبن' : i === 1 ? 'عرض خاص من كشري هند' : 'عيش + سلطة + أرز بلبن + بيبسي'}</p>
                    <strong>{offer.p} <small>جنيه</small></strong>
                  </div>
                  <button className="add-btn offer-add" onClick={() => addOfferToCart(i)} aria-label={`أضف عرض ${offer.n} للسلة`}>+ أضف</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="section menu-section">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">اختار اللي نفسك فيه</span><h2>الـ <span>منيو</span></h2></div>
              <div className="search-box">
                🔍 <input
                  placeholder="دور على أكلك..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="البحث في المنيو"
                />
              </div>
            </div>
            <div className="filters" role="tablist" aria-label="تصفية المنيو">
              {filterButtons.map(f => (
                <button
                  key={f}
                  className={currentFilter === f ? 'active' : ''}
                  onClick={() => setCurrentFilter(f)}
                  role="tab"
                  aria-selected={currentFilter === f}
                >
                  {f === "الفراخ المشويه" ? "فراخ مشوية" : f === "كريب بطاطس وجبن" ? "كريب بطاطس" : f}
                </button>
              ))}
            </div>
            <div className="menu-grid">
              {filteredMenu.length === 0 ? (
                <p style={{color:'#81c784',textAlign:'center',padding:'40px',gridColumn:'1/-1'}}>مفيش نتائج مطابقة للبحث.</p>
              ) : (
                filteredMenu.map((x) => {
                  const originalIdx = menu.indexOf(x);
                  const fallback = `https://placehold.co/300x200/0d2818/e65100?text=${encodeURIComponent(x.n)}&font=cairo`;
                  return (
                    <article className="menu-item" key={x.n}>
                      <div className="item-img-wrap">
                        <img
                          src={x.i}
                          alt={`صورة طبق ${x.n} من كشري هند مغاغة`}
                          loading="lazy"
                          width="300"
                          height="200"
                          onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
                        />
                      </div>
                      <h3>{x.n}</h3>
                      <p>{x.c} • طعم أصيل وجودة مضمونة</p>
                      <div className="price-row">
                        <span className="price">{x.p} ج</span>
                        <button className="add-btn" onClick={() => addToCart(originalIdx)} aria-label={`أضف ${x.n} للسلة`}>+ أضف</button>
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow">جوعان؟</span>
              <h2>خلي طلبك يوصل لحد عندك 🔥</h2>
              <p>اتصل بأقرب فرع واطلب أكلك المفضل.</p>
            </div>
            <a className="btn primary" href="tel:01210195153">اتصل واطلب الآن 📞</a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">أماكننا</span><h2>فروع <span>مغاغة</span></h2></div>
            </div>
            <div className="branches">
              <article className="branch" itemScope itemType="https://schema.org/LocalBusiness">
                <div className="branch-icon">📍</div>
                <div>
                  <h3 itemProp="name">فرع شارع الثورة</h3>
                  <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">شارع الثورة أمام أسواق سيف</span> — <span itemProp="addressLocality">مغاغة</span>
                  </p>
                  <a href="tel:01210195153" itemProp="telephone">01210195153</a>
                  <a href="tel:01015061338" itemProp="telephone">01015061338</a>
                </div>
              </article>
              <article className="branch" itemScope itemType="https://schema.org/LocalBusiness">
                <div className="branch-icon">📍</div>
                <div>
                  <h3 itemProp="name">فرع شارع المحطة</h3>
                  <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">شارع المحطة بجوار بنك مصر</span> — <span itemProp="addressLocality">مغاغة</span>
                  </p>
                  <a href="tel:01206500071" itemProp="telephone">01206500071</a>
                  <a href="tel:01116816266" itemProp="telephone">01116816266</a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div>
            <div className="brand footer-brand">
              <img src="/logo.png" alt="شعار كشري هند" className="brand-logo" width="50" height="50" />
              <span><b>كشري هند</b><small>الأكل الأصيل</small></span>
            </div>
            <p>من 1992 بنقدم لك الطعم اللي بتحبه.</p>
          </div>
          <div>
            <h4>روابط سريعة</h4>
            <a href="#menu">المنيو</a>
            <a href="#offers">العروض</a>
            <a href="#contact">الفروع</a>
          </div>
          <div>
            <h4>تواصل معنا</h4>
            <a href="tel:01210195153">📞 01210195153</a>
            <a href="tel:01015061338">📞 01015061338</a>
          </div>
        </div>
        <div className="developer-credit">Designed & Developed by <b>A7MED ASHRAF</b> <span>•</span> <a href="tel:01080343968">01080343968</a></div>
        <div className="copyright">© 2026 كشري هند — جميع الحقوق محفوظة</div>
      </footer>

      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setIsCartOpen(false); }}>
        <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="cart-head">
            <h2>سلة الطلب 🛒</h2>
            <button onClick={() => setIsCartOpen(false)} aria-label="إغلاق السلة">×</button>
          </div>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p style={{color:'#81c784',textAlign:'center',marginTop:'50px'}}>السلة فاضية.. اطلب حاجة حلوة 😋</p>
            ) : (
              cart.map((c, i) => (
                <div className="cart-line" key={`${c.item.n}-${i}`}>
                  <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    {c.item.i && <img src={c.item.i} className="cart-thumb" alt="" width="50" height="50" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />}
                    <div>
                      <b>{c.item.n}</b>
                      <small style={{display:'block',color:'#81c784'}}>{'c' in c.item ? c.item.c : 'عرض'}</small>
                      {c.qty > 1 ? <span style={{color:'#e65100',fontWeight:800}}>×{c.qty}</span> : null}
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <b>{c.item.p * c.qty} ج</b><br />
                    <button onClick={() => removeItem(i)} style={{background:'#1b5e20',color:'#fff',border:0,borderRadius:'7px',padding:'5px 8px',cursor:'pointer',marginTop:'4px'}}>حذف</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="cart-total"><span>الإجمالي</span><strong>{totalPrice} جنيه</strong></div>
          <button className="btn primary full" onClick={checkout}>إتمام الطلب عبر واتساب</button>
        </aside>
      </div>

      <div className={`toast ${toastMsg ? 'show' : ''}`}>{toastMsg}</div>
    </>
  );
}
