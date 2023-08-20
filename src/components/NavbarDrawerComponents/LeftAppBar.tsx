import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  open: boolean;
  handleDrawerOpen: Function;
};

const LeftAppBar = ({ open, handleDrawerOpen }: Props) => {
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => handleDrawerOpen()}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      {!open && (
        <>
          <img
            alt="EduTube Logo"
            src="/learnlink.png"
            width={165}
            height={165}
            className="mt-2"
          />
        </>
      )}
    </>
  );
};

export default LeftAppBar;
