const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function subItem(e) {

//e.preventDefault();

const text = (this.querySelector('[name=item]')).value;

const item = {
    text,
    done: false
};
items.push(item);
popList(items, itemsList);
localStorage.setItem('items', JSON.stringify(items));
this.reset();

// for select button
    if(items.length == 0){
        sel_btn.style.display = 'none';
        console.log('runig');

    }
}

function popList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate , i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>`;
    }).join('');  
}

function toggledone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));

}
popList(items, itemsList);

addItems.addEventListener('submit', subItem);
itemsList.addEventListener('click', toggledone);

// delete all button 

const btn = document.querySelector('.del_btn');
const ul = document.querySelector('ul');

function deletes() {

    localStorage.removeItem("items");
    items.splice(0,items.length);
    while (ul.hasChildNodes()) {  
        ul.removeChild(ul.firstChild);
      }
    //const lis= Array.from(ul);  
   // ul.innerHTML.removeChild();

   // for select button
   if(items.length == 0){
    sel_btn.style.display = 'none';
    console.log('runig');
}
}
btn.addEventListener('click', deletes);

// select all button
const sel_btn = document.querySelector('.sel_all');


    if(items.length == 0){
        sel_btn.style.display = 'none';
        console.log('runig');
    }

function selecting(e) {
   items.forEach(item => {
       item.done = 'true';    
   });
   localStorage.setItem('items', JSON.stringify(items));

  location.reload();
}

sel_btn.addEventListener('click', selecting);
