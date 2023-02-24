import { List, Pagination } from "@mui/material";
import { Fragment } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos } = props;

  const limit = 5;
  const pageCount = Math.ceil(todos.length / limit);

  return (
    <Fragment>
      <List className="list-container">
        {todos
          .filter((todo) => !todo.isRemoved)
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        <Pagination count={pageCount} color="primary" />
      </List>
    </Fragment>
  );
};

export default TodoList;
