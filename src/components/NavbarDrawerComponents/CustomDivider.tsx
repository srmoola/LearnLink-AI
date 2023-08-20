import Divider from "@mui/material/Divider";

type Props = {
  open: boolean;
};

const CustomDivider = ({ open }: Props) => {
  return (
    <Divider
      sx={{ width: !open ? "0%" : "95%", ml: "auto", mr: "auto" }}
      color="#3f3f3f"
    />
  );
};

export default CustomDivider;
