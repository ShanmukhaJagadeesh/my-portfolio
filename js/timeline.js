export async function initTimeline() {
    const res = await fetch('data/timeline.json');
    const timelineData = await res.json();
    const tabs = document.getElementById('timelineTabs');
    const content = document.getElementById('timelineContent');

    function render(index = 0) {
        tabs.innerHTML = '';
        timelineData.forEach((entry, i) => {
            const tab = document.createElement('button');
            tab.className = 'timeline-tab' + (i === index ? ' active' : '');
            tab.innerText = entry.company;
            tab.addEventListener('click', () => render(i));
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
    render(0);
}
