const libraryDiv = document.querySelector('.library');
const newBookButton = document.querySelector('.new-book');
const newBookForm = document.querySelector('.new-book-form');
const addBookButton = document.querySelector('.add-book');
let myLibrary = [];

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
let harryPotter = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 341, true);
let romeoAndJuliet = new Book('Romeo and Juliet', 'Shakespeare', 201, false);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(romeoAndJuliet);
updateLibrary();

console.log(theHobbit.info());
console.log(harryPotter.info());
console.log(romeoAndJuliet.info());

newBookButton.addEventListener('click', (e) => {
  console.log(e.currentTarget);
});
addBookButton.addEventListener('click', (e) => {
  console.log(e.currentTarget);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    let string = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ';
    this.read ? (string += 'read') : (string += 'not read yet');
    return string;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function updateLibrary() {
  myLibrary.forEach((book) => {
    const tag = document.createElement('li');
    const text = document.createTextNode(book.info());
    tag.appendChild(text);
    libraryDiv.appendChild(tag);
  });
}
