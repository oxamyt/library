const myLibrary = [];

function Book(title, author, status){
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(){
    event.preventDefault();
    const title =document.querySelector("#title")
    const author =document.querySelector("#author")
    const status =document.querySelector('input[name=status]:checked')
    let newBook = new Book (title.value, author.value, status.value)
    myLibrary.push(newBook);
}

const button = document.querySelector('#add');
button.addEventListener('click', addBookToLibrary)