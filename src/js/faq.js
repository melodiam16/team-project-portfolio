import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container-second', {
    duration: 400,
    showMultiple: false,
  });
});
export { Accordion };
