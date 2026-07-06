const uxProjects = {
  "foodux": {
    title: "Food Delivery Platform",
    img: "images/figma1.png",
    tags: ["UI/UX", "Digital Product", "Prototype", "Wireframing", "Usability Tested", "Figma"],
    time: "Nov 2024",
    desc: "Designed a mobile first food ordering experience for people who don't have time to fight with an app before they can eat. Built around research into what actually slows users down at checkout, and refined through real usability testing until strangers could order a meal without getting stuck.",
    processLink: "food-delivery-process.html",
    prototypeLink: "https://www.figma.com/design/dhOqhZc6RB7RGj8gQ733Rg/App-Design?node-id=0-1&t=zKBN06R18HJ6S4Et-1"
  },
  "fitnessux": {
    title: "Fitness Website Application",
    img: "images/figma2.png",
    tags: ["UI/UX", "Fitness Website Application", "Wireframing", "Usability Tested", "Prototype", "Figma"],
    time: "Mar - Apr 2025",
    desc: "Designed a fitness tracking app for people who want to build a habit, not train for a marathon. The core challenge was keeping beginners from freezing at the goal setting step, solved through an onboarding flow and an in app coach that meets people where they are instead of assuming confidence they don't have yet.",
    processLink: "fitness-process.html",
    prototypeLink: "https://www.figma.com/design/926cmR0y8guN4hwTLEbeqv/Website-Application?node-id=0-1&t=CREoCGWE4fEYKXUX-1"
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
