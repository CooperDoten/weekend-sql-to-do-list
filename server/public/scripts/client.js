$(document).ready(onReady);

function onReady() {
    console.log(`JQ sourced and in client.js`);
    //call function to load tasks
    //getTasks()
    //on click event call makeTask
    $(document).on('click', '#submitBtn', makeTask);
}

function makeTask() {
    //create object to send to POST
    let task = {
        name: $('#nameIn').val(),
        age: $('#ageIn').val(),
        task: $('#taskIn').val(),
        type: $('#typeIn').val(),
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
       // getTasks();
    }).catch(function (error) {
        console.log('error in POST', error);
    })
}




