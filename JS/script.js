/* =========================================================
   1) RUTAS DE IMÁGENES
   Cambia estos archivos dentro de la carpeta IMG/
   (mismo nombre = se actualiza solo, sin tocar el resto del código)
   ========================================================= */
const IMG = {
  logo:  "../IMG/logo.jpg",
  sello: "../IMG/sello.jpg",
  b1:    "../IMG/b1.jpg",
  b2:    "../IMG/b2.jpg",
  b3:    "../IMG/b3.jpg"
};

/* =========================================================
   1.1) DATOS DE CONTACTO
   ========================================================= */
const WHATSAPP_NUMERO = "573150553758";                              // sin + ni espacios
const INSTAGRAM_URL   = "https://www.instagram.com/clandestino_burger26/";
const INSTAGRAM_USER  = "@clandestino_burger26";
const NEQUI_NUMERO    = "324 288 2817";                               // solo informativo, sin botón

function waLink(nombreProducto){
  const msg = `Hola! Quiero pedir: ${nombreProducto}`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
}

/* =========================================================
   2) HELPERS para armar cada hoja (así no repetimos HTML)
   ========================================================= */
const folio = (n, t) =>
  `<div class="folio"><span>Clandestino Burger</span><span>${t} · Folio ${String(n).padStart(2,"0")}</span></div>`;

/* Hoja simplificada de producto: imagen + título + botón que abre el modal */
function productPage({ n, folioLabel, id, name, name2 }) {
  const full = name + (name2 ? " " + name2 : "");
  return `<div class="grain"></div>${folio(n, folioLabel)}
  <div class="product-card">
    <img class="product-shot" src="${PRODUCTS[id].img}" alt="${full}">
    <h2 class="dish">${name}${name2 ? `<br><em>${name2}</em>` : ""}</h2>
    <button class="cta ghost" data-modal="${id}">Ver ficha</button>
  </div>`;
}

/* =========================================================
   3) FICHA COMPLETA DE CADA PRODUCTO (esto llena el modal)
   Para agregar un producto: añade una entrada aquí Y una
   línea productPage({...}) más abajo en PAGES.
   ========================================================= */
const PRODUCTS = {
  infiltrada: {
    name: "La Infiltrada", price: "24.900", img: IMG.b1,
    desc: "Pan brioche sellado en mantequilla, 150 g de carne al carbón, queso mozzarella, mermelada de tocineta, vegetales frescos y salsa secret. Coronada con aros de cebolla.",
    tags: ["Aros de cebolla", "Mermelada de tocineta", "150 g al carbón"]
  },
  "codigo-secreto": {
    name: "Código Secreto", price: "26.900", img: IMG.b2,
    desc: "Pan brioche sellado en mantequilla, 150 g de carne al carbón, queso mozzarella, pollo desmechado bañado en nuestra tártara secreta, tocineta crocante y vegetales frescos.",
    tags: ["Pollo desmechado", "Tártara secreta", "Tocineta crocante"],
    note: "La más pedida de la casa"
  },
  classic: {
    name: "La Classic", price: "20.000", img: IMG.b3,
    desc: "Pan brioche sellado en mantequilla, 150 g de carne al carbón, queso mozzarella, tocineta crocante, vegetales frescos y salsa secret.",
    tags: ["Sin rodeos", "Tocineta crocante", "150 g al carbón"]
  }
};

/* =========================================================
   4) CONTENIDO DE LA CARTA (una entrada = una página)
   ========================================================= */
