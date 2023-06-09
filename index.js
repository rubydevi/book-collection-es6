/* eslint linebreak-style: ["error", "windows"] */
import AwesomeBooks from './modules/awesomeBooks.js';
import { formatDate } from './modules/utils.js';

// Instantiate AwesomeBooks
const bookCollection = new AwesomeBooks();
bookCollection.displayBooks();

const spanElement = document.getElementById('textDate');
const currentDate = new Date();
const formattedDate = formatDate(currentDate);

spanElement.innerHTML = formattedDate;

// Get all list items
const listItems = document.querySelectorAll('.list-item');

// Add click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    // Get section IDs from HREF
    const sectionId = this.getAttribute('href');

    // Hide all sections except the target one
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      if (section.id !== sectionId.slice(1)) {
        section.style.display = 'none';
      }
    });

    // Show the target section
    const targetSection = document.querySelector(sectionId);
    targetSection.style.display = 'flex';

    // Add the 'active' class to the clicked list item
    listItems.forEach((li) => {
      li.classList.remove('active');
    });
    this.classList.add('active');
  });
});
