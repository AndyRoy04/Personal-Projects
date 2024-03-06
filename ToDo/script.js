const toDo = document.getElementById('toDo');
const add = document.getElementById('add');
const post = document.getElementById('post');

// const toDoList = [];

add.addEventListener('click', function(){
    var description = toDo.value.trim()
    if(description !== ''){   
        var taskItem = document.createElement('li');
        var taskText = document.createTextNode(description);
        var delButton = document.createElement('button');
        var trash = document.createElement('i');
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');
        delButton.appendChild(trash);
        delButton.classList.add('delete-button');

        taskItem.appendChild(taskText);
        taskItem.appendChild(trash);
        post.appendChild(taskItem);
        toDo.value = '';
    }

})