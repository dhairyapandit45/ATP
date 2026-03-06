import {addTask,getAllTasks,completeTask} from "./task.js";

addTask("sleep","high","2025-03-01");
addTask("eating", "low", "2026-03-01");
getAllTasks()
completeTask("eating")
getAllTasks()
