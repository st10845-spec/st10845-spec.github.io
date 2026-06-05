document.addEventListener("DOMContentLoaded", () => {
  // 1. Definiamo l'HTML standard dell'header (basato su index.html)
  const headerHTML = `
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div class="font-bold text-techDark text-lg">
          <a href="index.html" class="hover:text-accent transition flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-accent"></i>
            <span>Ada Ugo Praise Ezeala</span>
          </a>
        </div>
        
        <nav class="hidden md:flex space-x-8 text-sm font-medium">
          <a href="index.html" id="nav-home" class="text-slate-600 hover:text-accent transition py-2">Home</a>
          <a href="materie.html" id="nav-materie" class="text-slate-600 hover:text-accent transition py-2">Materie</a>
          <a href="educazione-civica.html" id="nav-civica" class="text-slate-600 hover:text-accent transition py-2">Educazione Civica</a>
          <a href="pcto.html" id="nav-pcto" class="text-slate-600 hover:text-accent transition py-2">FSL</a>
        </nav>

        <div class="md:hidden">
          <button id="mobile-menu-btn" class="text-slate-600 hover:text-accent p-2">
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
        <a href="index.html" class="block text-slate-600 hover:text-accent py-2 font-medium">Home</a>
        <a href="materie.html" class="block text-slate-600 hover:text-accent py-2 font-medium">Materie</a>
        <a href="educazione-civica.html" class="block text-slate-600 hover:text-accent py-2 font-medium">Educazione Civica</a>
        <a href="pcto.html" class="block text-slate-600 hover:text-accent py-2 font-medium">PCTO</a>
      </div>
    </header>
  `;

  // 2. Inseriamo l'header all'inizio del body di qualsiasi pagina
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // 3. Gestione Menu Mobile Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  }

  // 4. Evidenzia automaticamente la pagina corrente nell'header
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "index.html" || currentPage === "") {
    document.getElementById("nav-home")?.classList.add("text-accent", "font-bold", "border-b-2", "border-accent");
  } else if (currentPage === "materie.html" || currentPage.startsWith("materia-")) {
    document.getElementById("nav-materie")?.classList.add("text-accent", "font-bold", "border-b-2", "border-accent");
  } else if (currentPage === "educazione-civica.html") {
    document.getElementById("nav-civica")?.classList.add("text-accent", "font-bold", "border-b-2", "border-accent");
  } else if (currentPage === "pcto.html") {
    document.getElementById("nav-pcto")?.classList.add("text-accent", "font-bold", "border-b-2", "border-accent");
  }
});