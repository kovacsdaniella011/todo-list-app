import { TodoItem } from "./models/todoItem";
import { TodoList } from "./services/todoList";
import { isDateTodo } from "./utils/typeGuards";

const todoList = new TodoList<any>();

const todo1 = new TodoItem("1", "Első item", "próba");

const todo2 = new TodoItem("2", {
  message: "Házi leadása",
  dueDate: new Date("2026-02-09")
}, "házi");

todoList.add(todo1);
todoList.add(todo2);

const allTodos = todoList.list();

for (const todo of allTodos) {
  if (isDateTodo(todo.content)) {
    console.log(`${todo.content.message} - Határidő: ${todo.content.dueDate}`);
  } else {
    console.log(todo.content);
  }
}
