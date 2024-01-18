document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image_container');
    let isMouseOverContainer = false;
  
    function handleMouseOver(event) {
      isMouseOverContainer = true;
      const targetImage = event.target;
  
      if (targetImage.tagName.toLowerCase() === 'img') {
        targetImage.style.transition = 'transform 17s ease'; // Adjust the duration as needed
        targetImage.style.transform = 'translateY(500px)';
        targetImage.style.transform = 'translateX(200px)';
      }
    }
  
    function handleMouseOut(event) {
      isMouseOverContainer = false;
      const targetImage = event.target;
  
      if (targetImage.tagName.toLowerCase() === 'img') {
        targetImage.style.transition = 'transform 5s ease'; // Adjust the duration as needed
        targetImage.style.transform = 'translateY(0)';
        targetImage.style.transform = 'translateX(0)';
      }
    }
  
    imageContainers.forEach(container => {
      container.addEventListener('mouseover', handleMouseOver);
      container.addEventListener('mouseout', handleMouseOut);
    });
  });
  
  