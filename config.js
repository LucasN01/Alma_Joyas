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
  rubro:     "Indumentaria y joyería", 
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
  whatsapp:  "543516071260",       // Sin +, sin espacios. Ej: "5491123456789"
  instagram: "alma_joyas1",  // Sin @

  contacto: {
  label:      "Hablemos",
  titulo:     "¿Buscás algo especial?",
  waDisplay:  "+54 351 1234567",           
  waTexto:    "Hola! Vi su página y me gustaría consultar por sus productos.",
  waTextoProducto: "Hola! Vi su página y me gustaría consultar por: *{nombre}*",
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
    nombrePanel: "Alma Joyas"   // Aparece en la barra de administrador
  },

  // ── TIPO DE PRODUCTO (para los textos del panel admin) ─────────
  tipoProducto:        "Joyas",               // Ej: "joya", "prenda", "producto"
  tipoProductoEjemplo: "Anillo", // Ej: "Anillo de plata", "Vestido talle M"

  paginacionBatch: 6, // productos por batch por carrusel

  // ── CATEGORÍAS PREDEFINIDAS (panel admin) ──────────────────────
  // Las que aparecen en el dropdown al cargar el panel por primera vez
  categoriasFijas: [],

  // ── FIREBASE ───────────────────────────────────────────────────
  // Creá un proyecto nuevo en https://console.firebase.google.com para cada cliente
  firebase: {
    apiKey: "AIzaSyBGR8YEsK7BI_PjXPueeUMGDSsjAnfjrkk",
    authDomain: "almajoyas-2908e.firebaseapp.com",
    projectId: "almajoyas-2908e",
    storageBucket: "almajoyas-2908e.firebasestorage.app",
    messagingSenderId: "562669483726",
    appId: "1:562669483726:web:b6f0a8db38352a3177c29f"
  },

  // ── TIPOGRAFÍA (Google Fonts) ───────────────────────────────────
  // Usá exactamente el nombre como aparece en fonts.google.com
  // script.js carga todas las fuentes únicas automáticamente y aplica
  // las variables CSS --font-* en todo el sitio. Solo editá este bloque.
  tipografia: {
    // Cuerpo de texto (párrafos, botones, inputs, etiquetas, nav links)
    cuerpo:          "Inter",

    // Logo en el nav (marca del negocio)
    nav:             "Cormorant Garamond",

    // Título grande en el hero (nombre de la marca)
    tituloPagina:    "Pinyon Script",

    // Títulos de secciones (Nosotros, Contacto, etc.)
    tituloSeccion:   "Cormorant Garamond",

    // Nombre del producto en cards y modales
    tituloProducto:  "Cormorant Garamond",

    // Títulos en paneles y modales del admin
    tituloAdmin:     "Cormorant Garamond",
  },

  // ── LEGACY (no tocar — usados internamente por script.js) ──────
  // Se derivan automáticamente de tipografia arriba
  get fontSerif(){ return this.tipografia.tituloPagina },
  get fontSans() { return this.tipografia.cuerpo },

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
