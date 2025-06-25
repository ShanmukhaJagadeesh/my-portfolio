const urlParams = new URLSearchParams(window.location.search);
const projectSlug = urlParams.get("project");

let screenshots = [];
let lightboxIndex = 0;

fetch('../data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const project = projects.find(p =>
      p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === projectSlug
    );

    if (!project) {
      document.getElementById("projectDetails").innerHTML = "<h2 style='text-align:center'>Project not found</h2>";
      return;
    }

    // --- Basic Info ---
    document.getElementById("projectTitle").innerText = project.title;
    document.getElementById("shortDesc").innerText = project.shortDesc || '';
    document.getElementById("playButton").href = project.playLink;

    // --- YouTube ---
    if (project.youtube) {
      document.getElementById("youtubeVideo").src = project.youtube;
    }

    // --- Feature List ---
    const featureList = document.getElementById("featureList");
    (project.features || []).forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      featureList.appendChild(li);
    });

    // --- Screenshot Gallery ---
    const galleryDiv = document.getElementById("screenshotGallery");
    screenshots = project.screenshots || [];

    screenshots.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src.startsWith("http") ? src : `../${src}`;
      img.alt = `${project.title} Screenshot`;
      img.addEventListener("click", () => openLightbox(index));
      galleryDiv.appendChild(img);
    });

    document.getElementById("scrollLeft").onclick = () => {
      galleryDiv.scrollBy({ left: -300, behavior: 'smooth' });
    };
    document.getElementById("scrollRight").onclick = () => {
      galleryDiv.scrollBy({ left: 300, behavior: 'smooth' });
    };

    // --- Roles & Responsibilities ---
    const rolesList = document.getElementById("rolesList");
    (project.roles || []).forEach(role => {
      const li = document.createElement("li");
      li.textContent = role;
      rolesList.appendChild(li);
    });

    // --- Feature Contributions (Enhanced Layout) ---
    // --- Feature Contributions (Robust Layout with Fallbacks & Mixed Ratios) ---
    const featuresGallery = document.getElementById("featuresGallery");
    (project.contributions || []).forEach(contrib => {
      const div = document.createElement("div");
      div.className = "feature-item";

      // Optional image block only if image exists
      const imgBlock = contrib.image
        ? `<div class="feature-image"><img src="../${contrib.image}" alt="${contrib.name}"></div>`
        : "";

      // Bullet points or paragraph
      const detailHTML = Array.isArray(contrib.details)
        ? `<ul>${contrib.details.map(d => `<li>${d}</li>`).join("")}</ul>`
        : `<p>${contrib.details}</p>`;

      div.innerHTML = `
        ${imgBlock}
        <div class="feature-item-content">
          <h4>${contrib.name}</h4>
          <p>${contrib.shortDesc}</p>
          ${detailHTML}
        </div>
      `;

      featuresGallery.appendChild(div);
    });





    // --- Related Projects ---
    const otherProjects = document.getElementById("otherProjects");
    projects
      .filter(p => p.title !== project.title)
      .forEach(p => {
        const div = document.createElement("div");
        div.className = "project-icon-item";
        div.innerHTML = `
          <img src="../${p.icon}" alt="${p.title} Icon" title="${p.title}" />
        `;
        div.addEventListener("click", () => {
          window.location.href = `project-details.html?project=${p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
        });
        otherProjects.appendChild(div);
      });
  });

// --- Lightbox Logic ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

function openLightbox(index) {
  lightboxIndex = index;
  const src = screenshots[lightboxIndex];
  lightboxImg.src = src.startsWith("http") ? src : `../${src}`;
  lightbox.style.display = "flex";
}

function changeLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + screenshots.length) % screenshots.length;
  const src = screenshots[lightboxIndex];
  lightboxImg.src = src.startsWith("http") ? src : `../${src}`;
}

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightboxPrev.addEventListener("click", () => changeLightbox(-1));
lightboxNext.addEventListener("click", () => changeLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
