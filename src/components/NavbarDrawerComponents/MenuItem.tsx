import React, { ReactNode } from "react";
import { ListItemIcon, MenuItem, Typography } from "@mui/material";

type Props = {
  text: string;
  icon: ReactNode;
  clickHandler: Function;
};

const MenuItemCustom = ({ text, icon, clickHandler }: Props) => {
  return (
    <MenuItem
      sx={{
        height: 40,
        "&:hover": {
          backgroundColor: "#404040",
        },
      }}
      onClick={() => clickHandler()}
    >
      <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
      <Typography sx={{ color: "#fff" }}>{text}</Typography>
    </MenuItem>
  );
};

export default MenuItemCustom;
