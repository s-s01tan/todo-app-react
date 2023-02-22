export {};

declare global {
  type TodoType = {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isRemoved: boolean;
  };

  type TodoProps = {
    todo: TodoType;
  };

  type TodoListProps = {
    todos: TodoType[];
  };
}
