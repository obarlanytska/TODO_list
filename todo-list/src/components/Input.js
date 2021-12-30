import React from "react";
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Input = ({ inputText, setInputText, setTasks, tasks }) => {
  const addValueToTheList = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      setTasks([...tasks, { text: inputText, completed: false, id: uuidv4() }]);
      setInputText("");
    }
  };

  return (
    <div>
      <form onSubmit={addValueToTheList}>
        <TextField
          autoFocus
          fullWidth
          placeholder='Put your task here'
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          onClick={addValueToTheList}
          color='secondary'
        />
      </form>
    </div>
  );
};

export default Input;
