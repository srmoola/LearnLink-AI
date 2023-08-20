import { auth } from "@/firebase";
import Button from "@mui/material/Button";
import React from "react";
import UserAvatar from "./UserAvatar";
import { signInWithGoogle } from "@/features/signin";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

const AvatarBox = () => {
  return auth.currentUser ? (
    <UserAvatar />
  ) : (
    <Button
      className="ml-4"
      sx={{
        borderColor: "#303030",
        borderRadius: 25,
        color: "#378ad1",
        "&:hover": {
          borderColor: "#15be97",
          color: "#15be97",
        },
        whiteSpace: "nowrap",
        textOverflow: "ellipsis", // Add this line to truncate the text with "..."
        overflow: "hidden", // Add this line to hide any overflowing content
        minWidth: "125px", // Set a fixed width for the button
      }}
      onClick={signInWithGoogle}
      variant="outlined"
      startIcon={<AccountCircleIcon />}
    >
      <Typography>Sign in</Typography>
    </Button>
  );
};

export default AvatarBox;
