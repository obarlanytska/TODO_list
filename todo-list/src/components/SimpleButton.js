import PropTypes from "prop-types";
import React from "react";
import Button from "@mui/material/Button";


export const SimpleButton = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  );
};

SimpleButton.prototypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
