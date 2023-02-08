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

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());
console.log(myLibrary);
addBookToLibrary(theHobbit);
console.log(myLibrary);