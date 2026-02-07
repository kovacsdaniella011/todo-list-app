export type TextTodo = string;

export type DateTodo = {
  message: string;
  dueDate: Date;
};

export type TodoContent = TextTodo | DateTodo;

export class TodoItem<T extends TodoContent> {
  constructor(
    public id: string,
    public content: T,
    public category: string
  ) {}
}
