import { animateTagline }   from './hero.js';
import { renderStats }      from './stats.js';
import { initTimeline }     from './timeline.js';
import { initProjects }     from './projects.js';

async function loadSkillsSection() {
    const res = await fetch('html/skills.html');
    const html = await res.text();
    document.getElementById('skills-container').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {

    animateTagline();
    renderStats();
    initTimeline();
    initProjects();
    loadSkillsSection();

    // Load contact section dynamically
    fetch('html/contact.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('contact-container').innerHTML = html;
    });
});




