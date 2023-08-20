import { List } from "@mui/material";
import React from "react";
import DrawerItem from "./DrawerItem";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

type Props = {
  open: boolean;
  iconColor: string;
};

const ClosedBarList = ({ open, iconColor }: Props) => {
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
        text="Library"
        open={open}
        iconColor={iconColor}
        icon={<VideoLibraryIcon />}
      />
      <DrawerItem
        text="History"
        open={open}
        iconColor={iconColor}
        icon={<HistoryIcon />}
      />
      <DrawerItem
        text="Your Videos"
        open={open}
        iconColor={iconColor}
        icon={<OndemandVideoIcon />}
      />
      <DrawerItem
        text="Watch Later"
        open={open}
        iconColor={iconColor}
        icon={<AccessTimeIcon />}
      />
      <DrawerItem
        text="Liked Videos"
        open={open}
        iconColor={iconColor}
        icon={<ThumbUpIcon />}
      />
    </List>
  );
};

export default ClosedBarList;
