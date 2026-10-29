const textos = {
  pt: {
    nav_inicio: "Início",
    nav_sobre: "Sobre Mim",
    nav_portfolio: "Projectos",
    nav_cv: "CV",
    nav_contactos: "Contactos",

    hero_desc: "Estudante de Suporte Informático e aprendiz de Desenvolvimento Web.",
    hero_botao: "Ver projectos",

    sobre_titulo: "Sobre Mim",
    sobre_bio: "Sou moçambicano e frequento o curso de Suporte Informático no Instituto de Transportes e Comunicações (ITC), onde estou desde o ano de 2025. Gosto de perceber como as coisas funcionam por dentro e de construir páginas e pequenas aplicações que resolvem problemas reais.",

    hab_titulo: "Habilidades",
    hab_api: "Consumo de APIs (fetch e JSON)",
    hab_suporte: "Suporte informático",
    hab_com: "Comunicação profissional",

    int_titulo: "Interesses",
    int_web: "Desenvolvimento web",
    int_jogos: "Jogos no navegador",
    int_seg: "Segurança informática",
    int_apr: "Aprender coisas novas em programação",

    port_titulo: "Portfólio de Projectos",
    p1_titulo: "Inscrição Online",
    p1_desc: "Formulário HTML de inscrição online, com campos para os dados do candidato.",
    p1_alt: "Formulário de inscrição online",

    p2_titulo: "Apanha Objectos",
    p2_desc: "Jogo no navegador em que o jogador apanha objectos que caem do ecrã. Feito com HTML, CSS e JavaScript.",
    p2_alt: "Jogo de apanhar objectos",

    p3_titulo: "CV",
    p3_desc: "Página de currículo com dados pessoais, perfil académico, competências técnicas e tabela de línguas.",
    p3_alt: "Página de currículo",

    p4_titulo: "Candidatura Online",
    p4_desc: "Formulário HTML de candidatura com vários tipos de campos e validação básica.",
    p4_alt: "Formulário de candidatura online",

    cv_titulo: "Curriculum Vitae",
    cv_desc: "Consulta o meu currículo para conhecer melhor a minha formação académica, as minhas competências e os meus conhecimentos em Suporte Informático e Desenvolvimento Web.",
    cv_subtitulo: "Cleiton da Serra Langa — Curriculum Vitae",
    cv_info: "Clica no botão para abrir o meu currículo.",
    cv_abrir: "Abrir CV",

    cont_titulo: "Contactos",
    cont_tel: "Telefone:",
    cont_redes: "Redes sociais:",

    lin_titulo: "Línguas",
    lin_cap: "Nível em cada língua",
    lin_lingua: "Língua",
    lin_fala: "Fala",
    lin_le: "Lê",
    lin_escreve: "Escreve",
    lin_pt: "Português",
    lin_en: "Inglês",

    niv_basico: "Básico",
    niv_intermedio: "Intermédio",
    niv_avancado: "Avançado",
    niv_nativo: "Nativo"
  },

  en: {
    nav_inicio: "Home",
    nav_sobre: "About Me",
    nav_portfolio: "Projects",
    nav_cv: "CV",
    nav_contactos: "Contact",

    hero_desc: "IT Support student and web development learner.",
    hero_botao: "View projects",

    sobre_titulo: "About Me",
    sobre_bio: "I am Mozambican and I study IT Support at the Instituto de Transportes e Comunicações (ITC), where I have been since 2025. I like to understand how things work inside and to build web pages and small applications that solve real problems.",

    hab_titulo: "Skills",
    hab_api: "Using APIs (fetch and JSON)",
    hab_suporte: "IT support",
    hab_com: "Professional communication",

    int_titulo: "Interests",
    int_web: "Web development",
    int_jogos: "Browser games",
    int_seg: "Computer security",
    int_apr: "Learning new things in programming",

    port_titulo: "Project Portfolio",
    p1_titulo: "Online Registration",
    p1_desc: "HTML registration form with fields for the applicant's details.",
    p1_alt: "Online registration form",

    p2_titulo: "Catch the Objects",
    p2_desc: "Browser game where the player catches objects falling down the screen. Built with HTML, CSS and JavaScript.",
    p2_alt: "Catch the objects game",

    p3_titulo: "CV",
    p3_desc: "Résumé page with personal details, academic profile, technical skills and a language table.",
    p3_alt: "Résumé page",

    p4_titulo: "Online Application",
    p4_desc: "HTML application form with several field types and basic validation.",
    p4_alt: "Online application form",

    cv_titulo: "Curriculum Vitae",
    cv_desc: "View my CV to learn more about my academic background, skills and knowledge in IT Support and Web Development.",
    cv_subtitulo: "Cleiton da Serra Langa — Curriculum Vitae",
    cv_info: "Click the button to open my CV.",
    cv_abrir: "Open CV",

    cont_titulo: "Contact",
    cont_tel: "Phone:",
    cont_redes: "Social media:",

    lin_titulo: "Languages",
    lin_cap: "Level in each language",
    lin_lingua: "Language",
    lin_fala: "Speaks",
    lin_le: "Reads",
    lin_escreve: "Writes",
    lin_pt: "Portuguese",
    lin_en: "English",

    niv_basico: "Basic",
    niv_intermedio: "Intermediate",
    niv_avancado: "Advanced",
    niv_nativo: "Native"
  }
};

