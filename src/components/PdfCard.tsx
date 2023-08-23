import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import LinkIcon from "@mui/icons-material/Link";

type Props = {
  pdfurl: string;
  docname: string;
  pdf: string;
};

export default function PdfCard({ pdfurl, docname, pdf }: Props) {
  const { push } = useRouter();
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    push("/pdf/" + pdf);
  };

  const handleCopy = () => {
    setclicked(true);
    navigator.clipboard.writeText("http://localhost:3000/pdf/" + pdf);
    setTimeout(() => {
      setclicked(false);
    }, 2500);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <embed src={pdfurl} width="100%" height="100%" type="application/pdf" />
      <CardContent>
        <Typography gutterBottom variant="h6" noWrap>
          {docname}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={handleClick} color="error" size="small">
          <LinkIcon className="mr-1" />
          Enter
        </Button>
        {clicked ? (
          <Button size="small">
            <CheckIcon className="mr-1" />
            Copied to Clipboard
          </Button>
        ) : (
          <Button onClick={handleCopy} size="small">
            <ContentCopyIcon className="h-4 w-4 mr-1" />
            Copy Share Link
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
