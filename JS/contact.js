document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("status-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusMsg.innerHTML = "Sending...";
    statusMsg.style.color = "#a678ff";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        statusMsg.innerHTML = "✅Message sent successfully!";
        statusMsg.style.color = "#4ade80";
        form.reset();
      } else {
        statusMsg.innerHTML = "❌Something went wrong. Please try again!!!";
        statusMsg.style.color = "#ef4444";
      }
    } catch (error) {
      statusMsg.innerHTML = "❗Network error. Please try again later.";
      statusMsg.style.color = "#ef4444";
    }
  });
});
