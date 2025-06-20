import { animateTagline }   from './hero.js';
import { renderStats }      from './stats.js';
import { initTimeline }     from './timeline.js';
import { initProjects }     from './projects.js';

document.addEventListener('DOMContentLoaded', () => {

    animateTagline();
    renderStats();
    initTimeline();
    initProjects();
});

