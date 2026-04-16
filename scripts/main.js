import { siteData } from "./site-data.js";
import {
  renderContactChannels,
  renderFaq,
  renderPrinciples,
  renderProcess,
  renderProjects,
  renderRepositoryAreas,
  renderServices,
} from "./components.js";

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
