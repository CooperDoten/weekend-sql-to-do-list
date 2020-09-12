$(document).ready(onReady);

function onReady() {
    console.log(`JQ sourced and in client.js`);
    //call function to load tasks
    getTasks()
    //on click event call makeTask
    $(document).on('click', '#submitBtn', makeTask);
}

function makeTask() {
    //create object to send to POST
    let task = {
        name: $('#nameIn').val(),
        age: $('#ageIn').val(),
        task: $('#taskIn').val(),
        complete: $('#completeIn').val(),
        type: $('#typeIn').val()
    }
    //call function to send object to POST
    taskToPost(task);
}

function taskToPost(task) {
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: task
    }).then(function (response) {
        console.log('response came back with', response);
        getTasks();
    }).catch(function (error) {
        console.log('error in POST', error);
    })
}

function getTasks() {
    $('#tasksOut').empty();
    console.log(`in getTasks`);

    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then((response) => {
        $('#nameIn').val('');
        $('#ageIn').val('');
        $('#taskIn').val('');
        $('#typeIn').val('');
        $('#completeIn').val('');
        console.log(`this is our response`, response);
        for(let i=0; i<response.length; i++){
            task = response[i];
            $('#tasksOut').append(`<tr>
            <td>${task.name}</td>
            <td>${task.age}</td>
            <td>${task.task}</td>
            <td>${task.type}</td>
            <td>${task.complete}</td>
            <td><button id="completedBtn" data-id="${task.id}">Completed</button></td>
            <td><button id="deleteBtn" data-id="${task.id}">Delete</button></td>
            </tr>`)
            
        }
    })

}



