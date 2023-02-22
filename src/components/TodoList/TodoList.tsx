import { List } from "@mui/material";
import { Fragment } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos } = props;
  return (
    <Fragment>
      <List className="list-container">
        {todos
          .filter((todo) => !todo.isRemoved)
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </List>
    </Fragment>
  );
};

export default TodoList;
