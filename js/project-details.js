const urlParams = new URLSearchParams(window.location.search);
const projectSlug = urlParams.get("project");
let screenshots = [];
let lightboxIndex = 0;

// Load individual project JSON file based on slug
fetch(`../data/projects-data/${projectSlug}.json`)
  .then(res => {
    if (!res.ok) throw new Error("Project file not found");
    return res.json();
  })
  .then(project => {
    // --- Title & Description ---
    document.getElementById("projectTitle").innerText = project.title;
    document.getElementById("shortDesc").innerText = project.shortDesc || '';

    // --- Play Store Button ---
    const playBtn = document.getElementById("playButton");
    if (project.playLink) {
      playBtn.href = project.playLink;
    } else {
      playBtn.style.display = "none";
    }

    // --- YouTube Video ---
    const youtubeContainer = document.querySelector(".video-container");
    if (project.youtube) {
      document.getElementById("youtubeVideo").src = project.youtube;
    } else {
      youtubeContainer.style.display = "none";
    }

    // --- Screenshot Gallery ---
    const galleryWrapper = document.querySelector(".screenshot-gallery-wrapper");
    const galleryDiv = document.getElementById("screenshotGallery");
    screenshots = project.screenshots || [];

    if (screenshots.length === 0) {
      galleryWrapper.style.display = "none";
    } else {
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
    }

    // --- Roles & Responsibilities ---
    const rolesList = document.getElementById("rolesList");
    (project.roles || []).forEach(role => {
      const li = document.createElement("li");
      li.textContent = role;
      rolesList.appendChild(li);
    });

    // --- Feature Contributions ---
    const featuresGallery = document.getElementById("featuresGallery");
    (project.contributions || []).forEach(contrib => {
      const div = document.createElement("div");
      div.className = "feature-item";

      const imgBlock = contrib.image
        ? `<div class="feature-image"><img src="../${contrib.image}" alt="${contrib.name}"></div>`
        : "";

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
    const projectList = [
      { title: "Alpha Returns", icon: "Images/Projects/AlphaReturns/ProjectIcon.jpg" },
      { title: "Poker VR", icon: "Images/Projects/PokerVR/ProjectIcon.jpg" },
      { title: "Roulette Wheel VR", icon: "Images/Projects/RouletteWheelVR/ProjectIcon.jpg" },
      { title: "Fortune Funnel VR", icon: "Images/Projects/FortuneFunnelVR/ProjectIcon.jpg" },
      { title: "War Ground", icon: "Images/Projects/WarGround/ProjectIcon.jpg" },
      { title: "Hop Ball", icon: "Images/Projects/HopBall/ProjectIcon.jpg" },
      { title: "Word Coach", icon: "Images/Projects/WordCoach/ProjectIcon.jpg" },
      { title: "Zombie Fever", icon: "Images/Projects/ZombieFever/ProjectIcon.jpg" },
      { title: "Arrow Twist", icon: "Images/Projects/ArrowTwist/ProjectIcon.jpg" },
      { title: "World of Rabin", icon: "Images/Projects/WorldOfRabin/ProjectIcon.jpg" }
    ];

    projectList
      .filter(p => slugify(p.title) !== projectSlug)
      .forEach(p => {
        const div = document.createElement("div");
        div.className = "project-icon-item";
        div.innerHTML = `<img src="../${p.icon}" alt="${p.title} Icon" title="${p.title}" />`;
        div.addEventListener("click", () => {
          window.location.href = `project-details.html?project=${slugify(p.title)}`;
        });
        document.getElementById("otherProjects").appendChild(div);
      });

    function slugify(title) {
      return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }
  })
  .catch(() => {
    document.getElementById("projectDetails").innerHTML =
      "<h2 style='text-align:center'>Project not found</h2>";
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

lightboxClose.addEventListener("click", () => (lightbox.style.display = "none"));
lightboxPrev.addEventListener("click", () => changeLightbox(-1));
lightboxNext.addEventListener("click", () => changeLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
