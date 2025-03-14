"use client";
import { firestore, Timestamp } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PdfCard from "./PdfCard";
import { Grid } from "@mui/material";
import CardLoader from "./CardLoader";

type PdfDocument = {
  id: string;
  pdfpath: string;
  pdfname: string;
  pdf: string;
  timestamp?: Timestamp;
};

const pdfCollection = collection(firestore, "pdfs");

const MainApp = () => {
  const [pdfList, setPdfList] = useState<PdfDocument[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pdfQuery = query(pdfCollection, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(pdfQuery, (snapshot) => {
      const documents: PdfDocument[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as PdfDocument[];
      setPdfList(documents);
    });

    setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <Grid container spacing={1}>
      {pdfList.map((pdfDoc) => (
        <Grid key={pdfDoc.id} item xs={12} md={4} lg={3} xl={3}>
          {isLoading ? (
            <PdfCard
              pdfurl={pdfDoc.pdfpath}
              docname={pdfDoc.pdfname}
              pdf={pdfDoc.pdf}
            />
          ) : (
            <CardLoader />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default MainApp;
