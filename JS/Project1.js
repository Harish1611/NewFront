var MyForm = document.querySelector('#addForm');
var MyItemList = document.querySelector('#items')

MyForm.addEventListener('submit',addItem);


//delete event

MyItemList.addEventListener('click', removeItem);

function addItem(e){

    e.preventDefault();

    var myNewItem = document.querySelector('#item').value;

    var myNewLi = document.createElement('li');

    myNewLi.className = 'list-group-item';


    myNewLi.appendChild(document.createTextNode(myNewItem))
    
    //delete

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));
    myNewLi.appendChild(deleteBtn)



    MyItemList.appendChild(myNewLi);


}


function removeItem(e){

if( e.target.classList.contains('delete')){

    if(confirm('Are you Sure?')){

        var li = e.target.parentElement;
        MyItemList.removeChild(li);
    }
} 

}
