const libraryDiv = document.querySelector(".library");
let myLibrary = [];

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

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
let harryPotter = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 341, true);
let romeoAndJuliet = new Book('Romeo and Juliet', 'Shakespeare', 201, false);

console.log(theHobbit.info());
console.log(myLibrary);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(romeoAndJuliet);

function updateLibrary() {
  myLibrary.forEach(book => {
    const tag = document.createElement("li");
    const text = document.createTextNode(book.title);
    tag.appendChild(text);
    libraryDiv.appendChild(tag);
  })
}

updateLibrary();