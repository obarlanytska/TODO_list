import React from "react";
import { TextField } from "@mui/material";

const ReadOnlyField = ({filteredTasks}) => {
  return (
    <div>
      <TextField
        type='number'
        value={filteredTasks.length}
        inputProps={{ readOnly: true }}
        color='secondary'
        size='small'
      />
    </div>
  );
};
export default ReadOnlyField;
