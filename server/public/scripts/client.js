$(document).ready(onReady);

function onReady() {
    console.log(`JQ sourced and in client.js`);
    //call function to load tasks
    getTasks()
    //on click event call makeTask
    $(document).on('click', '#submitBtn', makeTask);
    $(document).on('click', '#completedBtn', markAsCompleted);
    $(document).on('click', '#deleteBtn', alertUser);
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
            $('#tasksOut').append(`<tr class="${task.complete}">
                <td>${task.name}</td>
                <td>${task.age}</td>
                <td>${task.task}</td>
                <td>${task.type}</td>
                <td id="complete">${task.complete}</td>
                <td><button class="Yes" id="completedBtn" data-id="${task.id}">Complete</button></td>
                <td><button class="No" id="deleteBtn" data-id="${task.id}">Delete</button></td>
            </tr>`);
        }
    }).catch(function (error) {
            console.log('error in POST', error);
    })
}

function markAsCompleted() {
    let id = $(this).data('id');
    console.log('task-id of task to complete', id);
    $.ajax({
        method: 'PUT',
        url: `/tasks/${id}`,
        data: {
            complete: "Yes"
        }
    }).then(function (response) {
        console.log('response from transfer', response);
        getTasks();
    }).catch(function (err) {
        console.log("error in setting transfer", err);
        alert("something went wrong");
    })
}
function alertUser() {
swal({
    title: "Are you sure?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((deleteTask) => {
    if (deleteTask) {
        console.log('made it into deleteTask');
        let taskId = $(this).data('id');
        console.log('this is the id number of this task', taskId)
        $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}` 
        }).then( function( response ){
        console.log("Deleted!", response);
        // Refresh page (aka do another GET request)
        getTasks();
        }).catch( function(err){
        console.log("Error in delete", err);
        alert("had an error in deleteTask");
        });
      swal("Task Deleted", {
        icon: "success",
      });
    } else {
      swal({
          title: "Task is still on List"});
    }
  });  
}

