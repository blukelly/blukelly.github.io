      const numCircles = 25;

      for (let i = 0; i < numCircles; i++) {
        createFallingCircle();
      }

      function createFallingCircle() {
        const circle = document.createElement('div');
        circle.classList.add('falling-circle');
        circle.style.left = `${Math.random() * window.innerWidth}px`;
        circle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Vary animation duration
        document.body.appendChild(circle);
      }

