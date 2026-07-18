const $=s=>document.querySelector(s);
const music=$("#music"), startBtn=$("#startBtn"), gift=$("#giftScreen"), story=$("#story");
for(let i=0;i<110;i++){const s=document.createElement("i");s.className="star";s.style.left=Math.random()*100+"vw";s.style.top=Math.random()*100+"vh";s.style.animationDelay=Math.random()*2+"s";s.style.opacity=Math.random();document.body.appendChild(s)}
const text=`إلى حبيبتي وعمري فلوكتي ❤️

بعض التواريخ بتمر...
وبعضها بيغيّر الحياة كلها

19 تموز كان اليوم اللي بلشت فيه حكايتنا...
ومن وقتها، صار لقلبي أحلى حكاية اسمها فلوكتي.`;
let idx=0;
function type(){if(idx<text.length){$("#typing").textContent+=text[idx++];setTimeout(type,55)}}
startBtn.onclick=()=>{gift.classList.add("hidden");story.classList.remove("hidden");music.play().catch(()=>{});type();window.scrollTo(0,0)};
const start=new Date("2025-07-18T17:00:00");
function counter(){let d=Math.max(0,new Date()-start),days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);$("#countdown").innerHTML=`${days} يوم<br>${h} ساعة · ${m} دقيقة · ${s} ثانية`}
counter();setInterval(counter,1000);
$("#letterBtn").onclick=()=>{$("#letter").classList.remove("hidden");$("#letterBtn").classList.add("hidden")};
$("#finalBtn").onclick=()=>{$("#finalMessage").classList.remove("hidden");$("#finalBtn").classList.add("hidden");for(let i=0;i<45;i++)setTimeout(()=>heart(innerWidth/2+(Math.random()-.5)*300,innerHeight*.7),i*55)};
function heart(x,y){const h=document.createElement("div");h.className="float-heart";h.textContent=Math.random()>.25?"❤️":"✨";h.style.left=x+"px";h.style.top=y+"px";h.style.fontSize=18+Math.random()*25+"px";document.body.appendChild(h);setTimeout(()=>h.remove(),2100)}
document.addEventListener("click",e=>{if(e.target.tagName!=="BUTTON")heart(e.clientX,e.clientY)});