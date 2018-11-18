class Book {
  constructor(title, auther, isbn) {
    this.title = title;
    this.auther = auther;
    this.isbn = isbn;
  }

}

class UI {
  addBookToList(book) {


    const list = document.getElementById("book-list");
    // Create tr element
    const row = document.createElement("tr");
    // Insert cols    
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.auther}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class="delete text-danger">X</a></td>
    `;
    list.appendChild(row);
  }
  showAlert(message, className) {
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    // Add text to the div
    div.appendChild(document.createTextNode(message));
    // Grab form to insert the error before.
    const form = document.querySelector("#book-form");
    // Grab container as parent element
    const container = document.querySelector('.container');
    container.insertBefore(div, form);
  }
  deleteBook(target) {
    if (target.className === 'delete text-danger') {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    const title = document.getElementById("title").value = "";
    const auther = document.getElementById('auther').value = "";
    const isbn = document.getElementById("isbn").value = "";
  }
}

// LocalStorage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books
  }
  static displayBook() {
    const books = Store.getBooks();
    // Add boo to UI
    books.forEach(book => {
      const ui = new UI;
      ui.addBookToList(book);
    })
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }

}

// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayBook);

// Add book event listener
document.getElementById("book-form").addEventListener('submit', (e) => {
  // Get Form Values
  const title = document.getElementById("title").value;
  const auther = document.getElementById('auther').value;
  const isbn = document.getElementById("isbn").value;

  // Instentiating the book
  const book = new Book(title, auther, isbn);
  // Instantiate UI
  const ui = new UI();

  // Validation for the input fields
  if (title === '' || auther === '' || isbn === '') {
    ui.showAlert('Please fill in all the fields', 'alert alert-danger')
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  } else {
    let sameIsbn = false;
    // Check for validity of ISBN
    const books = Store.getBooks();
    for (let i = 0; i < books.length; i++) {
      if (book.isbn === books[i].isbn) {
        sameIsbn = true;

      }
    }
    if (sameIsbn) {
      const ui = new UI;
      ui.showAlert("You cannot add two books with the same ISBN number", "alert alert-danger");
      setTimeout(() => {
        document.querySelector(".alert").remove();
      }, 3000);
    } else {
      // Add Book
      ui.addBookToList(book);
      ui.clearFields();
      ui.showAlert("Book added successfully to the table", "alert alert-info");
      Store.addBook(book);
      setTimeout(() => {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }
  e.preventDefault();
});


// Delete book event listener
document.getElementById("book-list").addEventListener('click', (e) => {
  // Instantiate UI
  const ui = new UI();
  // Delete book.
  ui.deleteBook(e.target);
  // Remove From LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // Show message
  ui.showAlert("Book removed successfully", "alert alert-info");
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
  e.preventDefault();
});