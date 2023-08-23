import TextField from "@mui/material/TextField";
import React from "react";

type Props = {
  value: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput: React.FC<Props> = ({ value, setvalue }) => {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={(e) => {
        setvalue(e.target.value);
      }}
      id="outlined-basic"
      label="Type here to talk to your document..."
      variant="outlined"
    />
  );
};

export default TextInput;
