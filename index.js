/* eslint linebreak-style: ["error", "windows"] */
import { DateTime } from './modules/luxon.js';
import AwesomeBooks from './modules/awesomeBooks.js';

// Instantiate AwesomeBooks
const bookCollection = new AwesomeBooks();
bookCollection.displayBooks();

// Get Date Text Display ID
const spanElement = document.getElementById('textDate');

// Function to update the displayed time
const updateTime = () => {
  const currentDate = DateTime.local().toFormat('MMMM dd yyyy, hh:mm:ss a');
  spanElement.textContent = currentDate;
}

// Display the initial time below the navigation bar
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// Get all list items
const listItems = document.querySelectorAll('.list-item');

// Nav link click function
const clickItem = (e) => {
  e.preventDefault();

  // Get section ID from HREF
  const sectionId = e.target.getAttribute('href');

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
  e.target.classList.add('active');
};

// Add click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener('click', clickItem);
});
