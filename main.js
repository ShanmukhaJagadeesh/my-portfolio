const projects = [
    {
      title: "Alpha Returns",
      description: "Web3 multiplayer PvP shooter with tokenized assets and crypto rewards.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.alphareturns"
    },
    {
      title: "Poker VR",
      description: "VR poker game with realistic physics and intuitive hand-tracking.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.pokervr"
    },
    {
      title: "Roulette Wheel VR",
      description: "Multiplayer roulette with dynamic gestures and immersive design.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.roulettevr"
    },
    {
      title: "Fortune Funnel VR",
      description: "Physics-based puzzle with haptic feedback and engaging flow.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.fortunevr"
    },
    {
      title: "War Ground",
      description: "Offline PvP shooter featuring FPS & TPS mechanics and optimized performance.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.warground"
    },
    {
      title: "Car Drift Racing",
      description: "Realistic mobile drift racing with fine-tuned physics and control.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.cardrift"
    },
    {
      title: "Offroad Driving",
      description: "Terrain-based racing game with advanced suspension physics.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.offroad"
    },
    {
      title: "Robot Fighting",
      description: "PvP robot game with AI combat and dynamic animations.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.robotfight"
    },
    {
      title: "Hop Ball",
      description: "Arcade rhythm game with procedural levels and smooth touch response.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.hopball"
    },
    {
      title: "Arrow Twist",
      description: "Physics puzzle game with arrow shooting and curved targets.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.arrowtwist"
    },
    {
      title: "Word Coach",
      description: "Word puzzle game with procedural generation and UI effects.",
      playLink: "https://play.google.com/store/apps/details?id=com.example.wordcoach"
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
    document.getElementById("modal").style.display = "block";
 }
  
 document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const index = event.target.dataset.index;
 showModal(index);
    });
 });

 // Add this at the end of main.js

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
