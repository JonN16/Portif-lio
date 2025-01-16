let QUADRADO_DURATION = 7000;

// Adjust QUADRADO_DURATION if the current page is project1.html
if (window.location.pathname.includes('project1.html')) {
    QUADRADO_DURATION = 3000;
}

function showProjects() {
    const infoTitle = document.getElementById('info-title');
    const projectList = document.getElementById('project-list');
    const skillsList = document.getElementById('skills-list');
    const projectsButton = document.getElementById('projects-button');
    const skillsButton = document.getElementById('skills-button');

    if (infoTitle && projectList && skillsList && projectsButton && skillsButton) {
        infoTitle.innerText = 'Projects';
        projectList.style.display = 'flex';
        skillsList.style.display = 'none';
        projectsButton.classList.add('active');
        skillsButton.classList.remove('active');
    }
}

function showSkills() {
    const infoTitle = document.getElementById('info-title');
    const projectList = document.getElementById('project-list');
    const skillsList = document.getElementById('skills-list');
    const projectsButton = document.getElementById('projects-button');
    const skillsButton = document.getElementById('skills-button');

    if (infoTitle && projectList && skillsList && projectsButton && skillsButton) {
        infoTitle.innerText = 'Languages I Know';
        projectList.style.display = 'none';
        skillsList.style.display = 'flex';
        skillsList.classList.add('animated');
        skillsButton.classList.add('active');
        projectsButton.classList.remove('active');
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showProjects();
    handleScroll();
});

function handleScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 120) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

function criarQuadrado() {
    const quadrado = document.createElement('div');
    quadrado.classList.add('quadrado');

    quadrado.style.left = `${Math.random() * 98}vw`;
    if (document.body) {
        quadrado.style.top = `${Math.random() * (document.body.scrollHeight - 70)}px`;
        document.body.appendChild(quadrado);
    }

    setTimeout(() => {
        quadrado.remove();
    }, QUADRADO_DURATION);
}

setInterval(criarQuadrado, 100);

for (let i = 0; i < 7; i++) {
    criarQuadrado();
}