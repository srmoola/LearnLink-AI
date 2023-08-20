import { Typography, TextField } from "@mui/material";

const textfieldstyles = {
  "& label": {
    color: "white",
  },

  "& label.Mui-focused": {
    color: "#3da6ff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3da6ff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3da6ff",
    },
    color: "white",
  },
};

type Props = {
  fileUpload: any;
};

const CrTextFields = ({ fileUpload }: Props) => {
  return (
    <>
      <Typography className="text-white text-2xl">Details</Typography>
      <TextField
        sx={textfieldstyles}
        className="mt-4"
        id="outlined-multiline-flexible"
        label="Video Title (required)"
        defaultValue={fileUpload.name.slice(
          0,
          fileUpload.name.lastIndexOf(".")
        )}
        multiline
        fullWidth
        maxRows={4}
      />
      <TextField
        sx={textfieldstyles}
        className="mt-3"
        id="video-description"
        label="Description"
        multiline
        fullWidth
        rows={4}
      />
    </>
  );
};

export default CrTextFields;
