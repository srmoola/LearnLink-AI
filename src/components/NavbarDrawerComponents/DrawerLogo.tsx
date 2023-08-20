import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  handleDrawerClose: Function;
};

const DrawerLogo = ({ handleDrawerClose }: Props) => {
  return (
    <>
      <IconButton
        className="ml-1"
        color="inherit"
        onClick={() => handleDrawerClose()}
      >
        <MenuIcon />
      </IconButton>
      <img
        className="mt-2"
        alt="EduTube Logo"
        src="/learnlink.png"
        width={165}
        height={165}
      />
    </>
  );
};

export default DrawerLogo;
