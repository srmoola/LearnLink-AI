import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const MessageBoxLoader = () => {
  return (
    <Box className="h-fit flex ml-1">
      <Box className="w-[5%] h-full ml-2">
        <ArticleIcon className="w-full h-full text-[#5064a8] mt-2 " />
      </Box>
      <Box className="w-[95%]">
        <pre
          style={{ fontFamily: "Roboto", fontSize: 18 }}
          className="ml-1 mr-1 mt-[1.25%] text-black"
        >
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "2rem" }} />
        </pre>
      </Box>
    </Box>
  );
};

export default MessageBoxLoader;
