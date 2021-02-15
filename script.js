
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

        const postedComments = document.querySelector('.postedComments');
        
        const newUser = document.createElement('div');
        newUser.classList.add('user');
        postedComments.appendChild(newUser);

        const createPhoto = document.createElement('div');
        createPhoto.classList.add('displayPhoto');
        createPhoto.innerHTML = `<img src="https://placedog.net/400/400" alt="A placeholder photo of a dog.">`;
        newUser.appendChild(createPhoto);

        const newComment = document.createElement('div');
        newComment.classList.add('userComment');

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        const todaysDate = new Date;
        
        newComment.innerHTML = `
            <p><span class="commentDate">${todaysDate.toLocaleDateString('en-US', options)} by ${getName}</span></p>
            <p>${getComment}</p>`;
        
        newUser.append(newComment);

        formElement.reset();
    }
    
});
