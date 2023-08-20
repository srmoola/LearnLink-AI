import { Typography } from "@mui/material";

type Props = {
  fileUpload: any;
  duration: string;
};

const CrPreviewInfo = ({ fileUpload, duration }: Props) => {
  return (
    <>
      <Typography
        className="text-white text-sm
        mt-5 ml-2"
      >
        Preview Video Url: <br />
        <a
          className="text-blue-500"
          target="_blank"
          href={URL.createObjectURL(fileUpload)}
        >
          {URL.createObjectURL(fileUpload)}
        </a>
      </Typography>
      <Typography
        className="text-white text-sm
        mt-3 ml-2"
      >
        File Name: {fileUpload.name}
      </Typography>
      <Typography
        className="text-white text-sm
        mt-auto ml-2 mb-2"
      >
        Video Duration: {duration}
      </Typography>
    </>
  );
};

export default CrPreviewInfo;
