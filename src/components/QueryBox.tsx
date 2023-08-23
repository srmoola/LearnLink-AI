import React, { useEffect, useState } from "react";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import { auth } from "@/firebase";
import { signInWithGoogle } from "@/features/signin";

type Props = {
  text: string;
};

const QueryBox = ({ text }: Props) => {
  const [photo, setphoto] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setphoto(auth.currentUser?.photoURL || "");
    }, 500);
  }, []);

  return (
    <Box className="h-fit flex mt-2 ml-1 bg-[#f0f0f0]">
      <Tooltip title={auth.currentUser ? "Switch Accounts" : "Sign In"}>
        <Box
          component={auth.currentUser ? "div" : "button"}
          onClick={signInWithGoogle}
          className="w-[5%] grid place-items-center cursor-pointer ml-2"
        >
          <Avatar alt="Remy Sharp" src={photo} />
        </Box>
      </Tooltip>
      <Box className="w-[95%] ">
        <Typography
          sx={{ fontSize: 18 }}
          className="ml-1 mr-1 mt-[2.5%] mb-6 text-black"
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default QueryBox;
