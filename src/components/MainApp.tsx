"use client";
import { firestore } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PdfCard from "./PdfCard";
import { Grid } from "@mui/material";

const documents = collection(firestore, "pdfs");

const MainApp = () => {
  const [pdffiles, setpdffiles] = useState<any[]>([]);
  const [isLoaded, setisLoaded] = useState(false);

  console.log(pdffiles);

  useEffect(() => {
    const q = query(documents, orderBy("timestamp", "desc"));
    const getUsers = onSnapshot(q, (doc) => {
      let allDocs: any[] = [];
      doc.docs.forEach((doc) => {
        allDocs.push({ ...doc.data(), id: doc.id });
      });
      setpdffiles(allDocs);
    });

    setTimeout(() => {
      setisLoaded(true);
    }, 2000);

    return () => getUsers(); // Cleanup the listener when component unmounts
  }, []); // Run the effect only once on component mount

  return (
    <>
      <Grid container spacing={1}>
        {pdffiles.map((doc) => {
          return (
            <Grid key={doc.id} item xs={12} md={4} lg={3} xl={3}>
              <PdfCard
                pdfurl={doc.pdfpath}
                docname={doc.pdfname}
                pdf={doc.pdf}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MainApp;
