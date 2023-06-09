import Book from './book.js';

export default class AwesomeBooks {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.addBookForm = document.getElementById('bookContent');
    this.addBookForm.addEventListener('submit', this.submitBookForm.bind(this));
    this.displayBooks();
  }

  displayBooks() {
    this.bookList.innerHTML = '';

    this.books.forEach((book, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'table-row';
      listItem.innerHTML = `
      <span class="table-cell">"${book.title}" by ${book.author}</span>
      <span class="table-cell"><button class="remove-btn">Remove</button></span>
      `;
      const removeButton = listItem.querySelector('.remove-btn');
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });
      this.bookList.appendChild(listItem);
    });
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  submitBookForm = (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    this.addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }
}
