export function renderHero() {
    document.querySelector('.hero').innerHTML = `
        <div class="hero-left">
            <h1>Hey, I’m <span class="accent">Shanmuka Jagadeesh</span></h1>
            <h2>Lead Unity Developer from Hyderabad</h2>
            <pre class="tagline">I create scalable game systems & immersive player experiences</pre>
            <div class="hero-btns">
                <a class="btn btn-accent" href="#contact">Hire Me</a>
                <a class="btn btn-outline" href="ShanmukaJagadeesh_Resume.pdf" download>Download Resume</a>
            </div>
        </div>
        <div class="hero-photo">
            <img src="Images/Profile/ProfilePicture.png" alt="Shanmuka Jagadeesh"/>
        </div>
    `;
}
