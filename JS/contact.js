(function () {
  emailjs.init("XJOvoIId8TZuQUzgp"); 
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  emailjs.send("service_svseabs", "template_3rfccpl", {
    name: form.name.value,
    email: form.email.value,
    telephone: form.telephone.value,
    message: form.message.value,
  }).then(
    function (response) {
      document.getElementById("status-msg").textContent = "✅ Message sent successfully!";
      form.reset();
    },
    function (error) {
      document.getElementById("status-msg").textContent = "❌ Failed to send message. Please try again later.";
      console.error("EmailJS Error:", error);
    }
  );
});
