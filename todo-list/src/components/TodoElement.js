import React from "react";
import { Box, List, IconButton, ListItem, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

import "../index.css";

const TodoElement = ({ tasks, setTasks, filteredTasks }) => {
  
  const deleteHandler = (i) => {
    setTasks(tasks.filter((item) => item.id !== i.id));
  };

  const completeHandler = (i) => {
    setTasks(
      tasks.map((item) =>
        item.id === i.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <Box>
        <List>
          {filteredTasks.map((i) => (
            <ListItem
              key={i.id}
              className={`list-item${i.completed ? "-completed" : ""}`}
            >
              <ListItemText>{i.text}</ListItemText>
              <IconButton onClick={() => completeHandler(i)}>
                <CheckIcon />
              </IconButton>
              <IconButton onClick={() => deleteHandler(i)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default TodoElement;
