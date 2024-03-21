const toDo = document.getElementById('toDo');
const toSearch = document.getElementById('toSearch');
const add = document.getElementById('add');
const search = document.getElementById('search');
const post = document.getElementById('post');
const h2 = document.getElementsByTagName('h2')[0];

var toDoList = ['a.a'];

add.addEventListener('click', function(){
    var description = toDo.value.trim().toUpperCase();
    toDoList.push(description.toUpperCase());
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
        h2.innerHTML = `${toDoList[toDoList.length - 1]}`;

        toDo.value = '';
    }

})

search.addEventListener('click', function(){
    var searchDescription = toSearch.value;
    

        if (toDoList.includes(searchDescription)) {

        }

    toSearch.value = '';
})

// TODO: remove task
post.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-trash-alt')){
        var taskItem = e.target.parentNode;
        post.removeChild(taskItem);
        if(toDoList.includes(taskItem)){
            let index = toDoList.indexOf(taskItem);
            toDoList.pop(toDoList[index]);
        }
    }
})
// TODO: complete task
post.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-edit')){
        var taskItem = e.target.parentNode;
        taskItem.classList.toggle('done');
    }
})