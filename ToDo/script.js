const toDo = document.getElementById('toDo');
const add = document.getElementById('add');
const post = document.getElementById('post');

add.addEventListener('click', function(){
    if(toDo.value !== ''){        
        post.innerHTML = toDo.value;
        toDo.value = '';
    }
})