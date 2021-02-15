
// select icon
// if icon is selected, toggle the icon to change to another class
// call a function to....
// update the <ul> class to .toggleNav 

const iconEl = document.querySelector('i');
const ulEl = document.querySelector('ul');

iconEl.addEventListener('click', function(){
    updateIcon(iconEl);
    toggleNav(ulEl);
});

function updateIcon(iconElement) {
    iconElement.classList.toggle('fa-bars');
    iconElement.classList.toggle('fa-times');
}

function toggleNav (toggle) {
    toggle.classList.toggle('toggleNav');
}

const formElement = document.querySelector('form.blogForm');
formElement.addEventListener('submit', function(e){
    e.preventDefault();
    
    const getName = document.getElementById('userName').value;
    const getComment = document.getElementById('userMessage').value;
    
    if (getName && getComment) {
        const createPhoto = document.createElement('div');
        console.log(createPhoto);
    }
    
});
