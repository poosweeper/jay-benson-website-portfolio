document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.image_about_one img');
  
    image.addEventListener('mouseenter', function () {
      image.style.transition = 'transform 10s ease'; // Adjust the duration as needed
      image.style.transform = 'translateY(500px)';
    });
  
    image.addEventListener('mouseleave', function () {
      image.style.transition = 'transform 10s ease'; // Adjust the duration as needed
      image.style.transform = 'translateY(0)';
    });
  });
  
  