import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Tooltip } from "@mui/material";

export default function TextInput() {
  const [borderColor, setborderColor] = useState<string>("#222222");
  const [seachText, setseachText] = useState<string>("");
  const [focused, setfocused] = useState<boolean>(false);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 550,
        borderRadius: 25,
        borderColor: borderColor,
        borderWidth: 1,
        height: 40,
        ml: "auto",

        bgcolor: "white",
      }}
    >
      {focused && <SearchIcon sx={{ color: "#e2e2e2", ml: 1 }} />}

      <InputBase
        sx={{
          ml: focused ? 1 : 2,
          flex: 1,
          color: "#000",
          input: {
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              color: "#000",
            },
          },
        }}
        onFocus={() => {
          setborderColor("#5064a8");
          setfocused(true);
        }}
        onBlur={() => {
          setborderColor("#222222");
          setfocused(false);
        }}
        onChange={(e) => setseachText(e.target.value)}
        value={seachText}
        placeholder="Search LearnLink"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        onClick={() => setseachText("")}
        sx={{ color: "#5064a8" }}
        aria-label="search"
      >
        {seachText.length > 0 && <ClearIcon sx={{ width: 28, height: 28 }} />}
      </IconButton>

      <Divider
        sx={{ height: "100%", m: 0.5, width: 2, bgcolor: "#222222" }}
        orientation="vertical"
      />
      <IconButton sx={{ color: "#5064a8" }} aria-label="search">
        <Tooltip title="Search">
          <SearchIcon sx={{ width: 28, height: 28 }} />
        </Tooltip>
      </IconButton>
    </Paper>
  );
}
