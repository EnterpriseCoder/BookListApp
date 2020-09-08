
// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//ui constructor

function UI() { }
//Add Book To the list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a  href="#" class="delete" >X</a></td>
    `;
    list.appendChild(row)

}
//show alert in ui
// function showAlert() {

// }

UI.prototype.showAlert = function (msg, className) {
    const div = document.createElement('div');
    // adding classse
    div.className = `alert ${className}`;
    //add the text
    div.appendChild(document.createTextNode(msg));
    // get parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);
    //timeout after 2 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 4444)
}
UI.prototype.newalert = function (msg, className) {
    // adding classse
    div.className = `success ${className}`;
    //add the text
    div.appendChild(document.createTextNode(msg));
    // get parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    const div = document.createElement('div');
    // Insert Alert
    container.insertBefore(form, div);
    //timeout after 2 sec
    setTimeout(function () {
        document.querySelector('.success').remove();
    }, 2222)
}

//Delete Book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }

}


UI.prototype.clr = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



//Event listener  add book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        //getting form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        //Instantiating
        const book = new Book(title, author, isbn);
        const ui = new UI();
        //validate
        if (title === '' || author === '' || isbn === '') {
            //Error Alert
            //message text and class name
            ui.showAlert('please check the fields', 'error');
        } else {
            //adding ui to book list
            ui.addBookToList(book)
            ui.showAlert('A Book Added To The List', 'success');

            //CLEAR FIELDS
            ui.clr();
        }


        e.preventDefault();
    });

//Event listener for delete
document.getElementById('book-list').addEventListener('click',
    function (e) {
        const ui = new UI();
        ui.deleteBook(e.target);
        ui.showAlert('removed', 'success')

        e.preventDefault();
    });





// UI.prototype.clr2 = function () {
//     if (UI.target.id === "del") {
//         document.getElementById('del').value = '';
//     }
// }

// ui.clr2();
