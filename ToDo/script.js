const toDo = document.getElementById('toDo');
const add = document.getElementById('add');
const post = document.getElementById('post');

const toDoList = [];

add.addEventListener('click', function(){
    if(toDo.value !== ''){        
        toDoList.push(toDo.value);
        toDo.value = '';
    }
    post.value = toDoList;
})