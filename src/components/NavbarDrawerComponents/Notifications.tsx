import { IconButton, Tooltip, Avatar } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notifications = () => {
  return (
    <IconButton sx={{ color: "#e2e2e2" }} aria-label="search">
      <Tooltip title="Notifications">
        <Avatar
          sx={{
            bgcolor: "#272727",
            "&:hover": {
              bgcolor: "#5064a8",
            },
            transition: "0.3s ease",
          }}
        >
          <NotificationsIcon sx={{ width: 28, height: 28, m: 2 }} />
        </Avatar>
      </Tooltip>
    </IconButton>
  );
};

export default Notifications;
