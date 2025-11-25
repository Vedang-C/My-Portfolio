/*
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
*/

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "237b4aea-8d75-475b-8172-bed9ea0a00de");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("✅Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("❌Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});