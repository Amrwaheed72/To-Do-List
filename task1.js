// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskList = document.getElementById('taskList');

//     if (taskInput.value.trim() !== '') {
//         const li = document.createElement('li');

//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.onchange = function() {
//             if (checkbox.checked) {
//                 moveToDone(li);
//             } else {
//                 moveToTaskList(li);
//             }
//         };

//         const taskText = document.createElement('span');
//         taskText.textContent = taskInput.value;

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.onclick = function() {
//             const parentList = li.parentElement;
//             parentList.removeChild(li);
//         };

//         li.appendChild(checkbox);
//         li.appendChild(taskText);
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);

//         taskInput.value = '';
//     }
// }

// function moveToDone(taskItem) {
//     const doneList = document.getElementById('doneList');
//     taskItem.querySelector('button').onclick = function() {
//         doneList.removeChild(taskItem);
//     };
//     doneList.appendChild(taskItem);
// }

// function moveToTaskList(taskItem) {
//     const taskList = document.getElementById('taskList');
//     taskItem.querySelector('button').onclick = function() {
//         taskList.removeChild(taskItem);
//     };
//     taskList.appendChild(taskItem);
// }


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function () {
            if (checkbox.checked) {
                moveToDone(li);
            } else {
                moveToTaskList(li);
            }
        };

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            if (confirm("Are you sure you want to delete this task?")) {
                const parentList = li.parentElement;
                parentList.removeChild(li);
            }
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

function moveToDone(taskItem) {
    const doneList = document.getElementById('doneList');
    taskItem.querySelector('button').onclick = function () {
        if (confirm("Are you sure you want to delete this task?")) {
            doneList.removeChild(taskItem);
        }
    };
    doneList.appendChild(taskItem);
}

function moveToTaskList(taskItem) {
    const taskList = document.getElementById('taskList');
    taskItem.querySelector('button').onclick = function () {
        if (confirm("Are you sure you want to delete this task?")) {
            taskList.removeChild(taskItem);
        }
    };
    taskList.appendChild(taskItem);
}
