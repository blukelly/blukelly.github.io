    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX / window.innerWidth;

      // Use linear-gradient to create a smooth transition between colors
      const backgroundColor = `linear-gradient(to right, white ${mouseX * 100}%, gray, black ${mouseX * 100}%)`;

      // Set the background color based on the mouse position
      document.body.style.background = backgroundColor;
    });