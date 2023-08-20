import { List, Typography, Divider } from "@mui/material";
import React from "react";
import DrawerItem from "./DrawerItem";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MovieIcon from "@mui/icons-material/Movie";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DiamondIcon from "@mui/icons-material/Diamond";
import PodcastsIcon from "@mui/icons-material/Podcasts";

type Props = {
  open: boolean;
  iconColor: string;
};

const OpenBarList = ({ open, iconColor }: Props) => {
  return (
    <>
      <List>
        <Typography sx={{ ml: 3 }}>Subscriptions</Typography>
      </List>
      <Divider sx={{ width: "90%", ml: "auto", mr: "auto" }} color="#3f3f3f" />
      <List
        sx={{
          // hover states
          "& .MuiListItemButton-root:hover": {
            bgcolor: "#272727",
          },
        }}
      >
        <Typography className="font-semibold" sx={{ ml: 3 }}>
          Explore
        </Typography>
        <DrawerItem
          text="Trending"
          open={open}
          iconColor={iconColor}
          icon={<WhatshotIcon />}
        />
        <DrawerItem
          text="Shopping"
          open={open}
          iconColor={iconColor}
          icon={<ShoppingCartIcon />}
        />
        <DrawerItem
          text="Music"
          open={open}
          iconColor={iconColor}
          icon={<LibraryMusicIcon />}
        />
        <DrawerItem
          text="Movies & TV"
          open={open}
          iconColor={iconColor}
          icon={<MovieIcon />}
        />

        <DrawerItem
          text="Gaming"
          open={open}
          iconColor={iconColor}
          icon={<SportsEsportsIcon />}
        />
        <DrawerItem
          text="News"
          open={open}
          iconColor={iconColor}
          icon={<NewspaperIcon />}
        />
        <DrawerItem
          text="Sports"
          open={open}
          iconColor={iconColor}
          icon={<EmojiEventsIcon />}
        />
        <DrawerItem
          text="Learning"
          open={open}
          iconColor={iconColor}
          icon={<LightbulbIcon />}
        />
        <DrawerItem
          text="Fashion & Beauty"
          open={open}
          iconColor={iconColor}
          icon={<DiamondIcon />}
        />
        <DrawerItem
          text="Podcasts"
          open={open}
          iconColor={iconColor}
          icon={<PodcastsIcon />}
        />
      </List>
    </>
  );
};

export default OpenBarList;
