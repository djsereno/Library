class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = +pages;
    this.read = read;
    this.info = () => {
      let string = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ';
      this.read ? (string += 'read') : (string += 'not read yet');
      return string;
    };
  }
}

const newBookButton = document.querySelector('.new-book');
const libraryContainer = document.querySelector('.library');
const formOverlay = document.querySelector('.overlay');
const newBookForm = document.querySelector('.new-book-form');

const formClose = document.querySelector('.new-book-form .close');
const formTitle = document.querySelector('input#title');
const formAuthor = document.querySelector('input#author');
const formPages = document.querySelector('input#pages');
const formRead = document.querySelector('input#read');
const addBookButton = document.querySelector('.add-book');

const myLibrary = [];
newBookButton.addEventListener('click', showForm);
addBookButton.addEventListener('click', addBookFromForm);
formClose.addEventListener('click', hideForm);

// Sample content

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 320, true);
const prideAndPrejudice = new Book('Pride & Prejudice', 'Jane Austin', 520, true);
const grapesOfWrath = new Book('The Grapes of Wrath', 'John Steinbeck', 464, false);
const slaughterhouseFive = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', 224, true);

addBookToLibrary(theHobbit);
addBookToLibrary(prideAndPrejudice);
addBookToLibrary(grapesOfWrath);
addBookToLibrary(slaughterhouseFive);

function addBookFromForm() {
  if (!newBookForm.checkValidity()) {
    newBookForm.reportValidity();
    return;
  }
  const book = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
  addBookToLibrary(book);
  hideForm();
  clearForm();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  const bookCard = createBookCard(book);
  libraryContainer.appendChild(bookCard);
}

function createBookCard(book) {
  const bookCard = document.createElement('li');
  const titleTag = document.createElement('h2');
  const detailsTag = document.createElement('ul');
  const authorTag = document.createElement('li');
  const pagesTag = document.createElement('li');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book');
  titleTag.classList.add('title');
  detailsTag.classList.add('book-details');
  authorTag.classList.add('author');
  pagesTag.classList.add('pages');
  readBtn.classList.add('button', 'read');
  if (!book.read) readBtn.classList.add('unread');
  removeBtn.classList.add('button', 'remove');

  titleTag.innerText = book.title;
  authorTag.innerText = 'by ' + book.author;
  pagesTag.innerText = book.pages + ' pages';
  book.read ? (readBtn.innerText = 'Read') : (readBtn.innerText = 'Not Read');
  removeBtn.innerText = 'Remove';

  bookCard.setAttribute('data-index', libraryContainer.childElementCount);
  readBtn.addEventListener('click', toggleReadStatus);
  removeBtn.addEventListener('click', removeBook);

  bookCard.appendChild(titleTag);
  detailsTag.appendChild(authorTag);
  detailsTag.appendChild(pagesTag);
  bookCard.appendChild(detailsTag);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);

  return bookCard;
}

function toggleReadStatus(event) {
  const readBtn = event.currentTarget;
  const index = getBookIndex(readBtn);
  myLibrary[index].read = !myLibrary[index].read;
  myLibrary[index].read ? (readBtn.innerText = 'Read') : (readBtn.innerText = 'Not Read');
  readBtn.classList.toggle('unread');
}

function removeBook(event) {
  const index = getBookIndex(event.currentTarget);
  myLibrary.splice(index, 1);
  refreshLibrary();
}

function refreshLibrary() {
  clearLibrary();
  myLibrary.forEach((book) => {
    const bookCard = createBookCard(book);
    libraryContainer.appendChild(bookCard);
  });
}

function clearLibrary() {
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }
}

function showForm() {
  formOverlay.classList.add('show');
}

function hideForm() {
  formOverlay.classList.remove('show');
}

function clearForm() {
  formTitle.value = null;
  formAuthor.value = null;
  formPages.value = null;
  formRead.checked = false;
}

function getBookIndex(node) {
  return node.parentElement.getAttribute('data-index');
}
