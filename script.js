const menu = [
 {n:"علبة هندي",c:"كشري",p:20,i:"🍲"},{n:"كشري سوبر",c:"كشري",p:25,i:"🍲"},{n:"كشري ميجا",c:"كشري",p:30,i:"🍲"},{n:"كشري إكسترا",c:"كشري",p:35,i:"🍲"},{n:"كشري إسبشيال",c:"كشري",p:40,i:"🍲"},{n:"كشري هند عائلي",c:"كشري",p:45,i:"🍲"},{n:"كشري هند جامبو",c:"كشري",p:50,i:"🍲"},
 {n:"طاجن فراخ",c:"طواجن",p:40,i:"🥘"},{n:"طاجن لحمة",c:"طواجن",p:35,i:"🥘"},{n:"ميكس طاجن فراخ",c:"طواجن",p:55,i:"🥘"},{n:"ميكس طاجن لحمة",c:"طواجن",p:50,i:"🥘"},{n:"طاجن فراخ موزاريلا",c:"طواجن",p:60,i:"🥘"},
 {n:"فتة فراخ",c:"سوري",p:80,i:"🥙"},{n:"وجبة زنجبر",c:"سوري",p:95,i:"🥙"},{n:"وجبة عربي سبيسو",c:"سوري",p:90,i:"🥙"},{n:"وجبة عربي سوري",c:"سوري",p:125,i:"🥙"},{n:"وجبة عربي دبل",c:"سوري",p:155,i:"🥙"},{n:"بيتزا سوري",c:"سوري",p:105,i:"🍕"},{n:"دبل ورق",c:"سوري",p:155,i:"🥙"},
 {n:"كريب شاورما لحمة",c:"كريب",p:70,i:"🌯"},{n:"كريب برجر",c:"كريب",p:60,i:"🌯"},{n:"كريب كفتة",c:"كريب",p:55,i:"🌯"},{n:"كريب سوسيس",c:"كريب",p:55,i:"🌯"},{n:"كريب شيش طاووق",c:"كريب",p:70,i:"🌯"},{n:"كريب مشكل لحوم",c:"كريب",p:80,i:"🌯"},{n:"كريب سجق",c:"كريب",p:60,i:"🌯"},
 {n:"كريب بطاطس فراخ",c:"كريب",p:45,i:"🌯"},{n:"كريب بطاطس ميكس",c:"كريب",p:50,i:"🌯"},{n:"كريب مشكل جبن",c:"كريب",p:45,i:"🌯"},
 {n:"ربع فرخة",c:"مشويات",p:85,i:"🍗"},{n:"نصف فرخة",c:"مشويات",p:180,i:"🍗"},{n:"فرخة كاملة",c:"مشويات",p:340,i:"🍗"},
 {n:"بيتزا إيطالي",c:"بيتزا",p:70,i:"🍕"},{n:"بيتزا شرقي",c:"بيتزا",p:85,i:"🍕"},{n:"فطير حلو",c:"بيتزا",p:50,i:"🥧"},{n:"فطير حادق",c:"بيتزا",p:110,i:"🥧"},{n:"فطير كشري",c:"بيتزا",p:125,i:"🥧"},
 {n:"هوجز + شيكولاتة",c:"حلو",p:40,i:"🍫"},{n:"موز + شيكولاتة",c:"حلو",p:40,i:"🍌"},{n:"مكسرات + شيكولاتة",c:"حلو",p:50,i:"🍰"},{n:"موز + مكسرات + عسل",c:"حلو",p:55,i:"🍯"}
];
let currentFilter="الكل", cart=[];
const grid=document.getElementById("menuGrid");
function renderMenu(){
 const q=(document.getElementById("searchInput")?.value||"").trim();
 const data=menu.filter(x=>(currentFilter==="الكل"||x.c===currentFilter)&&(!q||x.n.includes(q)||x.c.includes(q)));
 grid.innerHTML=data.map((x,idx)=>`<article class="menu-item"><div class="item-icon">${x.i}</div><h3>${x.n}</h3><p>${x.c} • طعم أصيل وجودة مضمونة</p><div class="price-row"><span class="price">${x.p} ج</span><button class="add-btn" onclick="addToCart(${menu.indexOf(x)})">+ أضف</button></div></article>`).join("")||'<p>مفيش نتائج مطابقة للبحث.</p>';
}
document.querySelectorAll("#filters button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");currentFilter=b.dataset.filter;renderMenu()}));
function filterMenu(cat){currentFilter=cat;document.querySelectorAll("#filters button").forEach(b=>b.classList.toggle("active",b.dataset.filter===cat));document.getElementById("menu").scrollIntoView({behavior:"smooth"});renderMenu()}
function addToCart(i){cart.push(menu[i]);updateCart();showToast("اتضاف للسلة 🔥")}
function updateCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><div><b>${x.n}</b><small>${x.c}</small></div><div><b>${x.p} ج</b><br><button onclick="removeItem(${i})">حذف</button></div></div>`).join(""):"<p style='color:#a89189;text-align:center;margin-top:50px'>السلة فاضية.. اطلب حاجة حلوة 😋</p>";document.getElementById("cartTotal").textContent=cart.reduce((a,x)=>a+x.p,0)+" جنيه"}
function removeItem(i){cart.splice(i,1);updateCart()}
function openCart(){document.getElementById("cartDrawer").classList.add("open")}
function closeCart(e){if(!e||e.target.id==="cartDrawer")document.getElementById("cartDrawer").classList.remove("open")}
function checkout(){if(!cart.length){showToast("السلة فاضية 😅");return}let total=cart.reduce((a,x)=>a+x.p,0);let items=cart.map(x=>x.n).join("، ");let msg=encodeURIComponent(`مرحباً كشري هند 👋%0Aعايز أطلب: ${items}%0Aالإجمالي التقريبي: ${total} جنيه`);window.open(`https://wa.me/201210195153?text=${msg}`,"_blank")}
function showToast(t){const el=document.getElementById("toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function toggleMobileNav(){document.getElementById("mobileNav").classList.toggle("open")}
renderMenu();updateCart();