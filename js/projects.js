// Optionally export this if another script (like project-details.js) wants access
export let loadedProjects = [];

export async function initProjects() {
    const projectFilenames = [
        "alpha-returns.json",
        "arrow-twist.json",
        "car-drift-racing.json",
        "fortune-funnel-vr.json",
        "hop-ball.json",
        "nut-color-sort.json",
        "offroad-driving.json",
        "poker-vr.json",
        "roulette-wheel-vr.json",
        "war-ground.json",
        "word-coach.json",
        "world-of-rabin.json",
        "zombie-fever.json"
    ];

    const container = document.getElementById("projectList");

    // Load all projects
    loadedProjects = await Promise.all(
        projectFilenames.map(name =>
            fetch(`data/projects-data/${name}`).then(res => res.json())
        )
    );

    // Render each project card
    loadedProjects.forEach((proj) => {
        const slug = slugify(proj.title);

        const div = document.createElement("div");
        div.className = "project-item";
        div.innerHTML = `
            <div class="project-thumb">
                <img src="${proj.icon || 'Images/placeholder.png'}" alt="${proj.title} Icon" />
            </div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-description">${proj.description}</p>
            <a class="view-btn" href="html/project-details.html?project=${slug}">View</a>
        `;

        container.appendChild(div);
    });
}

// Utility: Convert project title to slug-safe string
function slugify(title) {
    return title.toLowerCase()
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '')     // Remove non-word chars
        .replace(/\-\-+/g, '-')       // Replace multiple hyphens
        .replace(/^-+/, '')           // Trim hyphens from start
        .replace(/-+$/, '');          // Trim hyphens from end
}
