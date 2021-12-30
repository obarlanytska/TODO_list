import React, { useState, useEffect } from "react";
import TodoElement from "./components/TodoElement";
import Input from "./components/Input";
import { SimpleButton } from "./components/SimpleButton";
import ReadOnlyField from "./components/ReadOnlyField";

import { Box, ButtonGroup } from "@mui/material";
function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);



  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
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
    const savetoLocalStorage = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("button", status);
    };
    filteredHandler();
    savetoLocalStorage();
  }, [tasks, status]);



  const statusHandler = (e) => {
    setStatus(e.target.innerText.toLowerCase());
  };


  const getLocalTasks = () => {
    if (
      localStorage.getItem("tasks") === null &&
      localStorage.getItem("button" === null)
    ) {
      localStorage.setItem("tasks", []);
      localStorage.setItem("button", "");
    } else {
      let itemList = JSON.parse(localStorage.getItem("tasks"));
      setTasks(itemList);
      setStatus(localStorage.getItem("button"));
    }
  };

  return (
    <div className='container'>
      <Input inputText = {inputText} setInputText={setInputText} setTasks = {setTasks} tasks={tasks}/>
      <TodoElement tasks = {tasks} setTasks = {setTasks} filteredTasks = {filteredTasks}/>
      <Box
        component='form'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ReadOnlyField filteredTasks = {filteredTasks}/>
        <ButtonGroup color='secondary'>
          <SimpleButton text='All' onClick={statusHandler} />
          <SimpleButton text='Active' onClick={statusHandler} />
          <SimpleButton text='Completed' onClick={statusHandler} />
        </ButtonGroup>
      </Box>
    </div>
  );
}
export default App;
