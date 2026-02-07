import { DateTodo, TextTodo } from "../models/todoItem";

export function isDateTodo(todo: TextTodo | DateTodo): todo is DateTodo {
  return (todo as DateTodo).dueDate !== undefined;
}

export function isTextTodo(todo: TextTodo | DateTodo): todo is string {
  return typeof todo === "string";
}
