import { IconButton, Tooltip, Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import React from "react";

const SeachwithVoice = () => {
  return (
    <IconButton sx={{ color: "#e2e2e2", mr: "10%", ml: 1 }} aria-label="search">
      <Tooltip title="Search With Voice">
        <Avatar
          sx={{
            bgcolor: "#272727",
            "&:hover": {
              bgcolor: "#5064a8",
            },
            transition: "0.3s ease",
          }}
        >
          <MicIcon sx={{ width: 28, height: 28 }} />
        </Avatar>
      </Tooltip>
    </IconButton>
  );
};

export default SeachwithVoice;
