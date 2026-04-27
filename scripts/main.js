const mount = (selector, markup) => {
  const element = document.querySelector(selector);
  if (!element) return;
  element.innerHTML = markup;
};

mount("#services-grid", renderServices(siteData.services));
mount("#principles-grid", renderPrinciples(siteData.principles));
mount("#process-grid", renderProcess(siteData.process));
mount("#projects-grid", renderProjects(siteData.projects));
mount("#repo-tree", renderRepositoryAreas(siteData.repositoryAreas));
mount("#faq-list", renderFaq(siteData.faq));
mount("#contact-list", renderContactChannels(siteData.contactChannels));

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];

if (header && navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!header.contains(target)) {
      header.classList.remove("is-nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const themeToggle = document.querySelector(".theme-toggle");
const themeMetaTags = Array.from(document.querySelectorAll('meta[name="theme-color"]'));
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const getStoredTheme = () => {
  try {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
  } catch (error) {
    return null;
  }
};

const getResolvedTheme = () => getStoredTheme() || (systemThemeQuery.matches ? "dark" : "light");

const updateThemeMeta = (theme) => {
  themeMetaTags.forEach((tag) => {
    tag.setAttribute("content", theme === "dark" ? "#071229" : "#1643b8");
  });
};

const syncThemeToggle = () => {
  const theme = getResolvedTheme();
  if (!themeToggle) return;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
  const label = themeToggle.querySelector(".theme-toggle__text");
  if (label) label.textContent = isDark ? "Claro" : "Escuro";
  updateThemeMeta(theme);
};

if (themeToggle) {
  syncThemeToggle();

  themeToggle.addEventListener("click", () => {
    const nextTheme = getResolvedTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {
      // Tema ainda muda na sessão mesmo sem persistência disponível.
    }
    syncThemeToggle();
  });

  systemThemeQuery.addEventListener("change", () => {
    if (!getStoredTheme()) syncThemeToggle();
  });
}