const PAGES = [

  /* --- 1. Portada --- */
  `<div class="grain"></div>
   <div style="margin:auto;text-align:center;width:100%">
     <div class="circle-frame cover-logo"><img src="${IMG.logo}" alt="Clandestino Burger, sabor prohibido"></div>
     <div class="tagline">La carta</div>
     <p class="sub">Más que hamburguesas, secretos</p>
     <div class="rule-short"></div>
     <span class="stamp">Expediente 001</span>
   </div>`,

  /* --- 2. Regla de la casa --- */
  `<div class="grain"></div>${folio(2, "La casa manda")}
   <div style="display:flex;gap:clamp(12px,3vmin,26px);align-items:center;margin:auto 0">
     <div style="flex:1 1 60%">
       <h2 class="dish" style="font-size:clamp(30px,5.6vmin,50px)">Todas nuestras<br>hamburguesas<br><em>vienen con papa</em></h2>
       <p class="desc" style="margin-top:.6em">Sin letra pequeña y sin cobro aparte. Papa dorada de la casa en cada pedido.</p>
       <div class="rule"></div>
       <p class="note">Calidad clandestina en cada bocado</p>
     </div>
     <div class="circle-frame" style="flex:0 0 34%;width:34%"><img src="${IMG.sello}" alt="Sello Clandestino Burger"></div>
   </div>`,

  /* --- 3. La Infiltrada --- */
  productPage({ n: 3, folioLabel: "Hamburguesas", id: "infiltrada", name: "La", name2: "Infiltrada" }),

  /* --- 4. Código Secreto --- */
  productPage({ n: 4, folioLabel: "Hamburguesas", id: "codigo-secreto", name: "Código", name2: "Secreto" }),

  /* --- 5. La Classic --- */
  productPage({ n: 5, folioLabel: "Hamburguesas", id: "classic", name: "La", name2: "Classic" }),

  /* --- 6. Pedidos --- */
  `<div class="grain"></div>${folio(6, "Pedidos")}
   <div style="margin:auto 0">
     <span class="stamp">Servicio a domicilio</span>
     <p class="desc" style="margin-top:clamp(12px,2.4vmin,20px)">Escríbenos por WhatsApp o síguenos en Instagram para pedir.</p>

     <div class="tel">315 055 3758</div>
     <a class="cta wa" href="${waLink('Pedido general')}" target="_blank" rel="noopener">Pedir por WhatsApp</a>

     <div class="rule"></div>

     <p class="desc" style="margin:0 0 10px">${INSTAGRAM_USER}</p>
     <a class="cta ig" href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Ver en Instagram</a>

     <div class="rule"></div>

     <p class="note">Nequi (solo información): ${NEQUI_NUMERO}</p>
     <p class="note" style="margin-top:4px">Horario: pendiente por confirmar</p>
   </div>`,

  /* --- 7. Ubicación --- */
  `<div class="grain"></div>${folio(7, "Ubicación")}
   <div style="margin:auto 0;width:100%">
     <h2 class="dish" style="font-size:clamp(28px,5.2vmin,44px)">Dónde<br><em>encontrarnos</em></h2>
     <p class="desc" style="margin:.4em 0 14px">Zona Park</p>
     <div class="map-wrap">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.5058716916819!2d-73.05881879533074!3d6.998217226577265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68477b9d04e6ff%3A0x1f9179b907efdf88!2sZona%20Park!5e0!3m2!1ses-419!2sco!4v1789932893298!5m2!1ses-419!2sco"
         title="Ubicación de Clandestino Burger en Zona Park" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
   </div>`,

  /* --- 8. Contraportada --- */
  `<div class="grain"></div>
   <div style="margin:auto;text-align:center">
     <div class="circle-frame" style="width:min(34%,140px);margin:0 auto;opacity:.92"><img src="${IMG.sello}" alt=""></div>
     <p class="desc" style="margin-top:18px;color:var(--gold-deep);font-family:var(--type);font-size:clamp(11px,1.8vmin,13px);letter-spacing:.18em">Aquí todo sabe mejor en secreto</p>
   </div>`
];

/* =========================================================
   4) LÓGICA DEL LIBRO (no deberías necesitar tocar esto)
   ========================================================= */
const N = PAGES.length;
let idx = 0;
const isDesk = () => window.matchMedia("(min-width:900px)").matches;

// --- escritorio: hojas que se voltean ---
const leavesEl = document.getElementById("leaves");
let leafCount = Math.ceil(N / 2), flipped = 0;

