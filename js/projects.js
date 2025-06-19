export async function initProjects() {
    const res = await fetch('data/projects.json');
    const projects = await res.json();
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

    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-btn')) {
            const index = event.target.dataset.index;
            showModal(index);
        }
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            document.getElementById('modal').style.display = 'none';
        }
    });
}
