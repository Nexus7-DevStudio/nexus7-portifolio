const externalRel = ' target="_blank" rel="noreferrer"';

function revealAttributes(index) {
  const delay = Math.min(index * 70, 280);
  return `data-reveal="up" style="--delay:${delay}ms"`;
}

function renderServices(services) {
  return services
    .map(
      (service, index) => `
        <article class="service-card" ${revealAttributes(index)}>
          <div class="service-card__meta">
            <span class="service-card__index">${service.index}</span>
            <span class="service-card__audience">${service.audience}</span>
          </div>
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
          <ul>
            ${service.deliverables.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderPrinciples(principles) {
  return principles
    .map(
      (principle, index) => `
        <article class="principle-card" ${revealAttributes(index)}>
          <div class="principle-card__topline" aria-hidden="true"></div>
          <h3>${principle.title}</h3>
          <p>${principle.description}</p>
        </article>
      `
    )
    .join("");
}

function renderProcess(processItems) {
  return processItems
    .map(
      (item, index) => `
        <article class="process-item" ${revealAttributes(index)}>
          <span class="process-item__step">${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects(projects) {
  return projects
    .map(
      (project, index) => `
        <article class="project-card" ${revealAttributes(index)}>
          <div class="project-card__header">
            <div class="project-card__meta">
              <span class="project-card__status">${project.status}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>

          <div class="project-card__tags">
            ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>

          <ul>
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>

          <div class="project-card__links">
            ${project.links
              .map(
                (link, linkIndex) => `
                  <a
                    class="project-link ${linkIndex > 0 ? "project-link--muted" : ""}"
                    href="${link.href}"
                    ${link.external ? externalRel : ""}
                  >
                    ${link.label}
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderRepositoryAreas(areas) {
  return `
    <ul>
      ${areas
        .map(
          (area) => `
            <li>
              <strong>${area.title}</strong>
              <div>${area.description}</div>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderFaq(items) {
  return items
    .map(
      (item, index) => `
        <details class="faq-item" ${index === 0 ? "open" : ""} ${revealAttributes(index)}>
          <summary>${item.question}</summary>
          <div class="faq-item__body">
            <p>${item.answer}</p>
          </div>
        </details>
      `
    )
    .join("");
}

function renderContactChannels(channels) {
  return channels
    .map(
      (channel) => `
        <div class="contact-line">
          <strong>${channel.label}</strong>
          ${
            channel.href
              ? `<a href="${channel.href}" ${
                  channel.href.startsWith("mailto:") ? "" : externalRel
                }>${channel.value}</a>`
              : `<span>${channel.value}</span>`
          }
          ${channel.note ? `<p class="contact-line__note">${channel.note}</p>` : ""}
        </div>
      `
    )
    .join("");
}
