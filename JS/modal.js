const projects = {
  "ecommerce": {
    title: "E-commerce Website",
    img: "../images/ecommerce.png",
    tags: ["Web Development", "E-commerce", "HTML", "CSS", "JavaScript", "Responsive", "Accessibility", "GitHub"],
    time: "Jan - Feb 2025",
    desc: "A fully responsive e-commerce website with product listings, filters, and a modern UI design.",
    codeLink: "https://github.com/front-end-fundamentals-2025/fef-project-group-18",
    liveLink: "https://front-end-fundamentals-2025.github.io/fef-project-group-18/"
  },
  "fitness": {
    title: "Fitness Website Application",
    img: "../images/figma2.png",
    tags: ["Web Development", "Fitness", "HTML", "CSS", "JavaScript", "Responsive", "Accessibility", "Git"],
    time: "Apr - May 2025",
    desc: "A landing page and interactive dashboard for a fitness platform with user goals and daily tracking features.",
    codeLink: "https://github.com/web-design-project-2025/web-design-project-group-28",
    liveLink: "https://web-design-project-2025.github.io/web-design-project-group-28/"
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
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagContainer.appendChild(span);
  });

  document.getElementById("view-code").href = project.codeLink;
  document.getElementById("view-live").href = project.liveLink;
});

function openModal(project) {
  // existing modal setup code...

  document.body.classList.add('modal-open'); // add this line
  modalOverlay.style.display = "flex";
}

function closeModal() {
  modalOverlay.style.display = "none";
  document.body.classList.remove('modal-open'); // remove the class
}
