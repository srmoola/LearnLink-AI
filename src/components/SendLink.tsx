import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Tooltip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  handleFunction: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
};

const SendLink = ({ handleFunction, isLoading }: Props) => {
  return (
    <Tooltip title={isLoading ? "" : "Send Link"}>
      {isLoading ? (
        <CircularProgress className="mt-2 ml-2" />
      ) : (
        <IconButton
          onClick={handleFunction}
          className="h-16 w-16 -translate-y-1"
        >
          <SendIcon className="h-8 w-8 " />
        </IconButton>
      )}
    </Tooltip>
  );
};

export default SendLink;
