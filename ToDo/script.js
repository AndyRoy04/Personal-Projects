const toDo = document.getElementById('toDo');
const add = document.getElementById('add');
const post = document.getElementById('post');

// const toDoList = [];

add.addEventListener('click', function(){
    var description = toDo.value.trim()
    if(description !== ''){   
        var taskItem = document.createElement('li');
        var taskText = document.createTextNode(description);
        var trash = document.createElement('i');
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');

        taskItem.appendChild(taskText);
        taskItem.appendChild(trash);
        post.appendChild(taskItem);
        toDo.value = '';
    }

})

post.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-trash-alt')){
        var taskItem = e.target.parentNode;
        post.removeChild(taskItem);
    }
})