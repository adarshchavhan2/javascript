let tasks = [
    "task_1",
    "task_2",
    "task_3",
    "task_4",
    "task_5"
  ];

// Remove the first task from the list.
tasks.shift();


// Add two new high-priority tasks to the beginning of the list
tasks.unshift('high_task_1', 'high_task_2');

// Replace the last task in the list with a new task.
tasks.pop();
tasks.push('new_task_1');

// Log the updated task list after all operations
console.log('new udated tasks : '+tasks);
