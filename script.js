const menu = [
  // ===== كشري =====
  {n:"علبه ميني",c:"كشري",p:20,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري سوبر",c:"كشري",p:25,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري ميجا",c:"كشري",p:30,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري استرا",c:"كشري",p:35,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري اسبيشيال",c:"كشري",p:40,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
  {n:"كشري هند عائلي",c:"كشري",p:45,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/fc9c57a455adb795860f0eeb07736c8598718a5a.jpg"},
  {n:"كشري هند جامبو",c:"كشري",p:50,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/5beb6553a3a2b9171d6df178e56df1c6535664e0.jpg"},
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
  // ===== نجرسكو =====
  {n:"نجرسكو",c:"نجرسكو",p:90,i:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"},
  {n:"بشاميل",c:"نجرسكو",p:50,i:"https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop"},
  {n:"مكرونه جمبري",c:"نجرسكو",p:90,i:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop"},
  // ===== كريب لحوم =====
  {n:"كريب شاورما لحمه",c:"كريب لحوم",p:70,i:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"},
  {n:"كريب برجر",c:"كريب لحوم",p:60,i:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"},
  {n:"كريب كفته",c:"كريب لحوم",p:55,i:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop"},
  {n:"كريب سوسيس",c:"كريب لحوم",p:55,i:"https://images.unsplash.com/photo-1547496502-ffa76f1d1d56?w=400&h=300&fit=crop"},
  {n:"كريب كفته سوسيس برجر",c:"كريب لحوم",p:70,i:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop"},
  {n:"كريب مشروم",c:"كريب لحوم",p:55,i:"https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&h=300&fit=crop"},
  {n:"كريب مشكل لحوم",c:"كريب لحوم",p:80,i:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"},
  {n:"كريب سجق",c:"كريب لحوم",p:60,i:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop"},
  // ===== كريب بطاطس وجبن =====
  {n:"كريب بطاطس رول",c:"كريب بطاطس وجبن",p:45,i:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop"},
  {n:"كريب بطاطس",c:"كريب بطاطس وجبن",p:35,i:"https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&h=300&fit=crop"},
  {n:"كريب بطاطس شيدر",c:"كريب بطاطس وجبن",p:50,i:"https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400&h=300&fit=crop"},
  {n:"كريب مشكل جبن",c:"كريب بطاطس وجبن",p:45,i:"https://images.unsplash.com/photo-1486297678749-18743b7545d9?w=400&h=300&fit=crop"},
  // ===== كريب فراخ =====
  {n:"كريب بانيه",c:"كريب فراخ",p:60,i:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop"},
  {n:"كريب استربس",c:"كريب فراخ",p:70,i:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop"},
  {n:"كريب شاورما",c:"كريب فراخ",p:75,i:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop"},
  {n:"كريب استربس + شيش",c:"كريب فراخ",p:80,i:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop"},
  {n:"كريب شاورما + استربس",c:"كريب فراخ",p:75,i:"https://images.unsplash.com/photo-1561651823-34a0658ebc9d?w=400&h=300&fit=crop"},
  {n:"كريب فاهيتا دجاج",c:"كريب فراخ",p:80,i:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop"},
  {n:"كريب مشكل فراخ",c:"كريب فراخ",p:80,i:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop"},
  {n:"كريب شيش",c:"كريب فراخ",p:75,i:"https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"},
  // ===== كريب حلو =====
  {n:"كريب هوهوز + شيكولاته",c:"كريب حلو",p:40,i:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?w=400&h=300&fit=crop"},
  {n:"كريب موز + شيكولاته",c:"كريب حلو",p:40,i:"https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?w=400&h=300&fit=crop"},
  {n:"كريب مكسرات + شيكولاته",c:"كريب حلو",p:50,i:"https://images.unsplash.com/photo-1505253758473-96b701d2cd03?w=400&h=300&fit=crop"},
  {n:"كريب موز + مكسرات + عسل",c:"كريب حلو",p:55,i:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop"},
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
  {n:"تقلية",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/0c2666ce469cb5e4725c77c10889c313b6cd47c0.jpg"},
  {n:"حمص",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/cdn.sanity.io/9c09c082175b2598aa422966d4982ca9e0e6ed0e.webp"},
  {n:"صلصة",c:"اضافات هند",p:5,i:"https://kimi-web-img.moonshot.cn/img/media.zid.store/eca9a1d9ba746ef1a53c6e9f682a0157925cf6e6.PNG"},
  {n:"عدس",c:"اضافات هند",p:7,i:"https://kimi-web-img.moonshot.cn/img/img.youm7.com/b66ac9745e04d0b9e0f5f7bc980de503814e2331.jpg"},
  {n:"شطة زيت",c:"اضافات هند",p:10,i:"https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/7076983618cbd58d873e82174cc63f15939852e8.jpg"},
  {n:"دقة",c:"اضافات هند",p:5,i:"https://kimi-web-img.moonshot.cn/img/cdn.loveandlemons.com/67f6887592507ac95506b1da7cfad8c484a1a399.jpg"},
  {n:"إضافات شاورما",c:"اضافات هند",p:25,i:"https://kimi-web-img.moonshot.cn/img/www.sadia-life.com/ba0f355f8cd9fa437ce6c1ff72b22743d95d1a3d.jpg"},
  {n:"إضافات موتزريلا",c:"اضافات هند",p:20,i:"https://kimi-web-img.moonshot.cn/img/palmyraorders.com/2cd85f2e146f243c52587e5fdd972d3148ca7cda.jpg"}
];

let currentFilter = "الكل";
let cart = [];
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
  cart.push(menu[i]);
  updateCart();
  showToast("اتضاف للسلة 🔥");
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  if (cart.length === 0) {
    document.getElementById("cartItems").innerHTML = "<p style='color:#81c784;text-align:center;margin-top:50px'>السلة فاضية.. اطلب حاجة حلوة 😋</p>";
  } else {
    document.getElementById("cartItems").innerHTML = cart.map((x, i) => `
      <div class="cart-line">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${x.i}" class="cart-thumb" alt="" onerror="this.style.display='none'">
          <div>
            <b>${x.n}</b>
            <small style="display:block;color:#81c784;">${x.c}</small>
          </div>
        </div>
        <div style="text-align:center;">
          <b>${x.p} ج</b><br>
          <button onclick="removeItem(${i})" style="background:#1b5e20;color:#fff;border:0;border-radius:7px;padding:5px 8px;cursor:pointer;margin-top:4px;">حذف</button>
        </div>
      </div>
    `).join("");
  }

  const total = cart.reduce((a, x) => a + x.p, 0);
  document.getElementById("cartTotal").textContent = total + " جنيه";
}

function removeItem(i) {
  cart.splice(i, 1);
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
  const total = cart.reduce((a, x) => a + x.p, 0);
  const items = cart.map(x => x.n).join("، ");
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
