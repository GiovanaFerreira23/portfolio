const skills = [
  { name: 'Python', slug: 'python' },
  { name: 'HTML', slug: 'html5' },
  { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg' },
  { name: 'React', slug: 'react' },
  { name: 'ArcGIS', slug: 'esri' },
  { name: 'QGIS', slug: 'qgis' },
  { name: 'Excel', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b52bfe"><path d="M14.636 0v23.978l9.364-1.127V1.127zm-1.815 2.112L0 3.733v16.538l12.821 1.616zm-3.66 14.39-2.399-4.708-2.486 4.606H2.107l3.655-5.961-3.415-5.748h2.247l2.257 4.398 2.21-4.398h2.094l-3.238 5.617 3.528 6.194z"/></svg>` },
  { name: 'Power BI', img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsklEQVR4nO3aQQoCMQxG4f86M15EPW/igfQcWslCXBXsOAlV3oMuA/NBoaWMRONdlna29X7zw6ONLou5pZ00Q1sR/sZcNUOvD6qe3T0gApITEAHJCYgKIFXXDs+GVF07PBtStV0cyIcBEZCcgAjIfKd2GcSST+0yiCdvGyCjARGQbkAiIALSDUgEREC6AYmACEg3IBEQAekG5K8g9uW71t7Ltv5UEy+FMTwLwtZ23AT5pZ7UoRJL5jv5jwAAAABJRU5ErkJggg=="},
  { name: 'Power Automate', img: 'https://cdn.jsdelivr.net/gh/microsoft/PowerBI-Icons@main/PNG/Power-Automate.png' },
  { name: 'Power Apps', img: 'https://cdn.jsdelivr.net/gh/microsoft/PowerBI-Icons@main/PNG/Power-Apps.png' }
];

const grid = document.getElementById('skills-grid');

skills.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card';

  // Fallback icon definition in case SVG is not found
  const fallbackIcon = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b52bfe'><circle cx='12' cy='12' r='10'></circle><text x='50%' y='50%' text-anchor='middle' stroke='%23000' stroke-width='1px' dy='.3em' font-size='10'>⚙️</text></svg>`;

  if (skill.svg) {
    card.innerHTML = `
      <div class="skill-icon-container">${skill.svg}</div>
      <span class="skill-name">${skill.name}</span>
    `;
  } else if (skill.img) {
    card.innerHTML = `
      <img src="${skill.img}" class="skill-icon" alt="${skill.name}">
      <span class="skill-name">${skill.name}</span>
    `;
  } else {
    const iconUrl = `https://cdn.simpleicons.org/${skill.slug}/b52bfe`;
    card.innerHTML = `
      <img src="${iconUrl}" class="skill-icon" alt="${skill.name}" onerror="this.onerror=null; this.src='${fallbackIcon}';">
      <span class="skill-name">${skill.name}</span>
    `;
  }

  grid.appendChild(card);
});

// Adicionar efeito de rolagem (shadow/blur backdrop) para o Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Atualizar o link ativo no menu ao rolar a página
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
