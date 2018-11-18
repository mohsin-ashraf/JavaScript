// Book Constructor
function Book(title, auther, isbn) {
  this.title = title;
  this.auther = auther;
  this.isbn = isbn;
}

// UI Constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
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

// UI clear fields
UI.prototype.clearFields = function () {
  const title = document.getElementById("title").value = "";
  const auther = document.getElementById('auther').value = "";
  const isbn = document.getElementById("isbn").value = "";
}
// Show alert
UI.prototype.showAlert = function (message, className) {
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

// Delete book function of UI 
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete text-danger') {
    target.parentElement.parentElement.remove();
  }
}
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
    }, 3000)
  }

  // Add Book
  ui.addBookToList(book);
  ui.clearFields();
  ui.showAlert("Book added successfully to the table", "alert alert-info");
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
  e.preventDefault();
});


// Delete book event listener
document.getElementById("book-list").addEventListener('click', (e) => {
  // Instantiate UI
  const ui = new UI();
  // Delete book.
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert("Book removed successfully", "alert alert-info");
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
  e.preventDefault();
});