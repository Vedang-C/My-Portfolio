const projects = {
  "ecommerce": {
    title: "E-commerce Website",
    img: "images/ecommerce.png",
    tags: ["Web Development", "E-commerce", "HTML", "CSS", "JavaScript", "Responsive", "Accessibility", "GitHub"],
    time: "Jan - Feb 2025",
    desc: "A fully responsive e-commerce website with product listings, filters, and a modern UI design.",
    codeLink: "https://github.com/front-end-fundamentals-2025/fef-project-group-18",
    liveLink: "https://front-end-fundamentals-2025.github.io/fef-project-group-18/"
  },
  "fitness": {
    title: "Fitness Website Application",
    img: "images/figma2.png",
    tags: ["Web Development", "Fitness", "HTML", "CSS", "JavaScript", "Responsive", "Accessibility", "Git"],
    time: "Apr - May 2025",
    desc: "A landing page and interactive dashboard for a fitness platform with user goals and daily tracking features.",
    codeLink: "https://github.com/web-design-project-2025/web-design-project-group-28",
    liveLink: "https://web-design-project-2025.github.io/web-design-project-group-28/"
  },
  "foodux": {
    title: "Food Delivery Platform",
    img: "images/figma1.png",
    tags: ["UI/UX", "Digital Product", "Prototype", "Wireframing", "Usability Tested", "Figma"],
    time: "Nov 2024",
    desc: "A complete UI/UX project for a mobile-first food delivery service, designed with accessibility and ease-of-use in mind.",
    processLink: "food-delivery-process.html",
    prototypeLink: "https://www.figma.com/proto/dhOqhZc6RB7RGj8gQ733Rg/App-Design"
  },
  "fitnessux": {
    title: "Fitness Website Application",
    img: "images/figma2.png",
    tags: ["UI/UX", "Fitness Website Application", "Wireframing", "Usability Tested", "Prototype", "Figma"],
    time: "Mar - Apr 2025",
    desc: "A responsive web app design promoting user engagement through intuitive workout tracking and clean navigation.",
    processLink: "fitness-process.html",
    prototypeLink: "https://www.figma.com/proto/926cmR0y8guN4hwTLEbeqv/Website-Application"
  }
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const projectId = getQueryParam("project");
  const project = projects[projectId];

  if (!project) {
    document.querySelector(".modal-content").innerHTML = "<p>Project not found.</p>";
    return;
  }

  document.getElementById("modal-image").src = project.img;
  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-description").innerText = project.desc;
  document.getElementById("modal-time").innerText = project.time;

  const tagContainer = document.getElementById("modal-tags");
  tagContainer.innerHTML = "";
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagContainer.appendChild(span);
  });

  const buttonsContainer = document.querySelector(".modal-buttons");
  buttonsContainer.innerHTML = "";

  if (project.codeLink && project.liveLink) {
    buttonsContainer.innerHTML = `
      <a href="${project.codeLink}" target="_blank" class="btn btn-dark">View Code</a>
      <a href="${project.liveLink}" target="_blank" class="btn btn-purple">View Live</a>
    `;
  } else if (project.processLink && project.prototypeLink) {
    buttonsContainer.innerHTML = `
      <a href="${project.processLink}" target="_blank" class="btn btn-dark">View Design Process</a>
      <a href="${project.prototypeLink}" target="_blank" class="btn btn-purple">View Final Prototype</a>
    `;
  }
});