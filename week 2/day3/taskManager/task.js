import { validateDueDate, validatePriority, validateTitle } from "./validator.js"

const tasks = [];
function addTask(title, priority, dueDate) {

   if (validateDueDate(dueDate) && validateTitle(title) && validatePriority(priority)) {
      let task = { taskTitle: title, taskPriority: priority, date: dueDate };
      tasks.push(task);
   }
   else {
      return false;
   }
}


function getAllTasks() {
   console.log(tasks);

}

function completeTask(title) {
   let index = tasks.findIndex((task) => task.taskTitle == title)
   tasks[index].taskStatus = true
}



export { addTask, getAllTasks,completeTask }

