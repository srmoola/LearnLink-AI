"use client";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import TextInput from "./NavbarDrawerComponents/TextInput";
import SeachwithVoice from "./NavbarDrawerComponents/SeachwithVoice";
import CreateVideo from "./NavbarDrawerComponents/CreateVideo";
import Notifications from "./NavbarDrawerComponents/Notifications";
import AvatarBox from "./NavbarDrawerComponents/AvatarBox";
import OpenBarList from "./NavbarDrawerComponents/OpenBarList";
import ClosedBarList from "./NavbarDrawerComponents/ClosedBarList";
import CustomDivider from "./NavbarDrawerComponents/CustomDivider";
import MainOpenList from "./NavbarDrawerComponents/MainOpenList";
import LeftAppBar from "./NavbarDrawerComponents/LeftAppBar";
import DrawerLogo from "./NavbarDrawerComponents/DrawerLogo";

const drawerWidth = 220;
const backgroundColor: string = "#fff";
const iconColor: string = "#000";

const openedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: backgroundColor,
  color: iconColor,
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  color: iconColor,
  backgroundColor: backgroundColor,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  color: iconColor,
  height: 60,
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: backgroundColor,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {
  children: any;
};

export default function NavbarDrawer({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ overflow: "hidden" }}>
        <Toolbar>
          <LeftAppBar open={open} handleDrawerOpen={handleDrawerOpen} />

          <TextInput />

          <SeachwithVoice />

          <CreateVideo />

          <Notifications />

          <AvatarBox />
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <DrawerLogo handleDrawerClose={handleDrawerClose} />
        </DrawerHeader>

        <CustomDivider open={open} />

        <MainOpenList open={open} iconColor={iconColor} />

        <CustomDivider open={open} />

        <ClosedBarList open={open} iconColor={iconColor} />

        <CustomDivider open={open} />

        {open && <OpenBarList open={open} iconColor={iconColor} />}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#fff",
          color: "white",
          width: "100%",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
