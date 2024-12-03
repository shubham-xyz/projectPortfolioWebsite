// Project Data
const projects = [
    {
        title: "Project 1",
        technologies: "HTML, CSS, JavaScript",
        description: "A simple web application that demonstrates dynamic functionality using JavaScript.",
    },
    {
        title: "Project 2",
        technologies: "HTML, CSS, JavaScript",
        description: "A responsive website built with modern design principles and best practices.",
    },
    {
        title: "Project 3",
        technologies: "HTML, CSS, JavaScript",
        description: "A fun project exploring interactive elements and animations.",
    },
];

// Load Projects Dynamically
const projectList = document.getElementById("project-list");

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card neumorphism";

    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p><span>Technologies:</span> ${project.technologies}</p>
        <p>${project.description}</p>
    `;

    projectList.appendChild(projectCard);
});
