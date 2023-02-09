const libraryDiv = document.querySelector('.library');
const newBookButton = document.querySelector('.new-book');
const newBookForm = document.querySelector('.new-book-form');
// const formInputs = document.querySelectorAll('.new-book-form input');
const formTitle = document.querySelector('input#title');
const formAuthor = document.querySelector('input#author');
const formPages = document.querySelector('input#pages');
const formIsRead = document.querySelector('input#is-read');

const addBookButton = document.querySelector('.add-book');
let myLibrary = [];

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
let harryPotter = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 341, true);
let romeoAndJuliet = new Book('Romeo and Juliet', 'Shakespeare', 201, false);
addBookToLibrary(false, theHobbit);
addBookToLibrary(false, harryPotter);
addBookToLibrary(false, romeoAndJuliet);
updateLibrary();

console.log(theHobbit.info());
console.log(harryPotter.info());
console.log(romeoAndJuliet.info());

// newBookButton.addEventListener('click', displayForm);
addBookButton.addEventListener('click', addBookToLibrary);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () => {
    let string = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ';
    this.isRead ? (string += 'read') : (string += 'not read yet');
    return string;
  };
}

function addBookToLibrary(event, book) {
  if (book) myLibrary.push(book);
  if (!book) {
    let newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formIsRead.checked);
    myLibrary.push(newBook);
  }
  updateLibrary();
}

function updateLibrary() {
  clearLibrary();
  myLibrary.forEach((book) => {
    const tag = document.createElement('li');
    const text = document.createTextNode(book.info());
    tag.appendChild(text);
    libraryDiv.appendChild(tag);
  });
}

function clearLibrary() {
  while (libraryDiv.firstChild) {
    libraryDiv.removeChild(libraryDiv.firstChild);
  }
}
