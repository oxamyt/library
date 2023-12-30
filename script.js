const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  readStatus() {
    this.status = !this.status;
  }
}

function readChange(index) {
  myLibrary[index].readStatus();
  displayBook();
}

function addBookToLibrary(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const author = document.querySelector("#author").value;
  const status = document.querySelector("#status").checked;
  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  displayBook();
}

function displayBook() {
  const library = document.querySelector(".library");
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let card = document.createElement("div");
    card.innerHTML = `<div class="card">
        <h1 class="title">${book.title}</h1>
        <h2 class="author"> By: ${book.author}</h2>
        <h3 class="pages">Number of pages: ${book.pages}</h3>
        <h4 class="status">${book.status ? "Read" : "Not read yet"}</h4>
        <button class="remove" onclick='removeBook(${i})'>Remove Book</button>
        <button class="toggle" onclick='readChange(${i})'>Change read status</button>
      </div>`;
    library.appendChild(card);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

const formDiv = document.querySelector(".form-cont");
const bookForm = document.querySelector(".book-form");
const addBtn = document.querySelector(".add-book");
addBtn.addEventListener("click", function () {
  if (formDiv.style.display == bookForm.style.display) {
    formDiv.style.display = "block";
    bookForm.style.display = "flex";
  } else if (formDiv.style.display !== bookForm.style.display) {
    formDiv.style.display = "none";
    bookForm.style.display = "none";
  }
});

const btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", addBookToLibrary);
