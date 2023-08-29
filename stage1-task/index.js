class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

class LibraryCatalog {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
}

LibraryCatalog.prototype.bookIterator = function*() {
    let count = 0;
    while (count < this.books.length) {
      yield this.books[count];
      count++;
    }
  }

LibraryCatalog.prototype[Symbol.iterator] = function() {
  return this.bookIterator();
}

const newLibrary = new LibraryCatalog();
// Examples
const book = new Book("master javascript", "C. Sesugh", "Classic");
const book1 = new Book("Devops", "Ikechukwu", "Classic");

newLibrary.addBook(book);
newLibrary.addBook(book1);

console.log(newLibrary); // all books

const booksByAuthor = library.getBooksByAuthor('Ikechukwu');
console.log(booksByAuthor);
