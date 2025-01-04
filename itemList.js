document.addEventListener("DOMContentLoaded",() => {

    const formSubmit = document.getElementById('form-submit');
    const itemList = document.getElementById('items');
    const newItem = document.getElementById('form-input');
    const searchInput = document.getElementById('searchInput');
    

    const itemCount = document.getElementById('itemCount');
    let numberOfItems = 100; //setting number of select options
    for (i = 1; i <= numberOfItems; i++) {
        let optionCount = document.createElement('option');
        optionCount.setAttribute('value', i);
        optionCount.textContent = i;
        itemCount.appendChild(optionCount);
    }

    //adding items to the list
    formSubmit.addEventListener('click', addItems);
    //Adding event listener for Enter key on input field
    newItem.addEventListener('keydown',(e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            formSubmit.click();
        }
    })

    function addItems(e){
        e.preventDefault();
        const itemName = newItem.value.trim();
        const count = parseInt(itemCount.value);
        if (itemName !== '') {
            const li = document.createElement('li');
            const divListContent = document.createElement('div');
            const divDeleteBtn = document.createElement('div');

            divDeleteBtn.classList.add('deleteBtn');

            divListContent.innerHTML = `${itemName} (${count})`;
            divDeleteBtn.textContent = 'X';

            
            li.appendChild(divListContent);
            li.appendChild(divDeleteBtn);
            itemList.appendChild(li);

            newItem.value = '';
        } else {
            alert('Enter a valid input!');
        }
    }

    //deleting items from the list
    itemList.addEventListener('click',deleteItems);
    function deleteItems(e){
        if (e.target.classList.contains('deleteBtn')){
            if(confirm('Are you sure')){
                e.preventDefault();
                let li = e.target.parentElement;
                itemList.removeChild(li); 
            }
        }
    }

    //filtering through the typed Items inside the search field
    searchInput.addEventListener('input',searchItems);
    function searchItems(){
        const filter = searchInput.value.toLowerCase();
        const listItems = document.querySelectorAll('#items li div:first-child');
        //converting the list items into an array
        Array.from(listItems).forEach(item => {
            const text = item.textContent.toLowerCase();
            const li = item.closest('li');
            if(text.includes(filter)){
                li.classList.remove('hidden');
                //li.style.display = 'block'
            } else {
                li.classList.add('hidden');
                //li.style.display = 'none'
            }
            console.log(li);
        });
    }


});

