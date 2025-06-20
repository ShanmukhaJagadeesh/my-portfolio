export function animateTagline() {
  const scrollText = document.getElementById('scroll-text');
  if (!scrollText) return;
  const messages = [
    'I build scalable Unity architecture.',
    'I lead production across platforms.',
    'I manage cross-functional game teams.',
    'I optimize gameplay systems for performance and retention.',
    'I integrate blockchain systems into traditional game flows.',
    'I design immersive player journeys.'
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = messages[index];
    const partial = current.substring(0, charIndex);
    scrollText.innerHTML = partial;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 60);
    } else if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1600);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 30);
    } else {
      isDeleting = false;
      index = (index + 1) % messages.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();
}
