import { logout } from "@/features/signin";
import { auth } from "@/firebase";
import {
  RecentActors,
  Settings,
  Logout,
  AttachMoney,
  PrivacyTip,
  ModeNight,
  Help,
  Message,
} from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import LockIcon from "@mui/icons-material/Lock";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import MenuItemCustom from "./MenuItem";

const UserAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function removeSpacesAndLowercase(sentence: string) {
    return sentence.replace(/\s+/g, "").toLowerCase();
  }

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onDragStart={(event) => event.preventDefault()}
        >
          <Avatar
            src={auth.currentUser?.photoURL || ""}
            sx={{ width: 32, height: 32 }}
            onDragStart={(event) => event.preventDefault()}
          ></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#282828",
            borderRadius: 3,
          },
        }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "#282828",
              cursor: "default",
            },
            color: "#fff",
          }}
        >
          <Avatar
            src={auth.currentUser?.photoURL || ""}
            sx={{ width: 48, height: 48 }}
            onDragStart={(event) => event.preventDefault()}
          ></Avatar>

          <Typography className="ml-3">
            {auth.currentUser?.displayName}
            <br />@
            {removeSpacesAndLowercase(auth.currentUser?.displayName || "")}
            <br />
            <a
              style={{ color: "#3da6ff" }}
              target="_blank"
              href="https://myaccount.google.com/"
            >
              Manage your Google Account
            </a>
          </Typography>
        </MenuItem>

        <Divider sx={{ bgcolor: "#535353" }} />
        <MenuItemCustom
          text="Your Channel"
          icon={<RecentActors />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Sign Out"
          icon={<Logout />}
          clickHandler={logout}
        />
        <Divider sx={{ bgcolor: "#535353" }} />
        <MenuItemCustom
          text="Purchases and Memberships"
          icon={<AttachMoney />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Your Data in EduTube"
          icon={<PrivacyTip />}
          clickHandler={handleClose}
        />
        <Divider sx={{ bgcolor: "#535353" }} />
        <MenuItemCustom
          text="Appearence: Dark"
          icon={<ModeNight />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Language: English"
          icon={<TranslateIcon />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Restricted Mode"
          icon={<LockIcon />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Location"
          icon={<LanguageIcon />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Keyboard Shortcuts"
          icon={<KeyboardIcon />}
          clickHandler={handleClose}
        />
        <Divider sx={{ bgcolor: "#535353" }} />
        <MenuItemCustom
          text="Settings"
          icon={<Settings />}
          clickHandler={handleClose}
        />
        <Divider sx={{ bgcolor: "#535353" }} />
        <MenuItemCustom
          text="Help"
          icon={<Help />}
          clickHandler={handleClose}
        />
        <MenuItemCustom
          text="Send Feedback"
          icon={<Message />}
          clickHandler={handleClose}
        />
      </Menu>
    </>
  );
};

export default UserAvatar;
