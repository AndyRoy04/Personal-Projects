const toDo = document.getElementById('toDo');
const toSearch = document.getElementById('toSearch');
const add = document.getElementById('add');
const search = document.getElementById('search');
const post = document.getElementById('post');

// const toDoList = [];

add.addEventListener('click', function(){
    var description = toDo.value.trim()
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

search.addEventListener('click', function(e){
    var searchDescription = toSearch.value.trim();

    // To work on search property

    // if(e.target.value == searchDescription){
    //     var taskItem = e.target.parentNode;
    //     post.value.animate({opacity: 1}, {duration: 3000});
    // }

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