const botao = document.getElementById("btn-idioma");

function aplicarIdioma(idioma) {
  if (!textos[idioma]) {
    idioma = "pt";
  }

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const chave = el.dataset.i18n;

    if (textos[idioma][chave] !== undefined) {
      el.textContent = textos[idioma][chave];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(function (img) {
    const chave = img.dataset.i18nAlt;

    if (textos[idioma][chave] !== undefined) {
      img.alt = textos[idioma][chave];
    }
  });

  document.documentElement.lang = idioma;

  if (botao) {
    botao.textContent = idioma === "pt" ? "EN" : "PT";
    botao.setAttribute(
      "aria-label",
      idioma === "pt" ? "Mudar para inglês" : "Switch to Portuguese"
    );
  }

  try {
    localStorage.setItem("idioma", idioma);
  } catch (erro) {
  }
}

if (botao) {
  botao.addEventListener("click", function () {
    const idiomaAtual = document.documentElement.lang || "pt";
    aplicarIdioma(idiomaAtual === "pt" ? "en" : "pt");
  });
}

let idiomaGuardado = "pt";

try {
  idiomaGuardado = localStorage.getItem("idioma") || "pt";
} catch (erro) {
  idiomaGuardado = "pt";
}

aplicarIdioma(idiomaGuardado);

document.querySelectorAll(".nivel").forEach(function (barra) {
  const nivel = Number(barra.dataset.nivel);
  const habilidade = barra.closest(".habilidade");
  const percentagem = habilidade
    ? habilidade.querySelector(".pct")
    : null;

  if (Number.isFinite(nivel)) {
    if (percentagem) {
      percentagem.textContent = nivel + "%";
    }

    barra.style.width = "0%";
  }
});

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    function (entradas, observadorAtual) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          const barra = entrada.target;
          const nivel = Number(barra.dataset.nivel);

          if (Number.isFinite(nivel)) {
            barra.style.width = Math.min(100, Math.max(0, nivel)) + "%";
          }

          observadorAtual.unobserve(barra);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".nivel").forEach(function (barra) {
    observador.observe(barra);
  });
} else {
  document.querySelectorAll(".nivel").forEach(function (barra) {
    const nivel = Number(barra.dataset.nivel);

    if (Number.isFinite(nivel)) {
      barra.style.width = Math.min(100, Math.max(0, nivel)) + "%";
    }
  });
}