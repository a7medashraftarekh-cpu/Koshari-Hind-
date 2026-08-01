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
  {n:"بيتزا زنجر (Small)",c:"بيتزا شرقي",p:95,i:"https://kimi-web-img.moonshot.cn/img/www.sarcasticcooking.com/8dedd14278dce80bc9832def1fcf35dbb1972133.jpg"},
  {n:"بيتزا زنجر (Medium)",c:"بيتزا شرقي",p:125,i:"https://kimi-web-img.moonshot.cn/img/www.sarcasticcooking.com/8dedd14278dce80bc9832def1fcf35dbb1972133.jpg"},
  {n:"بيتزا زنجر (Large)",c:"بيتزا شرقي",p:160,i:"https://kimi-web-img.moonshot.cn/img/www.sarcasticcooking.com/8dedd14278dce80bc9832def1fcf35dbb1972133.jpg"},
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
  // ===== بيتزا ايطالي =====
  {n:"بيتزا ايطالي مارجريتا ساده (Small)",c:"بيتزا ايطالي",p:70,i:"https://kimi-web-img.moonshot.cn/img/assets.tmecosys.cn/ca073b1e0ea2a51866b6a17beb85a07b6b674d88.jpg"},
  {n:"بيتزا ايطالي مارجريتا ساده (Medium)",c:"بيتزا ايطالي",p:95,i:"https://kimi-web-img.moonshot.cn/img/assets.tmecosys.cn/ca073b1e0ea2a51866b6a17beb85a07b6b674d88.jpg"},
  {n:"بيتزا ايطالي مارجريتا ساده (Large)",c:"بيتزا ايطالي",p:130,i:"https://kimi-web-img.moonshot.cn/img/assets.tmecosys.cn/ca073b1e0ea2a51866b6a17beb85a07b6b674d88.jpg"},
  {n:"بيتزا ايطالي مارجريتا خضراوات (Small)",c:"بيتزا ايطالي",p:75,i:"https://kimi-web-img.moonshot.cn/img/www.superhealthykids.com/b13d26f9557dd3aeb3b46d5a1dd190b51914c175.jpg"},
  {n:"بيتزا ايطالي مارجريتا خضراوات (Medium)",c:"بيتزا ايطالي",p:105,i:"https://kimi-web-img.moonshot.cn/img/www.superhealthykids.com/b13d26f9557dd3aeb3b46d5a1dd190b51914c175.jpg"},
  {n:"بيتزا ايطالي مارجريتا خضراوات (Large)",c:"بيتزا ايطالي",p:140,i:"https://kimi-web-img.moonshot.cn/img/www.superhealthykids.com/b13d26f9557dd3aeb3b46d5a1dd190b51914c175.jpg"},
  {n:"بيتزا ايطالي ميكس جبن (Small)",c:"بيتزا ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/leitesculinaria.com/8cbc2ae0375f8f67337db6d660accc65d9251318.jpg"},
  {n:"بيتزا ايطالي ميكس جبن (Medium)",c:"بيتزا ايطالي",p:120,i:"https://kimi-web-img.moonshot.cn/img/leitesculinaria.com/8cbc2ae0375f8f67337db6d660accc65d9251318.jpg"},
  {n:"بيتزا ايطالي ميكس جبن (Large)",c:"بيتزا ايطالي",p:170,i:"https://kimi-web-img.moonshot.cn/img/leitesculinaria.com/8cbc2ae0375f8f67337db6d660accc65d9251318.jpg"},
  {n:"بيتزا ايطالي مشروم (Small)",c:"بيتزا ايطالي",p:85,i:"https://kimi-web-img.moonshot.cn/img/leitesculinaria.com/8cbc2ae0375f8f67337db6d660accc65d9251318.jpg"},
  {n:"بيتزا ايطالي مشروم (Medium)",c:"بيتزا ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/leitesculinaria.com/8cbc2ae0375f8f67337db6d660accc65d9251318.jpg"},
  {n:"بيتزا ايطالي مشروم (Large)",c:"بيتزا ايطالي",p:150,i:"https://kimi-web-img.moonshot.cn/img/leitesculinaria.com/8cbc2ae0375f8f67337db6d660accc65d9251318.jpg"},
  {n:"بيتزا ايطالي سجق (Small)",c:"بيتزا ايطالي",p:85,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/1d7a7db80bf4cf590b4ea40bf73ac1cf4bd35172.webp"},
  {n:"بيتزا ايطالي سجق (Medium)",c:"بيتزا ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/1d7a7db80bf4cf590b4ea40bf73ac1cf4bd35172.webp"},
  {n:"بيتزا ايطالي سجق (Large)",c:"بيتزا ايطالي",p:150,i:"https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/1d7a7db80bf4cf590b4ea40bf73ac1cf4bd35172.webp"},
  {n:"بيتزا ايطالي برجر (Small)",c:"بيتزا ايطالي",p:85,i:"https://kimi-web-img.moonshot.cn/img/cdn.apartmenttherapy.info/67351de0b4263d0d2f2323294bcc3ee6e53292aa"},
  {n:"بيتزا ايطالي برجر (Medium)",c:"بيتزا ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/cdn.apartmenttherapy.info/67351de0b4263d0d2f2323294bcc3ee6e53292aa"},
  {n:"بيتزا ايطالي برجر (Large)",c:"بيتزا ايطالي",p:150,i:"https://kimi-web-img.moonshot.cn/img/cdn.apartmenttherapy.info/67351de0b4263d0d2f2323294bcc3ee6e53292aa"},
  {n:"بيتزا ايطالي لحمه (Small)",c:"بيتزا ايطالي",p:85,i:"https://kimi-web-img.moonshot.cn/img/canadabeef.ca/6bc6c5f73e901dc61209a39832f4d7fd39c7bef8.jpg"},
  {n:"بيتزا ايطالي لحمه (Medium)",c:"بيتزا ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/canadabeef.ca/6bc6c5f73e901dc61209a39832f4d7fd39c7bef8.jpg"},
  {n:"بيتزا ايطالي لحمه (Large)",c:"بيتزا ايطالي",p:150,i:"https://kimi-web-img.moonshot.cn/img/canadabeef.ca/6bc6c5f73e901dc61209a39832f4d7fd39c7bef8.jpg"},
  {n:"بيتزا ايطالي سوسيس (Small)",c:"بيتزا ايطالي",p:85,i:"https://kimi-web-img.moonshot.cn/img/atsloanestable.com/54d4e6f92e7d5cfae9453f04e587e261676702af.jpg"},
  {n:"بيتزا ايطالي سوسيس (Medium)",c:"بيتزا ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/atsloanestable.com/54d4e6f92e7d5cfae9453f04e587e261676702af.jpg"},
  {n:"بيتزا ايطالي سوسيس (Large)",c:"بيتزا ايطالي",p:150,i:"https://kimi-web-img.moonshot.cn/img/atsloanestable.com/54d4e6f92e7d5cfae9453f04e587e261676702af.jpg"},
  {n:"بيتزا ايطالي بسطرمة (Small)",c:"بيتزا ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/canadabeef.ca/6bc6c5f73e901dc61209a39832f4d7fd39c7bef8.jpg"},
  {n:"بيتزا ايطالي بسطرمة (Medium)",c:"بيتزا ايطالي",p:125,i:"https://kimi-web-img.moonshot.cn/img/canadabeef.ca/6bc6c5f73e901dc61209a39832f4d7fd39c7bef8.jpg"},
  {n:"بيتزا ايطالي بسطرمة (Large)",c:"بيتزا ايطالي",p:170,i:"https://kimi-web-img.moonshot.cn/img/canadabeef.ca/6bc6c5f73e901dc61209a39832f4d7fd39c7bef8.jpg"},
  {n:"بيتزا ايطالي سوبر سوبريم (Small)",c:"بيتزا ايطالي",p:105,i:"https://kimi-web-img.moonshot.cn/img/goodcheapeats.com/2ad582e0eccddf2b536ebc9f8f93bf078cef05e1.jpg"},
  {n:"بيتزا ايطالي سوبر سوبريم (Medium)",c:"بيتزا ايطالي",p:130,i:"https://kimi-web-img.moonshot.cn/img/goodcheapeats.com/2ad582e0eccddf2b536ebc9f8f93bf078cef05e1.jpg"},
  {n:"بيتزا ايطالي سوبر سوبريم (Large)",c:"بيتزا ايطالي",p:175,i:"https://kimi-web-img.moonshot.cn/img/goodcheapeats.com/2ad582e0eccddf2b536ebc9f8f93bf078cef05e1.jpg"},
  {n:"بيتزا ايطالي فراخ شاورما (Small)",c:"بيتزا ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ايطالي فراخ شاورما (Medium)",c:"بيتزا ايطالي",p:130,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ايطالي فراخ شاورما (Large)",c:"بيتزا ايطالي",p:165,i:"https://kimi-web-img.moonshot.cn/img/theodehlicious.com/ffab4fd8658004ea95e02470f8cdc4d4df3e1283.jpg"},
  {n:"بيتزا ايطالي فراخ باربيكيو (Small)",c:"بيتزا ايطالي",p:105,i:"https://kimi-web-img.moonshot.cn/img/www.allrecipes.com/8ddff52076db2414c522f1eec72b6c7dcfed2ebb.jpg"},
  {n:"بيتزا ايطالي فراخ باربيكيو (Medium)",c:"بيتزا ايطالي",p:140,i:"https://kimi-web-img.moonshot.cn/img/www.allrecipes.com/8ddff52076db2414c522f1eec72b6c7dcfed2ebb.jpg"},
  {n:"بيتزا ايطالي فراخ باربيكيو (Large)",c:"بيتزا ايطالي",p:175,i:"https://kimi-web-img.moonshot.cn/img/www.allrecipes.com/8ddff52076db2414c522f1eec72b6c7dcfed2ebb.jpg"},
  {n:"بيتزا ايطالي ميكس فراخ (Small)",c:"بيتزا ايطالي",p:105,i:"https://kimi-web-img.moonshot.cn/img/www.justataste.com/15f866c04dd4ddd59cae0376b54a8db3c62986f5.jpg"},
  {n:"بيتزا ايطالي ميكس فراخ (Medium)",c:"بيتزا ايطالي",p:140,i:"https://kimi-web-img.moonshot.cn/img/www.justataste.com/15f866c04dd4ddd59cae0376b54a8db3c62986f5.jpg"},
  {n:"بيتزا ايطالي ميكس فراخ (Large)",c:"بيتزا ايطالي",p:175,i:"https://kimi-web-img.moonshot.cn/img/www.justataste.com/15f866c04dd4ddd59cae0376b54a8db3c62986f5.jpg"},
  {n:"بيتزا ايطالي زنجر (Small)",c:"بيتزا ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/490311610eba5f1a082e65c75963b0d74a087b64.jpg"},
  {n:"بيتزا ايطالي زنجر (Medium)",c:"بيتزا ايطالي",p:130,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/490311610eba5f1a082e65c75963b0d74a087b64.jpg"},
  {n:"بيتزا ايطالي زنجر (Large)",c:"بيتزا ايطالي",p:165,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/490311610eba5f1a082e65c75963b0d74a087b64.jpg"},
  {n:"بيتزا ايطالي شيش (Small)",c:"بيتزا ايطالي",p:100,i:"https://kimi-web-img.moonshot.cn/img/media-cdn.tripadvisor.com/4dc5977e76f3321ff8ff3c801680e7c30d814ddf.jpg"},
  {n:"بيتزا ايطالي شيش (Medium)",c:"بيتزا ايطالي",p:130,i:"https://kimi-web-img.moonshot.cn/img/media-cdn.tripadvisor.com/4dc5977e76f3321ff8ff3c801680e7c30d814ddf.jpg"},
  {n:"بيتزا ايطالي شيش (Large)",c:"بيتزا ايطالي",p:160,i:"https://kimi-web-img.moonshot.cn/img/media-cdn.tripadvisor.com/4dc5977e76f3321ff8ff3c801680e7c30d814ddf.jpg"},
  {n:"بيتزا ايطالي تونه مفتته (Small)",c:"بيتزا ايطالي",p:95,i:"https://kimi-web-img.moonshot.cn/img/www.bylena.com/900bdbbfff8d6b954e5835d44f6f638ec5786478.jpg"},
  {n:"بيتزا ايطالي تونه مفتته (Medium)",c:"بيتزا ايطالي",p:125,i:"https://kimi-web-img.moonshot.cn/img/www.bylena.com/900bdbbfff8d6b954e5835d44f6f638ec5786478.jpg"},
  {n:"بيتزا ايطالي تونه مفتته (Large)",c:"بيتزا ايطالي",p:155,i:"https://kimi-web-img.moonshot.cn/img/www.bylena.com/900bdbbfff8d6b954e5835d44f6f638ec5786478.jpg"},
  {n:"بيتزا ايطالي تونه قطع (Medium)",c:"بيتزا ايطالي",p:135,i:"https://kimi-web-img.moonshot.cn/img/sandraseasycooking.com/fe13fddde280d4fded60e3462a789b25b692ce1f.png"},
  {n:"بيتزا ايطالي تونه قطع (Large)",c:"بيتزا ايطالي",p:170,i:"https://kimi-web-img.moonshot.cn/img/sandraseasycooking.com/fe13fddde280d4fded60e3462a789b25b692ce1f.png"},
  {n:"بيتزا ايطالي جمبري (Small)",c:"بيتزا ايطالي",p:110,i:"https://kimi-web-img.moonshot.cn/img/theblondcook.com/31b7749a74de60a5401c6ef48c20f4fc29c60950.jpg"},
  {n:"بيتزا ايطالي جمبري (Medium)",c:"بيتزا ايطالي",p:140,i:"https://kimi-web-img.moonshot.cn/img/theblondcook.com/31b7749a74de60a5401c6ef48c20f4fc29c60950.jpg"},
  {n:"بيتزا ايطالي جمبري (Large)",c:"بيتزا ايطالي",p:180,i:"https://kimi-web-img.moonshot.cn/img/theblondcook.com/31b7749a74de60a5401c6ef48c20f4fc29c60950.jpg"},
  {n:"بيتزا ايطالي سي فود (Small)",c:"بيتزا ايطالي",p:115,i:"https://kimi-web-img.moonshot.cn/img/theblondcook.com/31b7749a74de60a5401c6ef48c20f4fc29c60950.jpg"},
  {n:"بيتزا ايطالي سي فود (Medium)",c:"بيتزا ايطالي",p:145,i:"https://kimi-web-img.moonshot.cn/img/theblondcook.com/31b7749a74de60a5401c6ef48c20f4fc29c60950.jpg"},
  {n:"بيتزا ايطالي سي فود (Large)",c:"بيتزا ايطالي",p:185,i:"https://kimi-web-img.moonshot.cn/img/theblondcook.com/31b7749a74de60a5401c6ef48c20f4fc29c60950.jpg"},
  {n:"بيتزا ايطالي هند (Small)",c:"بيتزا ايطالي",p:115,i:"https://kimi-web-img.moonshot.cn/img/goodcheapeats.com/2ad582e0eccddf2b536ebc9f8f93bf078cef05e1.jpg"},
  {n:"بيتزا ايطالي هند (Medium)",c:"بيتزا ايطالي",p:145,i:"https://kimi-web-img.moonshot.cn/img/goodcheapeats.com/2ad582e0eccddf2b536ebc9f8f93bf078cef05e1.jpg"},
  {n:"بيتزا ايطالي هند (Large)",c:"بيتزا ايطالي",p:190,i:"https://kimi-web-img.moonshot.cn/img/goodcheapeats.com/2ad582e0eccddf2b536ebc9f8f93bf078cef05e1.jpg"},
  // ===== فطير حادق =====
  {n:"فطيرة سجق (Medium)",c:"فطير حادق",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.layersofhappiness.com/61195632d6da34c167329a5337fc98fcf2046a59.jpg"},
  {n:"فطيرة سجق (Large)",c:"فطير حادق",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.layersofhappiness.com/61195632d6da34c167329a5337fc98fcf2046a59.jpg"},
  {n:"فطيرة لحمه (Medium)",c:"فطير حادق",p:110,i:"https://kimi-web-img.moonshot.cn/img/d31qjkbvvkyanm.cloudfront.net/449e7fa004bf8e21d53e7ef7f30c7a88dfee7e89.jpg"},
  {n:"فطيرة لحمه (Large)",c:"فطير حادق",p:150,i:"https://kimi-web-img.moonshot.cn/img/d31qjkbvvkyanm.cloudfront.net/449e7fa004bf8e21d53e7ef7f30c7a88dfee7e89.jpg"},
  {n:"فطيرة سوسيس (Medium)",c:"فطير حادق",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.layersofhappiness.com/61195632d6da34c167329a5337fc98fcf2046a59.jpg"},
  {n:"فطيرة سوسيس (Large)",c:"فطير حادق",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.layersofhappiness.com/61195632d6da34c167329a5337fc98fcf2046a59.jpg"},
  {n:"فطيرة برجر (Medium)",c:"فطير حادق",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.puffpastry.com/7c323edfe3873878ef710eb2c1ff239ab016a892.png"},
  {n:"فطيرة برجر (Large)",c:"فطير حادق",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.puffpastry.com/7c323edfe3873878ef710eb2c1ff239ab016a892.png"},
  {n:"فطيرة مشروم (Medium)",c:"فطير حادق",p:110,i:"https://kimi-web-img.moonshot.cn/img/www.ifyougiveablondeakitchen.com/48cc826725444e26754ddc92001fe098374c72e0.jpg"},
  {n:"فطيرة مشروم (Large)",c:"فطير حادق",p:150,i:"https://kimi-web-img.moonshot.cn/img/www.ifyougiveablondeakitchen.com/48cc826725444e26754ddc92001fe098374c72e0.jpg"},
  {n:"فطيرة بسطرمه (Medium)",c:"فطير حادق",p:120,i:"https://kimi-web-img.moonshot.cn/img/w2.chabad.org/4e490c8784c6b8aac63eaaa4f340f306d18b0a42.jpg"},
  {n:"فطيرة بسطرمه (Large)",c:"فطير حادق",p:165,i:"https://kimi-web-img.moonshot.cn/img/w2.chabad.org/4e490c8784c6b8aac63eaaa4f340f306d18b0a42.jpg"},
  {n:"فطيرة سوبر سوبريم (Medium)",c:"فطير حادق",p:125,i:"https://kimi-web-img.moonshot.cn/img/www.tastingtable.com/109072b8cfccd2a6829247b0c4519eb1b2028d89.jpg"},
  {n:"فطيرة سوبر سوبريم (Large)",c:"فطير حادق",p:170,i:"https://kimi-web-img.moonshot.cn/img/www.tastingtable.com/109072b8cfccd2a6829247b0c4519eb1b2028d89.jpg"},
  {n:"فطيرة زنجر (Medium)",c:"فطير حادق",p:125,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/490311610eba5f1a082e65c75963b0d74a087b64.jpg"},
  {n:"فطيرة زنجر (Large)",c:"فطير حادق",p:160,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/490311610eba5f1a082e65c75963b0d74a087b64.jpg"},
  {n:"فطيرة شيش (Medium)",c:"فطير حادق",p:125,i:"https://kimi-web-img.moonshot.cn/img/app.ckbk.com/84503e8576a7c65de6f2e74e2580a7f609a5ff18"},
  {n:"فطيرة شيش (Large)",c:"فطير حادق",p:160,i:"https://kimi-web-img.moonshot.cn/img/app.ckbk.com/84503e8576a7c65de6f2e74e2580a7f609a5ff18"},
  {n:"فطيرة ميكس فراخ (Medium)",c:"فطير حادق",p:135,i:"https://kimi-web-img.moonshot.cn/img/app.ckbk.com/84503e8576a7c65de6f2e74e2580a7f609a5ff18"},
  {n:"فطيرة ميكس فراخ (Large)",c:"فطير حادق",p:170,i:"https://kimi-web-img.moonshot.cn/img/app.ckbk.com/84503e8576a7c65de6f2e74e2580a7f609a5ff18"},
  {n:"فطيرة شاورما (Medium)",c:"فطير حادق",p:125,i:"https://kimi-web-img.moonshot.cn/img/app.ckbk.com/84503e8576a7c65de6f2e74e2580a7f609a5ff18"},
  {n:"فطيرة شاورما (Large)",c:"فطير حادق",p:160,i:"https://kimi-web-img.moonshot.cn/img/app.ckbk.com/84503e8576a7c65de6f2e74e2580a7f609a5ff18"},
  {n:"فطيرة تونه قطع (Medium)",c:"فطير حادق",p:135,i:"https://kimi-web-img.moonshot.cn/img/www.genovaseafood.com/2152945ee59e131f7d2c0ebede6f9979f38d13a7.jpg"},
  {n:"فطيرة تونه قطع (Large)",c:"فطير حادق",p:170,i:"https://kimi-web-img.moonshot.cn/img/www.genovaseafood.com/2152945ee59e131f7d2c0ebede6f9979f38d13a7.jpg"},
  {n:"فطيرة جمبري (Medium)",c:"فطير حادق",p:135,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/655cfeccc60bbd5da2eaec46203e1d651857afe2.jpg"},
  {n:"فطيرة جمبري (Large)",c:"فطير حادق",p:170,i:"https://kimi-web-img.moonshot.cn/img/i0.wp.com/655cfeccc60bbd5da2eaec46203e1d651857afe2.jpg"},
  {n:"فطيرة تونه مفتته (Medium)",c:"فطير حادق",p:120,i:"https://kimi-web-img.moonshot.cn/img/www.genovaseafood.com/2152945ee59e131f7d2c0ebede6f9979f38d13a7.jpg"},
  {n:"فطيرة تونه مفتته (Large)",c:"فطير حادق",p:155,i:"https://kimi-web-img.moonshot.cn/img/www.genovaseafood.com/2152945ee59e131f7d2c0ebede6f9979f38d13a7.jpg"},
  {n:"فطيرة مشكل جبن (Medium)",c:"فطير حادق",p:115,i:"https://kimi-web-img.moonshot.cn/img/images.immediate.co.uk/47debfeedfd513ebf53a36b3167077af25019fd0.jpg"},
  {n:"فطيرة مشكل جبن (Large)",c:"فطير حادق",p:160,i:"https://kimi-web-img.moonshot.cn/img/images.immediate.co.uk/47debfeedfd513ebf53a36b3167077af25019fd0.jpg"},
  {n:"فطيرة سي فود (Medium)",c:"فطير حادق",p:140,i:"https://kimi-web-img.moonshot.cn/img/img.delicious.com.au/fa66af0793fa940ac8c4e9d50d647e1d211b3668.jpg"},
  {n:"فطيرة سي فود (Large)",c:"فطير حادق",p:180,i:"https://kimi-web-img.moonshot.cn/img/img.delicious.com.au/fa66af0793fa940ac8c4e9d50d647e1d211b3668.jpg"},
  {n:"فطيرة هند (Medium)",c:"فطير حادق",p:145,i:"https://kimi-web-img.moonshot.cn/img/img.delicious.com.au/fa66af0793fa940ac8c4e9d50d647e1d211b3668.jpg"},
  {n:"فطيرة هند (Large)",c:"فطير حادق",p:190,i:"https://kimi-web-img.moonshot.cn/img/img.delicious.com.au/fa66af0793fa940ac8c4e9d50d647e1d211b3668.jpg"},
  // ===== فطير حلو =====
  {n:"فطيرة بغاشة (Medium)",c:"فطير حلو",p:50,i:"https://kimi-web-img.moonshot.cn/img/www.recipetineats.com/532af3c103ddddddc1600b0fb2638ea871b22b9e.jpg"},
  {n:"فطيرة بغاشة (Large)",c:"فطير حلو",p:75,i:"https://kimi-web-img.moonshot.cn/img/www.recipetineats.com/532af3c103ddddddc1600b0fb2638ea871b22b9e.jpg"},
  {n:"فطيرة كاستر (Medium)",c:"فطير حلو",p:60,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/85dbfda50f69f75c64e70ac94c8aea3981b90721.jpg"},
  {n:"فطيرة كاستر (Large)",c:"فطير حلو",p:85,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/85dbfda50f69f75c64e70ac94c8aea3981b90721.jpg"},
  {n:"فطيرة بسبوسه وكنافة (Medium)",c:"فطير حلو",p:80,i:"https://kimi-web-img.moonshot.cn/img/amiraspantry.com/c4165ce50ee0892407ba01d11167f3ae6d5d7c92.jpg"},
  {n:"فطيرة بسبوسه وكنافة (Large)",c:"فطير حلو",p:110,i:"https://kimi-web-img.moonshot.cn/img/amiraspantry.com/c4165ce50ee0892407ba01d11167f3ae6d5d7c92.jpg"},
  {n:"فطيرة بسبوسه وكنافة ومكسرات (Medium)",c:"فطير حلو",p:90,i:"https://kimi-web-img.moonshot.cn/img/www.exception-group.com/a84a2fdd72f0a4068552e1eb36ee97b9e84444ca.webp"},
  {n:"فطيرة بسبوسه وكنافة ومكسرات (Large)",c:"فطير حلو",p:120,i:"https://kimi-web-img.moonshot.cn/img/www.exception-group.com/a84a2fdd72f0a4068552e1eb36ee97b9e84444ca.webp"},
  {n:"فطيرة بالقشطه والعسل (Medium)",c:"فطير حلو",p:85,i:"https://kimi-web-img.moonshot.cn/img/www.dougheyed.com/8e17ba7f160380e3df70970237fc22b7c5c1a165.jpg"},
  {n:"فطيرة بالقشطه والعسل (Large)",c:"فطير حلو",p:115,i:"https://kimi-web-img.moonshot.cn/img/www.dougheyed.com/8e17ba7f160380e3df70970237fc22b7c5c1a165.jpg"},
  {n:"فطيرة بالمكسرات (Medium)",c:"فطير حلو",p:75,i:"https://kimi-web-img.moonshot.cn/img/www.exception-group.com/a84a2fdd72f0a4068552e1eb36ee97b9e84444ca.webp"},
  {n:"فطيرة بالمكسرات (Large)",c:"فطير حلو",p:100,i:"https://kimi-web-img.moonshot.cn/img/www.exception-group.com/a84a2fdd72f0a4068552e1eb36ee97b9e84444ca.webp"},
  {n:"فطيرة شيكولاتة (Medium)",c:"فطير حلو",p:85,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/c89aeb86f3f82dbe89d07437a69073950c2857dd.jpg"},
  {n:"فطيرة شيكولاتة (Large)",c:"فطير حلو",p:115,i:"https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/c89aeb86f3f82dbe89d07437a69073950c2857dd.jpg"},
  {n:"فطيرة شيكولاتة وموز (Medium)",c:"فطير حلو",p:90,i:"https://kimi-web-img.moonshot.cn/img/www.halfbakedharvest.com/7bb9b31d805437363655af81d7fefb8af5af2ca7.jpg"},
  {n:"فطيرة شيكولاتة وموز (Large)",c:"فطير حلو",p:125,i:"https://kimi-web-img.moonshot.cn/img/www.halfbakedharvest.com/7bb9b31d805437363655af81d7fefb8af5af2ca7.jpg"},
  {n:"فطيرة مشلتت (Medium)",c:"فطير حلو",p:110,i:"https://kimi-web-img.moonshot.cn/img/akispetretzikis.com/88d650ccc72f66027d251d9ab3848f71e2f1ca4d.jpg"},
  {n:"فطيرة مشلتت (Large)",c:"فطير حلو",p:140,i:"https://kimi-web-img.moonshot.cn/img/akispetretzikis.com/88d650ccc72f66027d251d9ab3848f71e2f1ca4d.jpg"},
  // ===== فطير الكيري =====
  {n:"فطيرة سجق كيري (Medium)",c:"فطير الكيري",p:125,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/4c7274afd92936e601bcac780e17dc802310f0a4.jpeg"},
  {n:"فطيرة سجق كيري (Large)",c:"فطير الكيري",p:165,i:"https://kimi-web-img.moonshot.cn/img/img.taste.com.au/4c7274afd92936e601bcac780e17dc802310f0a4.jpeg"},
  {n:"فطيرة بسطرمة (Medium)",c:"فطير الكيري",p:135,i:"https://kimi-web-img.moonshot.cn/img/w2.chabad.org/c12eeba822734a8f4140e89d792fc226224c214d.jpg"},
  {n:"فطيرة بسطرمة (Large)",c:"فطير الكيري",p:175,i:"https://kimi-web-img.moonshot.cn/img/w2.chabad.org/c12eeba822734a8f4140e89d792fc226224c214d.jpg"},
  {n:"فطيرة فراخ كيري (Medium)",c:"فطير الكيري",p:140,i:"https://kimi-web-img.moonshot.cn/img/www.allrecipes.com/fadb01c26584164f8ccdbdb343b77eaaeee89c99.jpg"},
  {n:"فطيرة فراخ كيري (Large)",c:"فطير الكيري",p:185,i:"https://kimi-web-img.moonshot.cn/img/www.allrecipes.com/fadb01c26584164f8ccdbdb343b77eaaeee89c99.jpg"},
  {n:"فطيرة سجق وبسطرمة وكيري (Medium)",c:"فطير الكيري",p:145,i:"https://kimi-web-img.moonshot.cn/img/www.thespruceeats.com/be4696b6c73d943964f4150ca15b5283e1b01110.jpg"},
  {n:"فطيرة سجق وبسطرمة وكيري (Large)",c:"فطير الكيري",p:180,i:"https://kimi-web-img.moonshot.cn/img/www.thespruceeats.com/be4696b6c73d943964f4150ca15b5283e1b01110.jpg"},
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
  const mobCount = document.getElementById("cartCountMob");
  if (mobCount) mobCount.textContent = totalQty;

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

function toggleTheme() {
  document.body.classList.toggle('alt-theme');
  const btn = document.getElementById('themeBtn');
  const mobBtn = document.getElementById('mobileThemeBtn');
  const isAlt = document.body.classList.contains('alt-theme');
  const label = isAlt ? '🌙' : '☀️';
  if (btn) btn.textContent = label;
  if (mobBtn) mobBtn.textContent = label + ' تبديل الألوان';
  localStorage.setItem('koshary-theme', isAlt ? 'alt' : 'default');
}

(function initTheme() {
  const saved = localStorage.getItem('koshary-theme');
  if (saved === 'alt') {
    document.body.classList.add('alt-theme');
    const btn = document.getElementById('themeBtn');
    const mobBtn = document.getElementById('mobileThemeBtn');
    if (btn) btn.textContent = '🌙';
    if (mobBtn) mobBtn.textContent = '🌙 تبديل الألوان';
  }
})();

renderMenu();
updateCart();
