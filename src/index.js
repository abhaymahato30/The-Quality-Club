import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';

AOS.init({
  duration: 1000,  // Duration of the animation
  easing: 'ease-in-out',  // Animation easing
  once: true,  // Trigger animation only once
});
