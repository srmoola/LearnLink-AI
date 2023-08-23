import { List } from "@mui/material";
import React from "react";
import DrawerItem from "./DrawerItem";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  open: boolean;
  iconColor: string;
};

const MainOpenList = ({ open, iconColor }: Props) => {
  return (
    <List
      sx={{
        // hover states
        "& .MuiListItemButton-root:hover": {
          bgcolor: "#f0f0f0",
        },
      }}
    >
      <DrawerItem
        text="Home"
        open={open}
        iconColor={iconColor}
        icon={<HomeIcon />}
      />
      <DrawerItem
        text="Create Link"
        open={open}
        iconColor={iconColor}
        icon={<AddIcon />}
      />
    </List>
  );
};

export default MainOpenList;
