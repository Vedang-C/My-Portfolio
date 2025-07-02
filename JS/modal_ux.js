const uxProjects = {
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
  const project = uxProjects[projectId];

  if (!project) {
    document.querySelector(".modal-body").innerHTML = "<p>UI/UX Project not found.</p>";
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

  document.getElementById("view-process").href = project.processLink;
  document.getElementById("view-prototype").href = project.prototypeLink;
});
