// timeline.js
export async function initTimeline() {
    // Map company to logo file
    const logoMap = {
      "Caesium Lab": "images/logo/caesiumlab_logo.jpg",
      "Ivy Comptech": "images/logo/ivycomptech_logo.jpg",
      "Supercode Games": "images/logo/supercodegames_logo.jpg",
      "ARDIS Enviro Solutions": "images/logo/ardisenvirosolutions.jpg",
      "Sasi Institute of Technology and Engineering (SITE)": "images/logo/sasi_logo.jpg",
    };

    const res = await fetch('data/timeline.json');
    const timelineData = await res.json();

    const container = document.querySelector('.timeline-section .timeline-entries');
    container.innerHTML = `<div class="timeline-bar"></div>`;

    // Find where education starts
    let eduIdx = timelineData.findIndex(
        e => (e.company && e.company.toLowerCase().includes('institute'))
          || (e.title && e.title.toLowerCase().includes('b.tech'))
          || (e.title && e.title.toLowerCase().includes('education'))
    );
    if (eduIdx === -1) eduIdx = timelineData.length; // fallback: all experience

    // Experience Heading
    container.innerHTML += `<h3 class="section-subtitle">Experience</h3>`;

    timelineData.forEach((entry, idx) => {
        // Add Education Heading just before the first education entry
        if (idx === eduIdx) {
            container.innerHTML += `<h3 class="section-subtitle">Education</h3>`;
        }
        const logoSrc = logoMap[entry.company] || "Images/Logo/default.png";
        container.innerHTML += `
            <div class="timeline-entry">
                <div class="timeline-dot">
                    <img class="timeline-logo" src="${logoSrc}" alt="${entry.company} logo">
                </div>
                <div class="timeline-date">${entry.period || entry.date || ""}</div>
                <div class="timeline-content">
                    <div class="timeline-role">${entry.title}</div>
                    <div class="timeline-company">${entry.company}</div>
                    <p>${entry.desc || ""}</p>
                    ${entry.projects && entry.projects.length > 0
                        ? `<ul>${entry.projects.map(p => `<li>${p}</li>`).join('')}</ul>`
                        : ''}
                </div>
            </div>
        `;
        // Add separator IF (not last entry) AND (next entry is not a heading)
        // i.e., don't add after section heading or after last entry
        const isLastEntry = idx === timelineData.length - 1;
        const isBeforeEducation = (idx + 1 === eduIdx); // the entry just before education heading
        if (!isLastEntry && !isBeforeEducation) {
            container.innerHTML += `<div class="timeline-separator"></div>`;
        }
    });
}