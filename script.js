function showProjects() {
    document.getElementById('info-title').innerText = 'Projects';
    document.getElementById('project-list').style.display = 'flex';
    document.getElementById('skills-list').style.display = 'none';
    document.getElementById('projects-button').classList.add('active');
    document.getElementById('skills-button').classList.remove('active');
}

function showSkills() {
    document.getElementById('info-title').innerText = 'Languages I Know';
    document.getElementById('project-list').style.display = 'none';
    document.getElementById('skills-list').style.display = 'flex';
    document.getElementById('skills-list').classList.add('animated');
    document.getElementById('skills-button').classList.add('active');
    document.getElementById('projects-button').classList.remove('active');
}

// Show skills list by default
document.addEventListener('DOMContentLoaded', function() {
    showSkills();
});
