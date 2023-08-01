// Get the elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task to the list
function insertTask() {
  // add button
  const taskText = todoInput.value;
  if (taskText.trim() !== '') {
    const itmeList = document.createElement('li');
    //adding checkbox to the to do task
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const labelOfTask = document.createElement('label');
    labelOfTask.textContent = taskText;
    //close button to remove the task
    const closeButton = document.createElement('button');
    closeButton.textContent = '\u2718'; // Use Unicode representation of ✘ symbol
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
      itmeList.remove();
    });
    //appendig everything to the task
    itmeList.appendChild(checkbox);
    itmeList.appendChild(labelOfTask);
    itmeList.appendChild(closeButton);
    todoList.appendChild(itmeList);

    todoInput.value = '';
  }
}

// Event listener for add button
addBtn.addEventListener('click', insertTask);