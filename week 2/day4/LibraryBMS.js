/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

class Book {
    title;
    author;
    pages;
    isAvailable;
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    borrow() {
        this.isAvailable = false;
    }
    returnBook() {
        this.isAvailable = true;
    }
    getInfo() {
        console.log(`${this.title} by ${this.author}(${this.pages}) is available : ${this.isAvailable}`);

    }
    isLongBook() {
        return this.pages > 300 ? true : false;

    }

}

let b1 = new Book("Harry Potter", "J.K rowling", 300);
let b2 = new Book("hobbit", "uv", 500, true);
let b3 = new Book("Rs.agarwal", "Rs.agarwal", 250, true);
let b4 = new Book("The play Book", "pranay reddy", 600, true);
let b5 = new Book("RD sharma", "RD sharma", 600, false);

let books = [b1, b2, b3, b4, b5];


//Display info of all books
for (book of books) {
    console.log(book)
}

//Borrow 2 books and show their availability status
b3.borrow();
b4.borrow();
console.log(b3.title, "Available:", b3.isAvailable);
console.log(b4.title, "Available:", b4.isAvailable)


// Return 1 book and show updated status
b4.returnBook()
console.log(b4.title, "Available:", b4.isAvailable);


//Count how many books are "long books" (more than 300 pages)
{
    let count = 0;
    for (let book of books) {
        if (book.isLongBook())
            count++;
    }
    console.log("No of books that have more than 500 pages:", count);
}

//List all available books
let availableBooks = books.filter(book => book.isAvailable);
console.log(availableBooks)
