const toDo = document.getElementById('toDo');
const toSearch = document.getElementById('toSearch');
const add = document.getElementById('add');
const search = document.getElementById('search');
const post = document.getElementById('post');

var toDoList = [];

add.addEventListener('click', function(){
    var description = toDo.value.trim()
    toDoList.push(description.toLowerCase());
    if(description !== ''){   
        var taskItem = document.createElement('li');
        var taskText = document.createTextNode(description);
        var trash = document.createElement('i');
        var done = document.createElement('i');
        done.classList.add('fas');
        done.classList.add('fa-edit');
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');

        taskItem.appendChild(taskText);
        taskItem.appendChild(trash);
        taskItem.appendChild(done);
        post.appendChild(taskItem);

        toDo.value = '';
    }

})

search.addEventListener('click', function(){
    var searchDescription = toSearch.value;

        if (toDoList.includes(searchDescription)) {
            var item = target.parentNode;
            item.style.color='red';

        }

    toSearch.value = '';
})

// TODO: remove task
post.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-trash-alt')){
        var taskItem = e.target.parentNode;
        post.removeChild(taskItem);
    }
})
// TODO: complete task
post.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-edit')){
        var taskItem = e.target.parentNode;
        taskItem.classList.toggle('done');
    }
})