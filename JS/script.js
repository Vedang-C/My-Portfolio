    const roles = ["Graphic Designer", "UI/UX Designer", "Web Developer"];
    let currentRole = 0;
    let letterIndex = 0;
    let typing = true;

    const roleEl = document.getElementById("role");

    function typeEffect() {
      const currentText = roles[currentRole];

      if (typing) {
        roleEl.textContent = currentText.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentText.length) {
          typing = false;
          setTimeout(typeEffect, 1000);
          return;
        }
      } else {
        roleEl.textContent = currentText.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
          typing = true;
          currentRole = (currentRole + 1) % roles.length;
        }
      }
      setTimeout(typeEffect, typing ? 100 : 50);
    }

    typeEffect();

