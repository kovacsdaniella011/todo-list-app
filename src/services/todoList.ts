import { TodoItem, TodoContent } from "../models/todoItem";
import { LogAddition } from "../decorators/logAddition";


export class TodoList<T extends TodoContent> {
  private todos: Map<string, TodoItem<T>> = new Map();

  add(todo: TodoItem<T>): void {
    this.todos.set(todo.id, todo);
  }

  remove(id: string): void {
    this.todos.delete(id);
  }

  list(): TodoItem<T>[] {
    return Array.from(this.todos.values());
  }

  filterByCategory(category: string): TodoItem<T>[] {
    return this.list().filter(todo => todo.category === category);
  }
}
