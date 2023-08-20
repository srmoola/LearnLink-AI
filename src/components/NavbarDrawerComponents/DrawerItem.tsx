import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
  open: boolean;
  iconColor: string;
};

const DrawerItem = ({ text, icon, open, iconColor }: Props) => {
  return (
    <ListItem
      key={text}
      disablePadding
      sx={{
        display: "block",
      }}
    >
      <Tooltip placement="right-end" title={!open ? text : ""}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: iconColor,
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
};

export default DrawerItem;
