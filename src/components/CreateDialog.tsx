import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import CustomDivider from "./NavbarDrawerComponents/CustomDivider";
import ClearIcon from "@mui/icons-material/Clear";
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import "./CreateVideoComponents/video.css";
import { auth, firestore, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const pdflist = collection(firestore, "pdfs");

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
  const { push } = useRouter();

  const handleFileUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf";
    fileInput.onchange = (e: any) => {
      if (e.target && e.target.files) {
        setfileUpload(e.target.files[0]);
      }
    };
    fileInput.click();
  };

  const handleConfirmUpload = async () => {
    // push("/hello-nextjs");
    const filepath = crypto.randomUUID() + fileUpload.name.replace(/\s+/g, "");
    const fileRef = ref(storage, `pdfs/${filepath}`);
    const videoUrl = await uploadBytes(fileRef, fileUpload);

    const uploader = auth.currentUser?.displayName
      ? auth.currentUser
      : "Anonymous";

    const photo = auth.currentUser?.photoURL
      ? auth.currentUser
      : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max";

    const url: string = `https://firebasestorage.googleapis.com/v0/b/learnlink-87932.appspot.com/o/pdfs%2F${videoUrl.metadata.name}?alt=media&token=https://firebasestorage.googleapis.com/v0/b/learnlink-87932.appspot.com/o/pdfs%2Fc0f8ae99-7d2a-42d4-9a30-80faa747deaaSatyadevMoolagani.pdf?alt=media&token=ca72859e-d6a3-401e-9fe9-f900ac986782`;

    await addDoc(pdflist, {
      pdfname: fileUpload.name.split(".")[0],
      uploader: uploader,
      photo: photo,
      pdfpath: url,
      pdf: videoUrl.metadata.name,
      timestamp: serverTimestamp(),
    });

    push("/pdf/" + videoUrl.metadata.name);
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
        Create Link Document
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
        <Tooltip title={fileUpload ? "Upload Different File" : "Upload File"}>
          <IconButton onClick={handleFileUpload}>
            <Avatar sx={{ width: 150, height: 150, bgcolor: "#1f1f1f" }}>
              <UploadIcon sx={{ width: 75, height: 75, color: "#909090" }} />
            </Avatar>
          </IconButton>
        </Tooltip>
        {fileUpload ? (
          <>
            <Typography variant="h6" sx={{ color: "white" }}>
              Creating Link to: {fileUpload.name}
            </Typography>
            <Button
              variant="contained"
              className="mb-auto"
              style={{ backgroundColor: "#3da6ff", color: "#0e0f10" }}
              onClick={handleConfirmUpload}
            >
              Confirm Link
            </Button>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
