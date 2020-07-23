// TODO App \\

// => Add Item

function addItem(){
    var val = document.getElementById('todo-item');
    var p = document.createElement('li')
    p.className='para'
    var txt = document.createTextNode(val.value)
    p.appendChild(txt)

    var span = document.createElement('span')
    var editBtn = document.createElement('button')
    var editIcon = document.createElement('i')
    editIcon.className='fas fa-pencil-alt'
    editBtn.appendChild(editIcon)
    editBtn.setAttribute('onclick','editItem(this)')

    var singleDelBtn = document.createElement('button')
    var editIcon1 = document.createElement('i')
    editIcon1.className='fas fa-trash'
    singleDelBtn.appendChild(editIcon1)
    singleDelBtn.setAttribute('onclick','delSingleItem(this)')

    span.appendChild(editBtn)
    span.appendChild(singleDelBtn)

    p.appendChild(span)

    var list = document.getElementById('list');

    if(val.value != ''){
        list.appendChild(p)
        var delBtn = document.getElementById('delBtn');
        delBtn.setAttribute('class','show')
    }else{
        alert("Write a Work Please!")
    }

    val.value = '';

}

// => Delete All Items

function delAll(){
    var list = document.getElementById('list');
    list.innerHTML = ""

    var delBtn = document.getElementById('delBtn');
    delBtn.setAttribute('class','hide')
}

// => Delete Single Items

function delSingleItem(x){
    var len = document.getElementById('list').childNodes.length
    if(len == 1){
        var delBtn = document.getElementById('delBtn');
        delBtn.setAttribute('class','hide')
    }
    x.parentNode.parentNode.remove()

}

// => Editing Single Items

function editItem(y){
    var val = prompt("Enter your Work :",y.parentNode.parentNode.firstChild.nodeValue);
    y.parentNode.parentNode.firstChild.nodeValue = val;
}
