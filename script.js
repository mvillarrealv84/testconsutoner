// Número de WhatsApp oficial de CONSUTONER en formato internacional
const WHATSAPP_NUMBER = "524423225728";
function sendWhatsApp(message){
  if(WHATSAPP_NUMBER.includes("X")){alert("Configura primero el número de WhatsApp en script.js.");return;}
  window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
}
document.querySelectorAll(".wa").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();sendWhatsApp(a.dataset.msg||"Hola, quiero información de CONSUTONER.");}));
document.getElementById("floatwa").addEventListener("click",e=>{e.preventDefault();sendWhatsApp("Hola, me gustaría recibir información de CONSUTONER.");});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);sendWhatsApp(`Hola, soy ${f.get("name")}. Mi teléfono es ${f.get("phone")}. Necesito información sobre: ${f.get("message")}`);});
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
