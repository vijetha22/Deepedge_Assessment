import React from "react";
import { Button as Btn } from "@mui/material";

const Button = ({ variant, icon, text, ...rest }) => {
  return (
    <Btn variant={variant || "contained"} {...rest}>
      {icon}
      {text}
    </Btn>
  );
};
export default Button;
