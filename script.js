//your JS code here. If required.
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
      square.addEventListener('mouseover', () => {
        squares.forEach(other => {
          if (other !== square) {
            other.style.backgroundColor = '#6F4E37'; // Coffee
          } else {
            other.style.backgroundColor = '#E6E6FA'; // Lavender (stay same)
          }
        });
      });

      square.addEventListener('mouseout', () => {
        squares.forEach(sq => {
          sq.style.backgroundColor = '#E6E6FA'; // Reset to Lavender
        });
      });
    });