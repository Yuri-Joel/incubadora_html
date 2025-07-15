document.addEventListener("DOMContentLoaded", function () {
    const programs = [
      { id: "aceleracao", title: "Aceleração", icon: "⚡", description: "Programas intensivos para acelerar o crescimento da sua startup" },
      { id: "mentoria", title: "Mentoria", icon: "👥", description: "Orientação especializada com profissionais experientes" },
      { id: "investimento", title: "Investimento", icon: "💰", description: "Conexão com investidores e oportunidades de funding" },
      { id: "networking", title: "Networking", icon: "🤝", description: "Eventos e conexões com o ecossistema empreendedor" },
      { id: "workshops", title: "Workshops", icon: "📚", description: "Capacitação técnica e desenvolvimento de habilidades" }
    ];
  
    const sidebarNav = document.getElementById("sidebarNav");
    const mobileSelect = document.getElementById("mobileSelect");
  
    programs.forEach(program => {
      // Sidebar
      const btn = document.createElement("button");
      btn.innerHTML = `
        <div class="flex items-center space-x-3">
          <span class="text-2xl">${program.icon}</span>
          <div>
            <div class="font-semibold">${program.title}</div>
            <div class="text-sm opacity-80">${program.description}</div>
          </div>
        </div>
      `;
      btn.className = `w-full text-left p-4 rounded-lg bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900`;
      btn.onclick = () => scrollToSection(program.id);
      sidebarNav.appendChild(btn);
  
      // Mobile select
      const option = document.createElement("option");
      option.value = program.id;
      option.textContent = program.title;
      mobileSelect.appendChild(option);
    });
  
    // Mobile select scroll
    mobileSelect.addEventListener("change", (e) => {
      scrollToSection(e.target.value);
    });
  
    // Função de scroll
    function scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  
    // Highlight ativo ao rolar
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + 200;
      programs.forEach(program => {
        const section = document.getElementById(program.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            // Ativo no select
            mobileSelect.value = program.id;
            // Ativo na sidebar
            Array.from(sidebarNav.children).forEach(btn => btn.classList.remove("bg-blue-900", "text-white", "shadow-lg"));
            const activeBtn = Array.from(sidebarNav.children).find(btn => btn.textContent.includes(program.title));
            if (activeBtn) activeBtn.classList.add("bg-blue-900", "text-white", "shadow-lg");
          }
        }
      });
    });
  });
  