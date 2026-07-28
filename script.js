const menu = [
  // ===== كشري =====
  {n:"علبه ميني",c:"كشري",p:20,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري سوبر",c:"كشري",p:25,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري ميجا",c:"كشري",p:30,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري استرا",c:"كشري",p:35,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري اسبيشيال",c:"كشري",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري هند عائلي",c:"كشري",p:45,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري هند جامبو",c:"كشري",p:50,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  // ===== بيتزا شرقي =====
  {n:"بيتزا سجق سمول",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/0b3b538a7983166c8a7dee9314e066955f1df579.webp"},
  {n:"بيتزا سجق ميديم",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/0b3b538a7983166c8a7dee9314e066955f1df579.webp"},
  {n:"بيتزا سجق لارج",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/0b3b538a7983166c8a7dee9314e066955f1df579.webp"},
  {n:"بيتزا لحمه سمول",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.thursdaynightpizza.com/89a74525cca0ff10d7229b7ecbad4d36215ce96b.png"},
  {n:"بيتزا لحمه ميديم",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.thursdaynightpizza.com/89a74525cca0ff10d7229b7ecbad4d36215ce96b.png"},
  {n:"بيتزا لحمه لارج",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.thursdaynightpizza.com/89a74525cca0ff10d7229b7ecbad4d36215ce96b.png"},
  {n:"بيتزا سوسيس سمول",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.tasteofhome.com/2bdce269b806fd4c255069e4d9405c0948229e62.jpg"},
  {n:"بيتزا سوسيس ميديم",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.tasteofhome.com/2bdce269b806fd4c255069e4d9405c0948229e62.jpg"},
  {n:"بيتزا سوسيس لارج",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.tasteofhome.com/2bdce269b806fd4c255069e4d9405c0948229e62.jpg"},
  {n:"بيتزا برجر سمول",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/13ebccdbc18fd6fac78b7b80e2862748e21ce5ae.jpg"},
  {n:"بيتزا برجر ميديم",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/13ebccdbc18fd6fac78b7b80e2862748e21ce5ae.jpg"},
  {n:"بيتزا برجر لارج",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/13ebccdbc18fd6fac78b7b80e2862748e21ce5ae.jpg"},
  {n:"بيتزا مشروم سمول",c:"بيتزا شرقي",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.gozney.com/331085306643435e6105c63c044eb53e0c496cdf.jpg"},
  {n:"بيتزا مشروم ميديم",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.gozney.com/331085306643435e6105c63c044eb53e0c496cdf.jpg"},
  {n:"بيتزا مشروم لارج",c:"بيتزا شرقي",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.gozney.com/331085306643435e6105c63c044eb53e0c496cdf.jpg"},
  {n:"بيتزا بسطرمة سمول",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/11a8531bf00ad15ea5951ee2f03c8d64be49d94b.jpg"},
  {n:"بيتزا بسطرمة ميديم",c:"بيتزا شرقي",p:120,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/11a8531bf00ad15ea5951ee2f03c8d64be49d94b.jpg"},
  {n:"بيتزا بسطرمة لارج",c:"بيتزا شرقي",p:165,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/11a8531bf00ad15ea5951ee2f03c8d64be49d94b.jpg"},
  {n:"بيتزا سوبر سوبريم سمول",c:"بيتزا شرقي",p:100,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا سوبر سوبريم ميديم",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا سوبر سوبريم لارج",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا مشكل جبن سمول",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/www.inspiredtaste.net/201142907cd8aeac44def5619afc82ded238c124.jpg"},
  {n:"بيتزا مشكل جبن ميديم",c:"بيتزا شرقي",p:115,i:"https://kimi-web-img.moonshot.cn/img/www.inspiredtaste.net/201142907cd8aeac44def5619afc82ded238c124.jpg"},
  {n:"بيتزا مشكل جبن لارج",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/www.inspiredtaste.net/201142907cd8aeac44def5619afc82ded238c124.jpg"},
  {n:"بيتزا شاورما فراخ سمول",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شاورما فراخ ميديم",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شاورما فراخ لارج",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ميكس فراخ سمول",c:"بيتزا شرقي",p:100,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ميكس فراخ ميديم",c:"بيتزا شرقي",p:135,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ميكس فراخ لارج",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا زنجر سمول",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا زنجر ميديم",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا زنجر لارج",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شيش سمول",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شيش ميديم",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا شيش لارج",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا تونه مفتته سمول",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/uk.ooni.com/40190936c4fec4dd0e8c11db6b028ecae381deef.jpg"},
  {n:"بيتزا تونه مفتته ميديم",c:"بيتزا شرقي",p:120,i:"https://kimi-web-img.moonshot.cn/img/uk.ooni.com/40190936c4fec4dd0e8c11db6b028ecae381deef.jpg"},
  {n:"بيتزا تونه مفتته لارج",c:"بيتزا شرقي",p:155,i:"https://kimi-web-img.moonshot.cn/img/uk.ooni.com/40190936c4fec4dd0e8c11db6b028ecae381deef.jpg"},
  {n:"بيتزا تونه قطع ميديم",c:"بيتزا شرقي",p:135,i:"https://kimi-web-img.moonshot.cn/img/www.crunchtimekitchen.com/2d5383e48969194f9c0a02ef1819fb552f58da7a.jpg"},
  {n:"بيتزا تونه قطع لارج",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/www.crunchtimekitchen.com/2d5383e48969194f9c0a02ef1819fb552f58da7a.jpg"},
  {n:"بيتزا جمبري سمول",c:"بيتزا شرقي",p:105,i:"https://kimi-web-img.moonshot.cn/img/ooni.com/c3dc6ee658081cf918fc274769ada37f0c336dfb.jpg"},
  {n:"بيتزا جمبري ميديم",c:"بيتزا شرقي",p:135,i:"https://kimi-web-img.moonshot.cn/img/ooni.com/c3dc6ee658081cf918fc274769ada37f0c336dfb.jpg"},
  {n:"بيتزا جمبري لارج",c:"بيتزا شرقي",p:170,i:"https://kimi-web-img.moonshot.cn/img/ooni.com/c3dc6ee658081cf918fc274769ada37f0c336dfb.jpg"},
  {n:"بيتزا سي فود سمول",c:"بيتزا شرقي",p:110,i:"https://kimi-web-img.moonshot.cn/img/cdn.personalchefana.com/43b2d9f261fe9ee34baf9f7b20021f3981699769.jpg"},
  {n:"بيتزا سي فود ميديم",c:"بيتزا شرقي",p:140,i:"https://kimi-web-img.moonshot.cn/img/cdn.personalchefana.com/43b2d9f261fe9ee34baf9f7b20021f3981699769.jpg"},
  {n:"بيتزا سي فود لارج",c:"بيتزا شرقي",p:180,i:"https://kimi-web-img.moonshot.cn/img/cdn.personalchefana.com/43b2d9f261fe9ee34baf9f7b20021f3981699769.jpg"},
  {n:"بيتزا هند سمول",c:"بيتزا شرقي",p:115,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا هند ميديم",c:"بيتزا شرقي",p:145,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  {n:"بيتزا هند لارج",c:"بيتزا شرقي",p:190,i:"https://kimi-web-img.moonshot.cn/img/dinnerthendessert.com/28eb2e45bf0059be9eb1752d2b78543e59289d55.jpg"},
  // ===== الطواجن =====
  {n:"طاجن فراخ",c:"الطواجن",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
  {n:"طاجن لحمه",c:"الطواجن",p:35,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
  {n:"ميكس طاجن فراخ",c:"الطواجن",p:55,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
  {n:"ميكس طاجن لحمه",c:"الطواجن",p:50,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
  {n:"طاجن فراخ موتزريلا",c:"الطواجن",p:60,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fcc8fd7582457a8fa24b782c7da61c88ed83d829.jfif"},
  {n:"طاجن لحمه موتزريلا",c:"الطواجن",p:55,i:"https://kimi-web-img.moonshot.cn/img/elwasfa.com/0b8cbc9acd9617f37160a326ba8072b3b262c0a4.jpg"},
  // ===== وجبات سوري =====
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
  // ===== صاروخ ايطالي =====
  {n:"صاروخ سجق",c:"صاروخ ايطالي",p:90,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ لحمه",c:"صاروخ ايطالي",p:90,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ مشكل لحوم",c:"صاروخ ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ مشكل جبن",c:"صاروخ ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ زنجر",c:"صاروخ ايطالي",p:95,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ شاورما",c:"صاروخ ايطالي",p:95,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  {n:"صاروخ هند",c:"صاروخ ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/2bc6c9441110e3eb96b8764e4d737056bd231eca.jpg"},
  // ===== اضافات الصاروخ =====
  {n:"➕ جبنة موتزريلا (صغير)",c:"اضافات الصاروخ",p:30,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"},
  {n:"➕ جبنة موتزريلا (وسط)",c:"اضافات الصاروخ",p:40,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"},
  {n:"➕ جبنة موتزريلا (كبير)",c:"اضافات الصاروخ",p:50,i:"https://kimi-web-img.moonshot.cn/img/images.stockcake.com/1bf041b22c6a498c0cbc617b9b8295b2325ab9d6.jpg"},
  {n:"➕ اضافة لحوم (صغير)",c:"اضافات الصاروخ",p:35,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/410fafec478e6238f873926f8382da261de23000.jpg"},
  {n:"➕ اضافة لحوم (وسط)",c:"اضافات الصاروخ",p:45,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/410fafec478e6238f873926f8382da261de23000.jpg"},
  {n:"➕ اضافة لحوم (كبير)",c:"اضافات الصاروخ",p:55,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/410fafec478e6238f873926f8382da261de23000.jpg"},
  {n:"➕ اضافة باربيكيو",c:"اضافات الصاروخ",p:25,i:"https://kimi-web-img.moonshot.cn/img/cdn.mafrservices.com/6b9a2f6e14990b41552e4bd8cd678b02d3732056.jpg"},
  {n:"➕ صوص شيدر",c:"اضافات الصاروخ",p:25,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
  // ===== نجرسكو =====
  {n:"نجرسكو",c:"نجرسكو",p:90,i:"https://kimi-web-img.moonshot.cn/img/www.akla7elwa.com/7e5c713b271394ff9de15a708990f75fabdf00cb.jpg"},
  {n:"بشاميل",c:"نجرسكو",p:50,i:"https://kimi-web-img.moonshot.cn/img/eatwellabi.com/d415cd08653dd9db9f647f637aa724945593c7e6.jpg"},
  {n:"مكرونه جمبري",c:"نجرسكو",p:90,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/ac32c4d72e53a5d8eccde6f3a37c1edf01ea7c52.jpg"},
  // ===== الحواوشي =====
  {n:"حواوشي لحمه كبير",c:"الحواوشي",p:40,i:"https://kimi-web-img.moonshot.cn/img/vid.alarabiya.net/e9404c6a641ed0f6aaf9d352a411f39be43f99f8.jpg"},
  {n:"حواوشي لحمه موتزريلا كبير",c:"الحواوشي",p:55,i:"https://kimi-web-img.moonshot.cn/img/www.khalty.net/e3604b681d65f37168ddebf2499aab33051250ea.jpg"},
  // ===== الفراخ المشويه =====
  {n:"ربع فرخه ورك",c:"الفراخ المشويه",p:75,i:"https://kimi-web-img.moonshot.cn/img/www.eldahan.com/ce3140aa9d42485c510e37e14153124c1768a4ef.jpg"},
  {n:"نصف فرخه",c:"الفراخ المشويه",p:160,i:"https://kimi-web-img.moonshot.cn/img/www.eldahan.com/99265e6a73b5870130fa0c845bb95f1f01e94fd9.jpg"},
  {n:"ربع فرخه صدر",c:"الفراخ المشويه",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.eldahan.com/e9a9bf220cbbb6cd9a82f55c5365dc24952d9f13.jpg"},
  {n:"فرخه كامله",c:"الفراخ المشويه",p:300,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/e13a2d27dfcb231b143d1bd20461e5313baadd3d.jpg"},
  // ===== كريب لحوم =====
  {n:"كريب شاورما لحمه",c:"كريب لحوم",p:70,i:"https://kimi-web-img.moonshot.cn/img/papai.online/c52fdda58635b0303d954daa0e99541f3376a190.png"},
  {n:"كريب برجر",c:"كريب لحوم",p:60,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/11fe503b7641f5c568deab459ad01f2263ed3ccd.jpg"},
  {n:"كريب كفته",c:"كريب لحوم",p:55,i:"https://kimi-web-img.moonshot.cn/img/www.khalty.net/6ea1028174a8c4849b616388486c827cef005bd4.webp"},
  {n:"كريب سوسيس",c:"كريب لحوم",p:55,i:"https://kimi-web-img.moonshot.cn/img/img-global.cpcdn.com/9357be0040a6a7cdefc915df5fe4fc3d301bff49.jpg"},
  {n:"كريب كفته سوسيس برجر",c:"كريب لحوم",p:70,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/45d24e873fcbdadb4e456a7125b3ce487f9d508d.png"},
  {n:"كريب مشروم",c:"كريب لحوم",p:55,i:"https://kimi-web-img.moonshot.cn/img/media.gemini.media/a534eed6f19f7460bc81676f93dd37867469daf3.jpg"},
  {n:"كريب مشكل لحوم",c:"كريب لحوم",p:80,i:"https://kimi-web-img.moonshot.cn/img/img.ananinja.com/45d24e873fcbdadb4e456a7125b3ce487f9d508d.png"},
  {n:"كريب سجق",c:"كريب لحوم",p:60,i:"https://kimi-web-img.moonshot.cn/img/majesty.com.eg/88540b55a042f06686901e1f7f10490047f16ebd.png"},
  // ===== كريب بطاطس وجبن =====
  {n:"كريب بطاطس رول",c:"كريب بطاطس وجبن",p:45,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
  {n:"كريب بطاطس",c:"كريب بطاطس وجبن",p:35,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/8c5d9485b13b2034dcb2436efbe418b2231852aa.jpg"},
  {n:"كريب بطاطس شيدر",c:"كريب بطاطس وجبن",p:50,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/1328cbc1ac598a894242ad93c874e70ecee20796.jpg"},
  {n:"كريب مشكل جبن",c:"كريب بطاطس وجبن",p:45,i:"https://kimi-web-img.moonshot.cn/img/papai.online/9002b21dabd68a86e472795d70b2bbfc0032f62f.png"},
  // ===== كريب فراخ =====
  {n:"كريب بانيه",c:"كريب فراخ",p:60,i:"https://kimi-web-img.moonshot.cn/img/www.elqareanews.com/0385afcb2627466e6602e738a47995dfaf0ab81d.jpeg"},
  {n:"كريب استربس",c:"كريب فراخ",p:70,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/160366531c6b88ef02497a2ca6c5c14385012cbf.jpg"},
  {n:"كريب شاورما",c:"كريب فراخ",p:75,i:"https://kimi-web-img.moonshot.cn/img/papai.online/94e63da4c2d8cb36b6706a17c72c4291e1e664bc.png"},
  {n:"كريب استربس + شيش",c:"كريب فراخ",p:80,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/160366531c6b88ef02497a2ca6c5c14385012cbf.jpg"},
  {n:"كريب شاورما + استربس",c:"كريب فراخ",p:75,i:"https://kimi-web-img.moonshot.cn/img/papai.online/94e63da4c2d8cb36b6706a17c72c4291e1e664bc.png"},
  {n:"كريب فاهيتا دجاج",c:"كريب فراخ",p:80,i:"https://kimi-web-img.moonshot.cn/img/cdn.supermama.me/349b93a1e4d1252417d93f99cb1587cca7fcabdd.webp"},
  {n:"كريب مشكل فراخ",c:"كريب فراخ",p:80,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/160366531c6b88ef02497a2ca6c5c14385012cbf.jpg"},
  {n:"كريب شيش",c:"كريب فراخ",p:75,i:"https://kimi-web-img.moonshot.cn/img/hero-food.com/de37fd344e60a43b8d9e4ef1a31ce025c0aeba3b.jpg"},
  // ===== كريب حلو =====
  {n:"كريب هوهوز + شيكولاته",c:"كريب حلو",p:40,i:"https://kimi-web-img.moonshot.cn/img/www.jonathangarnier.com/4ffb3bb060f41d2e20413f388d6baa16840feb95.jpg"},
  {n:"كريب موز + شيكولاته",c:"كريب حلو",p:40,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/a4277754ba23bc7f636cc613e71834b69f9de9dc.jpg"},
  {n:"كريب مكسرات + شيكولاته",c:"كريب حلو",p:50,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/5116c13417940069d8aca2d1b7126bb5ff51b070.jpg"},
  {n:"كريب موز + مكسرات + عسل",c:"كريب حلو",p:55,i:"https://kimi-web-img.moonshot.cn/img/kitchen.sayidaty.net/5116c13417940069d8aca2d1b7126bb5ff51b070.jpg"},
  // ===== حلو هند =====
  {n:"ارز بلبن صغير",c:"حلو هند",p:15,i:"roz-blaban.png"},
  {n:"ارز بلبن كبير",c:"حلو هند",p:20,i:"roz-blaban.png"},
  {n:"ارز بلبن فرن",c:"حلو هند",p:20,i:"roz-blaban.png"},
  {n:"ارز بلبن لوتس",c:"حلو هند",p:25,i:"roz-blaban.png"},
  {n:"ارز بلبن اوريو",c:"حلو هند",p:25,i:"roz-blaban.png"},
  {n:"ارز بلبن مكسرات",c:"حلو هند",p:25,i:"roz-blaban.png"},
  {n:"ام علي مكسرات",c:"حلو هند",p:25,i:"om-ali.png"},
  {n:"مهلبية",c:"حلو هند",p:12,i:"mahalabia.png"},
  {n:"جيلي مهلبية",c:"حلو هند",p:20,i:"jelly.png"},
  {n:"كريم كارميل",c:"حلو هند",p:25,i:"roz-blaban.png"},
  {n:"جيلي ساده",c:"حلو هند",p:15,i:"jelly.png"},
  // ===== اضافات هند =====
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

let currentFilter = "الكل";
let cart = []; // array of {item, qty}
const grid = document.getElementById("menuGrid");

function renderMenu() {
  const q = (document.getElementById("searchInput")?.value || "").trim();
  const data = menu.filter(x => {
    const matchFilter = currentFilter === "الكل" || x.c === currentFilter;
    const matchSearch = !q || x.n.includes(q) || x.c.includes(q);
    return matchFilter && matchSearch;
  });

  if (data.length === 0) {
    grid.innerHTML = '<p style="color:#81c784;text-align:center;padding:40px;">مفيش نتائج مطابقة للبحث.</p>';
    return;
  }

  grid.innerHTML = data.map(x => {
    const idx = menu.indexOf(x);
    const fallback = "https://placehold.co/300x200/0d2818/e65100?text=" + encodeURIComponent(x.n) + "&font=cairo";
    return `
      <article class="menu-item">
        <div class="item-img-wrap">
          <img src="${x.i}" alt="${x.n}" loading="lazy" onerror="this.src='${fallback}'">
        </div>
        <h3>${x.n}</h3>
        <p>${x.c} • طعم أصيل وجودة مضمونة</p>
        <div class="price-row">
          <span class="price">${x.p} ج</span>
          <button class="add-btn" onclick="addToCart(${idx})">+ أضف</button>
        </div>
      </article>
    `;
  }).join("");
}

document.querySelectorAll("#filters button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#filters button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    currentFilter = b.dataset.filter;
    renderMenu();
  });
});

function filterMenu(cat) {
  currentFilter = cat;
  document.querySelectorAll("#filters button").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === cat);
  });
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  renderMenu();
}

function addToCart(i) {
  const item = menu[i];
  const existing = cart.find(c => c.item.n === item.n);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({item, qty: 1});
  }
  updateCart();
  showToast("اتضاف للسلة 🔥");
}

function addOfferToCart(i) {
  const offer = offers[i];
  const existing = cart.find(c => c.item.n === offer.n);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({item: offer, qty: 1});
  }
  updateCart();
  showToast("العرض اتضاف للسلة 🎉");
}

function updateCart() {
  const totalQty = cart.reduce((a, c) => a + c.qty, 0);
  document.getElementById("cartCount").textContent = totalQty;

  if (cart.length === 0) {
    document.getElementById("cartItems").innerHTML = "<p style='color:#81c784;text-align:center;margin-top:50px'>السلة فاضية.. اطلب حاجة حلوة 😋</p>";
  } else {
    document.getElementById("cartItems").innerHTML = cart.map((c, i) => `
      <div class="cart-line">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${c.item.i || ''}" class="cart-thumb" alt="" onerror="this.style.display='none'">
          <div>
            <b>${c.item.n}</b>
            <small style="display:block;color:#81c784;">${c.item.c || 'عرض'}</small>
            ${c.qty > 1 ? `<span style="color:#e65100;font-weight:800;">×${c.qty}</span>` : ''}
          </div>
        </div>
        <div style="text-align:center;">
          <b>${c.item.p * c.qty} ج</b><br>
          <button onclick="removeItem(${i})" style="background:#1b5e20;color:#fff;border:0;border-radius:7px;padding:5px 8px;cursor:pointer;margin-top:4px;">حذف</button>
        </div>
      </div>
    `).join("");
  }

  const total = cart.reduce((a, c) => a + (c.item.p * c.qty), 0);
  document.getElementById("cartTotal").textContent = total + " جنيه";
}

function removeItem(i) {
  cart[i].qty--;
  if (cart[i].qty <= 0) {
    cart.splice(i, 1);
  }
  updateCart();
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
}

function closeCart(e) {
  if (!e || e.target.id === "cartDrawer") {
    document.getElementById("cartDrawer").classList.remove("open");
  }
}

function checkout() {
  if (!cart.length) {
    showToast("السلة فاضية 😅");
    return;
  }
  const total = cart.reduce((a, c) => a + (c.item.p * c.qty), 0);
  const items = cart.map(c => c.qty > 1 ? `${c.item.n} (×${c.qty})` : c.item.n).join("، ");
  const msg = encodeURIComponent(`مرحباً كشري هند 👋\nعايز أطلب: ${items}\nالإجمالي التقريبي: ${total} جنيه`);
  window.open(`https://wa.me/201210195153?text=${msg}`, "_blank");
}

function showToast(t) {
  const el = document.getElementById("toast");
  el.textContent = t;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("open");
}

renderMenu();
updateCart();
