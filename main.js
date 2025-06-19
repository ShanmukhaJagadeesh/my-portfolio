const projects = [
    {
      title: "Alpha Returns",
      description: "Web3 multiplayer PvP shooter with tokenized assets and crypto rewards.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.alphareturns",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Poker VR",
      description: "VR poker game with realistic physics and intuitive hand-tracking.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.pokervr",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Roulette Wheel VR",
      description: "Multiplayer roulette with dynamic gestures and immersive design.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.roulettevr",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Fortune Funnel VR",
      description: "Physics-based puzzle with haptic feedback and engaging flow.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.fortunevr",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "War Ground",
      description: "Offline PvP shooter featuring FPS & TPS mechanics and optimized performance.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.warground",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Car Drift Racing",
      description: "Realistic mobile drift racing with fine-tuned physics and control.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.cardrift",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Offroad Driving",
      description: "Terrain-based racing game with advanced suspension physics.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.offroad",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Robot Fighting",
      description: "PvP robot game with AI combat and dynamic animations.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.robotfight",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Hop Ball",
      description: "Arcade rhythm game with procedural levels and smooth touch response.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.hopball",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Arrow Twist",
      description: "Physics puzzle game with arrow shooting and curved targets.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.arrowtwist",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    },
    {
      title: "Word Coach",
      description: "Word puzzle game with procedural generation and UI effects.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.wordcoach",
              screenshots: [
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+1",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+2",
            "https://via.placeholder.com/160x100.png?text=Alpha+Returns+3"
        ]
    }
  ];
  
const container = document.getElementById("projectList");
projects.forEach((proj, i) => {
    const div = document.createElement("div");
    div.className = "project-item";
    div.innerHTML = `
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-description">${proj.description}</p>
        <button class="view-btn" data-index="${i}">View Details</button>
    `;
    container.appendChild(div);
});

function showModal(index) {
    const proj = projects[index];
    document.getElementById("modalTitle").innerText = proj.title;
    document.getElementById("modalDesc").innerText = proj.description;
    document.getElementById("playLink").href = proj.playLink;

    // Update screenshots dynamically
    const screenshotsDiv = document.querySelector(".modal-screenshots");
    screenshotsDiv.innerHTML = '';
    (proj.screenshots || []).forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        screenshotsDiv.appendChild(img);
    });

    document.getElementById("modal").style.display = "block";
}

// Event Delegation for better scalability
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('view-btn')) {
        const index = event.target.dataset.index;
        showModal(index);
    }
});

// Close modal when clicking on the close (×) button
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Optional: Close modal if clicking outside modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Accessibility: ESC to close modal
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.getElementById('modal').style.display = 'none';
    }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------
// Timeline Data
const timelineData = [
    {
        company: "Caesium Lab",
        period: "Oct 2023 – Present",
        title: "Lead Unity Developer",
        desc: "Leading a 15+ member team to deliver 'Alpha Returns', a Web3 mobile battle-royale game. Achieved 10x performance boost through system optimization, implemented AI, weapons, inventory, and NFT-based rewards.",
        projects: [
            "Alpha Returns – Web3 multiplayer PvP shooter (tokenized assets, crypto rewards, blockchain integration)"
        ]
    },
    {
        company: "Ivy Comptech",
        period: "Apr 2022 – Aug 2023",
        title: "Senior Software Engineer",
        desc: "Developed and optimized immersive VR titles for Oculus Quest. Focused on frame-rate stability, low-latency input, and advanced VR mechanics for the metaverse.",
        projects: [
            "Poker VR – Multiplayer VR poker with realistic hand tracking",
            "Roulette Wheel VR – Multiplayer roulette with gesture controls",
            "Fortune Funnel VR – Physics-based VR puzzle with haptics"
        ]
    },
    {
        company: "Supercode Games",
        period: "Jan 2019 – Apr 2022",
        title: "Senior Unity Developer",
        desc: "Led development of high-performing mobile games for the Play Store. Engineered core systems, optimized performance, and integrated visuals, audio, and QA across multiple genres.",
        projects: [
            "War Ground – 3D PvP shooter",
            "Car Drift Racing – Drift physics & vehicle control",
            "Offroad Driving – Terrain-based racing",
            "Robot Fighting – PvP AI combat",
            "Hop Ball – Arcade rhythm game",
            "Arrow Twist – Physics-based arrow puzzle",
            "Word Coach – Procedural word puzzle"
        ]
    }
];

// Timeline rendering logic
const tabs = document.getElementById('timelineTabs');
const content = document.getElementById('timelineContent');

function renderTimeline(index = 0) {
    tabs.innerHTML = '';
    timelineData.forEach((entry, i) => {
        const tab = document.createElement('button');
        tab.className = 'timeline-tab' + (i === index ? ' active' : '');
        tab.innerText = entry.company;
        tab.addEventListener('click', () => renderTimeline(i));
        tabs.appendChild(tab);
    });

    const entry = timelineData[index];
    content.innerHTML = `
        <div class="timeline-title">${entry.title} @ ${entry.company}</div>
        <div class="timeline-period">${entry.period}</div>
        <div class="timeline-desc">${entry.desc}</div>
        <ul class="timeline-projects">
            ${entry.projects.map(p => `<li>${p}</li>`).join('')}
        </ul>
    `;
}
renderTimeline(); // Initialize on page load

