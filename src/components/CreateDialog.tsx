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
import CircularProgress from "@mui/material/CircularProgress";

const pdfCollectionRef = collection(firestore, "pdfs");

function StyledPaperComponent(props: PaperProps) {
  return <Paper sx={{ backgroundColor: "#282828", height: "80%" }} {...props} />;
}

type CreateDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateDialog({ isOpen, onClose }: CreateDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { push } = useRouter();

  const handleFileSelection = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf";
    fileInput.onchange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        setSelectedFile(inputElement.files[0]);
      }
    };
    fileInput.click();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    const uniqueFileName = crypto.randomUUID() + selectedFile.name.replace(/\s+/g, "");
    const storageRef = ref(storage, `pdfs/${uniqueFileName}`);
    const uploadedFile = await uploadBytes(storageRef, selectedFile);

    const fileUrl = `https://firebasestorage.googleapis.com/v0/b/learnlink-87932.appspot.com/o/pdfs%2F${uploadedFile.metadata.name}?alt=media`;

    await addDoc(pdfCollectionRef, {
      name: selectedFile.name.split(".")[0],
      url: fileUrl,
      storagePath: uploadedFile.metadata.name,
      timestamp: serverTimestamp(),
    });

    setIsUploading(false);
    push(`/pdf/${uploadedFile.metadata.name}`);
  };

  return (
    <Dialog
      open={isOpen}
      PaperComponent={StyledPaperComponent}
      aria-labelledby="dialog-title"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle className="flex justify-between text-white" id="dialog-title">
        Create Link Document
        <Tooltip title="Close">
          <IconButton
            onClick={() => {
              onClose();
              setSelectedFile(null);
            }}
          >
            <ClearIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <CustomDivider open={isOpen} />
      <DialogContent className="grid place-items-center">
        <Tooltip title={selectedFile ? "Upload Different File" : "Upload File"}>
          <IconButton onClick={handleFileSelection}>
            <Avatar sx={{ width: 150, height: 150, bgcolor: "#1f1f1f" }}>
              <UploadIcon sx={{ width: 75, height: 75, color: "#909090" }} />
            </Avatar>
          </IconButton>
        </Tooltip>
        {selectedFile && (
          <>
            <Typography variant="h6" sx={{ color: "white" }}>
              Creating Link to: {selectedFile.name}
            </Typography>
            <Button
              variant="contained"
              className="mb-auto"
              style={{ backgroundColor: "#3da6ff", color: "#0e0f10" }}
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? <CircularProgress size={24} /> : "Confirm Link"}
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
