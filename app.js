const myLibrary = [];

class Book{
 constructor(authour, name, year, publisher){
    this.authour = authour;
    this.name = name;
    this.year = year;
    this.publisher = publisher;

 }
 
}


function getBookInfo(){
    const bookName = prompt("Enter the name of the book: ");
    const bookAuthor = prompt("Enter the author of the book: ");
    const bookYear = prompt("Enter the year the book got published.");
    const bookPublisher = prompt("Enter the name of the publisher");

    return { bookName, bookAuthor, bookYear, bookPublisher};

}


const {bookName, bookAuthor, bookYear, bookPublisher} = getBookInfo();


function createBookObject(bkName, bkAu, bkYe, bkPub) {
    const singularBook = new Book(`${bkAu}`, `${bkName}`, `${bkYe}`,`${bkPub}`);
    return singularBook
}

const bookObject = createBookObject(bookName, bookAuthor, bookYear, bookPublisher);
myLibrary.unshift(bookObject);
console.log(myLibrary);