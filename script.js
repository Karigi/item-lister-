document.addEventListener("DOMContentLoaded",() => {

    const registerBtn = document.getElementById('register-btn');
    const registerForm = document.getElementById('register-form');

    function goToItemLister(){
        const username = document.getElementById('uname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        if (username.value.trim()){
            username.classList.add('highlight');
        } else {
            username.classList.remove('highlight');
        }
        if (email.value.trim()){
            email.classList.add('highlight');
        } else {
            email.classList.remove('highlight');
        }
        if (password.value.trim()){
            password.classList.add('highlight');
        } else {
            password.classList.remove('highlight');
        }
        

        if(username.value.trim() && email.value.trim() && password.value.trim()){
            window.location.href = 'itemList.html';
            username.value = '';
            email.value = '';
            password.value = '';
        } else {
            alert('please fill the required fields');
        }  
    }

    registerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        goToItemLister();
    });


});