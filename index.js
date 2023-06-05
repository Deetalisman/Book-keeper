//delete li
let ulist = document.querySelector('.two');
let  btn = document.querySelectorAll('.del');
    ulist.addEventListener('click', function(e){
        if(e.target.className == 'del'){
        const books = e.target.parentElement;
        books.parentNode.removeChild(books);}
    });


  
//creating new book
 const addForm = document.forms['addbook'];
    addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const err = document.querySelector("small");

//creating element
if(value == ""){
    err.innerHTML = "Add book title"
} else{

const div = document.createElement('div');
const bookname = document.createElement('p');
const remove = document.createElement('p');

//creating value
remove.textContent = 'delete';
bookname.textContent = value;


//appending
div.appendChild(bookname);
div.appendChild(remove);
ulist.appendChild(div);

// changing classlists
remove.classList.add('del');
bookname.classList.add('name');
div.classList.add('books');

localStorage.setItem(value);
addForm.value = "";
}
});
//end of add book



//hide books
const hide = document.querySelector('#hide');
hide.addEventListener('change', function(e){
    if(hide.checked){
        ulist.style.display = "none";
    }
    else{
        ulist.style.display = "block";
    };
});

//search filter
const searchBar = document.forms['searchbook'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = document.getElementsByClassName('books');
    Array.from(books).forEach(function(books){
        const title = books.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            books.style.display = "block";
        }
        else{
            books.style.display = "none"
        };
    });
});

//background
function back(searchBox){
    searchBox = document.getElementById('search');
    addBox = document.getElementById('addb');
    searchBox.style.background = "darkgrey";
    addBox.style.background = "darkgrey";
};

//reset
