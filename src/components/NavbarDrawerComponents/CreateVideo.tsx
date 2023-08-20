import { IconButton, Tooltip, Avatar } from "@mui/material";
import React, { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CreateDialog from "../CreateDialog";

const CreateVideo = () => {
  const [open, setopen] = useState(false);

  const handleClose = () => {
    setopen(false);
  };

  return (
    <>
      <IconButton
        onClick={() => setopen(true)}
        sx={{ color: "#e2e2e2" }}
        aria-label="search"
      >
        <Tooltip title="Add Document">
          <Avatar
            sx={{
              bgcolor: "#272727",
              "&:hover": {
                bgcolor: "#5064a8",
              },
              transition: "0.3s ease",
            }}
          >
            <PostAddIcon sx={{ width: 28, height: 28, m: 2 }} />
          </Avatar>
        </Tooltip>
      </IconButton>
      <CreateDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default CreateVideo;