function buildLeaves() {
  leavesEl.innerHTML = "";
  for (let i = 0; i < leafCount; i++) {
    const front = PAGES[i * 2] || "", back = PAGES[i * 2 + 1] || "";
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.innerHTML =
      `<div class="face front ${i === 0 ? "cover" : ""}"><div class="page ${i === 0 ? "cover center" : ""}">${front}</div></div>
       <div class="face back"><div class="page">${back}</div></div>`;
    leavesEl.appendChild(leaf);
  }
  paintLeaves();
}
function paintLeaves() {
  [...leavesEl.children].forEach((leaf, i) => {
    const on = i < flipped;
    leaf.classList.toggle("flipped", on);
    leaf.style.zIndex = on ? i : leafCount - i;
  });
}

// --- celular: carrusel deslizable ---
const reel = document.getElementById("reel");
function buildReel() {
  reel.innerHTML = PAGES.map(p => `<div class="slide"><div class="page">${p}</div></div>`).join("");
}

// --- navegación (botones, teclado, swipe) ---
const counter = document.getElementById("counter");
function updateLabel() {
  if (isDesk()) {
    const l = flipped * 2, r = l + 1;
    counter.textContent = flipped === 0 ? "Portada" : `Folio ${l}–${Math.min(r, N)}`;
  } else {
    counter.textContent = idx === 0 ? "Portada" : `Folio ${idx + 1} de ${N}`;
  }
  document.getElementById("prev").disabled = isDesk() ? flipped === 0 : idx === 0;
  document.getElementById("next").disabled = isDesk() ? flipped >= leafCount : idx >= N - 1;
}
function go(dir) {
  if (isDesk()) {
    flipped = Math.min(leafCount, Math.max(0, flipped + dir));
    paintLeaves();
  } else {
    idx = Math.min(N - 1, Math.max(0, idx + dir));
    reel.scrollTo({ left: idx * reel.clientWidth, behavior: "smooth" });
  }
  updateLabel();
}

document.getElementById("prev").onclick = () => go(-1);
document.getElementById("next").onclick = () => go(1);
document.getElementById("tapPrev").onclick = () => go(-1);
document.getElementById("tapNext").onclick = () => go(1);
addEventListener("keydown", e => {
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
});
reel.addEventListener("scroll", () => {
  const i = Math.round(reel.scrollLeft / reel.clientWidth);
  if (i !== idx) { idx = i; updateLabel(); }
}, { passive: true });

// =========================================================
// 5) MODAL DE FICHA DE PRODUCTO
// =========================================================
const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";
modalOverlay.innerHTML = `
  <div class="modal-card" role="dialog" aria-modal="true">
    <button class="modal-close" id="modalClose" aria-label="Cerrar">×</button>
    <div id="modalBody"></div>
  </div>`;
document.body.appendChild(modalOverlay);
const modalBody = document.getElementById("modalBody");

function openModal(id){
  const p = PRODUCTS[id];
  if(!p) return;
  modalBody.innerHTML = `
    <img class="modal-shot" src="${p.img}" alt="${p.name}">
    <h2 class="dish" style="font-size:clamp(26px,5vw,36px)">${p.name}</h2>
    <p class="desc">${p.desc}</p>
    ${p.tags ? `<ul class="tags">${p.tags.map(t=>`<li>${t}</li>`).join("")}</ul>` : ""}
    <div class="rule"></div>
    <div class="price"><small>Precio</small>$${p.price}</div>
    ${p.note ? `<p class="note" style="margin:8px 0 0">${p.note}</p>` : ""}
    <div class="modal-actions">
      <a class="cta wa" href="${waLink(p.name)}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
      <a class="cta ig" href="${INSTAGRAM_URL || '#'}" target="_blank" rel="noopener">Ver en Instagram</a>
    </div>`;
  modalOverlay.classList.add("open");
}
function closeModal(){ modalOverlay.classList.remove("open"); }

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-modal]");
  if(trigger){ openModal(trigger.dataset.modal); return; }
  if(e.target === modalOverlay) closeModal();
});
document.getElementById("modalClose").onclick = closeModal;
addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

// --- iniciar todo ---
buildLeaves();
buildReel();
updateLabel();

matchMedia("(min-width:900px)").addEventListener("change", () => {
  flipped = 0; idx = 0; paintLeaves(); reel.scrollTo({ left: 0 }); updateLabel();
});
