export function renderStats() {
    document.querySelector('.stats-bar').innerHTML = `
        <div class="stat">
            <div class="stat-num">11+</div>
            <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat">
            <div class="stat-num">7+</div>
            <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat">
            <div class="stat-num">10x+</div>
            <div class="stat-label">Performance Gains</div>
        </div>
        <div class="stat">
            <div class="stat-num">15+</div>
            <div class="stat-label">Team Members Led</div>
        </div>
    `;
}
