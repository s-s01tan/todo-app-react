import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import "./Todo.css";

const handleToggle = (id: string) => {};
const handleDelete = (id: string) => {};

const Todo: React.FC<TodoProps> = (props) => {
  const { todo } = props;
  const { id, title, description, isCompleted } = todo;

  return (
    <Fragment>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={"button"} onClick={() => handleToggle(id)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={isCompleted}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": id }}
            />
          </ListItemIcon>
          <ListItemText
            id={`${id}-${title}`}
            sx={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            <Typography
              variant="caption"
              className="custom-font"
              sx={{ fontSize: "16px" }}
            >
              {title}
            </Typography>
          </ListItemText>
          <ListItemText
            id={`${id}-${description}`}
            sx={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            <Typography
              variant="caption"
              className="custom-font"
              sx={{ fontSize: "16px" }}
            >
              {description}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </Fragment>
  );
};

export default Todo;
