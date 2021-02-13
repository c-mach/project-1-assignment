
// select icon
// if icon is selected, toggle the icon to change to another class
// call a function to....
// update the <ul> class to .toggleNav 

const iconEl = document.querySelector('i');
const ulEl = document.querySelector('ul');

iconEl.addEventListener('click', function(){
    if (iconEl) {
        updateIcon(iconEl);
    }
    
    toggleNav(ulEl);
    console.log(iconEl, '<- icon');
    console.log(ulEl, '<- ul class?');

});

function updateIcon(iconElement) {
    iconElement.classList.toggle('fa-bars');
    iconElement.classList.toggle('fa-times');
}

function toggleNav (toggle) {
    toggle.classList.toggle('.toggleNav');
}