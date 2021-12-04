import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { SimpleButton } from "./SimpleButton";

import {
  Box,
  List,
  IconButton,
  TextField,
  ListItem,
  ListItemText,
  ButtonGroup,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

import "../index.css";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "active":
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };
  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    filteredHandler();
    savetoLocalStorage();
  }, [tasks, status]);

  const submitValue = () => {
    if (inputText.length > 0) {
      setTasks([...tasks, { text: inputText, completed: false, id: uuidv4() }]);
      setInputText("");
    }
  };

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

  const statusHandler = (e) => {
    setStatus(e.target.innerText.toLowerCase());
  };

  const savetoLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let itemList = JSON.parse(localStorage.getItem("tasks"));
      setTasks(itemList);
    }
  };

  return (
    <div>
      <Box>
        <TextField
          autoFocus
          fullWidth
          placeholder='Put your task here'
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          onClick={submitValue}
          color='secondary'
        />
      </Box>
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
      <>
        <TextField
          type='number'
          value={filteredTasks.length}
          inputProps={{ readOnly: true }}
          color='secondary'
          size='small'
        />
      </>
      <Box
      component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup color='secondary'>
          <SimpleButton text='All' onClick={statusHandler} />
          <SimpleButton text='Active' onClick={statusHandler} />
          <SimpleButton text='Completed' onClick={statusHandler} />
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Input;
