// ════════════════════════════════════════════════════════════════
//  CONFIG.JS — Editá SOLO este archivo para adaptar a cada cliente
//  (index.html, style.css y script.js no los tocás nunca más)
// ════════════════════════════════════════════════════════════════

const SITE_CONFIG = {

  // ── MARCA ──────────────────────────────────────────────────────
  // Nombre que aparece en el nav, hero, footer y título del browser
  marcaPrincipal: "Alma",      // Parte normal del nombre
  marcaItalica:   "Joyas",   // Parte en cursiva y con color del acento

  // ── DESCRIPCIÓN CORTA ──────────────────────────────────────────
  rubro:     "indumentaria y joyería",  // Ej: "Joyería artesanal", "Indumentaria"
  ubicacion: "Córdoba",          // Ej: "Buenos Aires", "Palermo"

  // ── HERO ───────────────────────────────────────────────────────
  heroSubtitulo: "Indumentaria y bijouterie que combinan<br>estilo, calidad y personalidad para cada ocasión.",

  // ── SECCIÓN NOSOTROS ───────────────────────────────────────────
  nosotros: {
    label:  "Nuestra esencia",
    titulo: "Cada detalle define tu estilo",
    parrafos: [
      "En <strong>Alma Joyas</strong> nos apasiona ofrecer piezas únicas que realzan tu identidad. Nuestra colección de indumentaria y bijouterie está pensada para acompañarte en cada momento, con diseños actuales y versátiles.",
      "Nacimos con la idea de acercar moda accesible sin perder calidad ni estilo, brindando opciones que se adapten a distintas personalidades y tendencias.",
      "Seleccionamos cada prenda y accesorio con dedicación, priorizando materiales de calidad y un diseño cuidado para que te sientas cómoda y segura al usarlos."
    ],
    stats: [
      { num: "100%", label: "Estilo propio" },
      { num: "★",   label: "Tendencias actuales" }
    ]
  },

  // ── SECCIÓN PRODUCTOS ──────────────────────────────────────────
  productos: {
    label:  "Lo que ofrecemos",
    titulo: "Nuestros productos"
  },

  // ── CONTACTO ───────────────────────────────────────────────────
  whatsapp:  "543511234567",       // Sin +, sin espacios. Ej: "5491123456789"
  instagram: "alma_joyas1",  // Sin @

  contacto: {
  label:      "Hablemos",
  titulo:     "¿Buscás algo especial?",
  waDisplay:  "+54 351 1234567",           
  waTexto:    "Hola! Vi su página y me gustaría consultar por sus productos.",
  ctaTitulo:  "Encontrá tu estilo ideal",
  ctaParrafo: "Te ayudamos a elegir la prenda o accesorio perfecto según tu estilo, ocasión o necesidad. Consultanos por disponibilidad, talles, combinaciones o recomendaciones.",
  ctaBoton:   "Escribinos por WhatsApp"
},

  // ── FOOTER ─────────────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Alma Joyas · Estilo en cada detalle"
  },

  // ── ADMIN ──────────────────────────────────────────────────────
  admin: {
    usuario:     "usuario",
    password:    "contraseña",
    nombrePanel: "Alma Joyas"   // Aparece en la barra de administrador
  },

  // ── TIPO DE PRODUCTO (para los textos del panel admin) ─────────
  tipoProducto:        "Joyas",               // Ej: "joya", "prenda", "producto"
  tipoProductoEjemplo: "Anillo", // Ej: "Anillo de plata", "Vestido talle M"

  // ── CATEGORÍAS PREDEFINIDAS (panel admin) ──────────────────────
  // Las que aparecen en el dropdown al cargar el panel por primera vez
  categoriasFijas: [],

  // ── FIREBASE ───────────────────────────────────────────────────
  // Creá un proyecto nuevo en https://console.firebase.google.com para cada cliente
  firebase: {
    apiKey: "AIzaSyBQW2mqcT4t-ElsNVRoKtyebGF4tHYX7u0",
    authDomain: "alma-joyas-efb64.firebaseapp.com",
    databaseURL: "https://alma-joyas-efb64-default-rtdb.firebaseio.com",
    projectId: "alma-joyas-efb64",
    storageBucket: "alma-joyas-efb64.firebasestorage.app",
    messagingSenderId: "159154338607",
    appId: "1:159154338607:web:ad57eb6a490c685101ffda"
  },

  // ── TIPOGRAFÍA (Google Fonts) ───────────────────────────────────
  // Si cambiás las fuentes, script.js actualiza el link de Google Fonts automáticamente
  // Usá exactamente el nombre como aparece en fonts.google.com
  fontSerif: "Cormorant Garamond",  // Fuente elegante para títulos
  fontSans:  "Jost",                // Fuente moderna para cuerpo de texto

  // ── PALETA DE COLORES ──────────────────────────────────────────
  // Usá coolors.co o palettte.app para generar paletas para cada cliente
  colores: {
    fondo:     "#CDEFF2",  // celeste muy claro (fondos suaves)
    principal: "#3AA6B9",  // azul petróleo suave (principal)
    secciones: "#EAF9FB",  // fondo ultra claro (secciones)
    detalles:  "#7ED6DF",  // intermedio (bordes, detalles)
    cream:    "#F7FCFD",  // fondo general (más frío que crema)
    text:     "#1F3A40",  // texto principal (azul oscuro elegante)
    textSoft: "#5F7C82",  // texto secundario
    gold:     "#5BC0BE",  // acento (verde agua)
    white:    "#ffffff"
  },

  // ── CATÁLOGO INICIAL / RESTAURACIÓN ────────────────────────────
  // Estos son los productos que se cargan si Firebase está vacío
  // o cuando el admin presiona "Restaurar originales"
  productosDefault: []
};
