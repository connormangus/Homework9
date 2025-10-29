// Step 1: Verify JS connection
console.log('Hello World!');

// Step 3: Variables
let name = "Connor Mangus";
let hasDownloadedResume = false;
let downloadCount = 0;
let skills = [];

// Step 4: Personalized greeting
function showGreeting(userName) {
    return "Hello, my name is " + userName + "! Welcome to my portfolio!";
}

// Step 5: Calculate days until a deadline
function daysUntilDeadline(deadline) {
    const today = new Date();
    const future = new Date(deadline);
    const diffTime = future - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Step 1: Add skill
function addSkill() {
    const skillInput = document.getElementById('skillInput');
    const skillList = document.getElementById('skillsList');
    const skill = skillInput.value.trim();
    if(skill !== "") {
        skills.push(skill);
        const li = document.createElement('li');
        li.textContent = skill;
        li.classList.add('list-group-item');
        skillList.appendChild(li);
        skillInput.value = "";
    }
}

// Step 2 & 3: Projects
const projectTitles = ["Portfolio Website", "GameMaker Project", "CS 126 Assignment"];
const projectDescriptions = [
    "My personal portfolio website showcasing projects and skills.",
    "A simple game created in GameMaker in high school.",
    "An assignment from CS 126 class at NAU."
];
//placeholder deadlines
const projectDeadlines = ["2025-11-01", "2023-05-15", "2024-12-10"];

function displayProjects() {
    const container = document.getElementById('projectsContainer');
    const today = new Date();
    for(let i = 0; i < projectTitles.length; i++) {
        const card = document.createElement('div');
        card.classList.add('col');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card', 'shadow-sm', 'h-100', 'p-3');
        
        const title = document.createElement('h5');
        title.textContent = projectTitles[i];
        title.classList.add('card-title');
        
        const desc = document.createElement('p');
        desc.textContent = projectDescriptions[i];
        desc.classList.add('card-text');
        
        const deadline = new Date(projectDeadlines[i]);
        const status = document.createElement('p');
        status.classList.add('card-text');
        if(deadline > today) {
            status.textContent = "Status: Ongoing";
        } else {
            status.textContent = "Status: Completed";
        }
        
        const deadlineText = document.createElement('p');
        deadlineText.textContent = "Deadline: " + projectDeadlines[i];
        deadlineText.classList.add('card-text');
        
        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(deadlineText);
        cardBody.appendChild(status);
        card.appendChild(cardBody);
        container.appendChild(card);
    }
}

// Step 4: Resume download counter
function incrementDownloadCount() {
    downloadCount++;
    const downloadEl = document.getElementById('downloadCount');
    if(downloadEl) {
        downloadEl.textContent = `Resume downloaded: ${downloadCount} times`;
    }
}

// Execute after DOM loads
window.addEventListener('DOMContentLoaded', () => {

    // Display greeting
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = showGreeting(name);
    }

    // Resume button click
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            if (!hasDownloadedResume) {
                alert("Your resume is downloaded successfully!");
                hasDownloadedResume = true;
            }
            incrementDownloadCount();
        });
    }

    // Skill button click
    const addSkillBtn = document.getElementById('addSkillBtn');
    if(addSkillBtn) {
        addSkillBtn.addEventListener('click', addSkill);
    }

    // Display projects
    displayProjects();

});