import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import CustomDivider from "./NavbarDrawerComponents/CustomDivider";
import ClearIcon from "@mui/icons-material/Clear";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import CrTextFields from "./CreateVideoComponents/CrTextFields";
import CrPreviewInfo from "./CreateVideoComponents/CrPreviewInfo";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./CreateVideoComponents/video.css";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

function UploadedComponent({ fileUpload }: any) {
  const videoRef: any = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [imageUpload, setimageUpload] = useState<any>(null);

  console.log(imageUpload);

  const handleImageUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/png, image/jpeg";
    fileInput.onchange = (e: any) => {
      if (e.target && e.target.files) {
        setimageUpload(e.target.files[0]);
      }
    };
    fileInput.click();
  };

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleImageShow = () => {
    if (!imageUpload) {
      return;
    }

    try {
      return URL.createObjectURL(imageUpload);
    } catch {
      return;
    }
  };

  const handleConfirmUpload = async () => {
    const fileRef = ref(
      storage,
      `videos/${crypto.randomUUID() + fileUpload.name}`
    );
    const videoUrl = await uploadBytes(fileRef, fileUpload);

    console.log(
      `https://firebasestorage.googleapis.com/v0/b/${videoUrl.metadata.bucket}/o/videos%2F${videoUrl.metadata.name}?alt=media&token=e4e0728e-e681-4525-a26d-b2728700b352`
    );
    console.log(videoUrl);
  };

  return (
    <Box className="flex justify-center gap-5">
      <Box className="w-1/2 h-96 overflow-y-scroll custom-scrollbar p-2">
        <CrTextFields fileUpload={fileUpload} />
        <Typography className="text-white text-xl mt-5 ">Thumbnail</Typography>
        <Box
          onClick={handleImageUpload}
          sx={{
            borderStyle: "dashed",
            borderWidth: 2,
            borderColor: "#3e3e3e",
            "&:hover": { borderColor: "#f0f0f0" },
            bgcolor: "#282828",
            transition: "0.5s ease",
          }}
          className="mt-1 h-36 rounded-xl cursor-pointer grid place-items-center"
        >
          <IconButton onClick={handleImageUpload}>
            <Avatar sx={{ width: 75, height: 75, bgcolor: "#1f1f1f" }}>
              <AddPhotoAlternateIcon
                sx={{ width: 50, height: 50, color: "#909090" }}
              />
            </Avatar>
          </IconButton>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#1f1f1f" }} className="w-1/2 h-full">
        <video
          poster={handleImageShow()}
          ref={videoRef}
          onLoadedMetadata={handleVideoLoaded}
          className="cursor-pointer"
          src={URL.createObjectURL(fileUpload)}
          controls
        />
        <CrPreviewInfo
          fileUpload={fileUpload}
          duration={formatDuration(Number(videoDuration.toFixed(0)))}
        />
        <Button onClick={handleConfirmUpload} fullWidth className="mt-5">
          Confirm Upload
        </Button>
      </Box>
    </Box>
  );
}

function PaperComponent(props: PaperProps) {
  return (
    <Paper sx={{ backgroundColor: "#282828", height: "80%" }} {...props} />
  );
}

type Props = {
  open: boolean;
  handleClose: Function;
};

export default function CreateDialog({ open, handleClose }: Props) {
  const [fileUpload, setfileUpload] = useState<any>(null);

  const handleFileUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/mp4";
    fileInput.onchange = (e: any) => {
      if (e.target && e.target.files) {
        setfileUpload(e.target.files[0]);
      }
    };
    fileInput.click();
  };

  return (
    <Dialog
      open={open}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        className="flex justify-between text-white"
        id="draggable-dialog-title"
      >
        Upload Video
        <Tooltip title="Close">
          <IconButton
            onClick={() => {
              handleClose();
              setfileUpload(null);
            }}
          >
            <ClearIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <CustomDivider open={open} />
      <DialogContent className="grid place-items-center">
        {fileUpload ? (
          <UploadedComponent fileUpload={fileUpload} />
        ) : (
          <>
            <IconButton onClick={handleFileUpload}>
              <Avatar sx={{ width: 150, height: 150, bgcolor: "#1f1f1f" }}>
                <UploadIcon sx={{ width: 75, height: 75, color: "#909090" }} />
              </Avatar>
            </IconButton>
            <Button
              variant="contained"
              className="mb-auto mt-1"
              style={{ backgroundColor: "#3da6ff", color: "#0e0f10" }}
              onClick={handleFileUpload}
            >
              Select File
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
