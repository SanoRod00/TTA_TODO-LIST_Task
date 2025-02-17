// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.classList.add(
    'flex', 
    'items-center', 
    'justify-between', 
    'px-4', 
    'py-2', 
    'bg-sky-50', 
    'rounded-md', 
    'shadow-sm', 
    'fade-in'
  );

  // Task text
  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;
  taskTextElement.classList.add('text-sky-800');

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add(
    'px-3', 
    'py-1', 
    'bg-red-500', 
    'text-white', 
    'rounded-md', 
    'hover:bg-red-600', 
    'transition', 
    'duration-300'
  );
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Append elements to the task item
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteBtn);

  // Add task item to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});