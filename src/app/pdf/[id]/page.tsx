"use client";
import NavbarDrawer from "@/components/NavbarDrawer";
import TextInput from "@/components/SendTextInput";
import SelectLang from "@/components/SelectLang";
import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import SendLink from "@/components/SendLink";
import { Box } from "@mui/material";
import MessageBox from "@/components/MessageBox";
import QueryBox from "@/components/QueryBox";
import LinearProgress from "@mui/material/LinearProgress";
import MessageBoxLoader from "@/components/MessageBoxLoader";

interface StateItem {
  query: string;
  output: string;
}

const page = ({ params }: any) => {
  const id: string = params.id;
  const url: string = `https://firebasestorage.googleapis.com/v0/b/learnlink-87932.appspot.com/o/pdfs%2F${id}?alt=media&token=https://firebasestorage.googleapis.com/v0/b/learnlink-87932.appspot.com/o/pdfs%2Fc0f8ae99-7d2a-42d4-9a30-80faa747deaaSatyadevMoolagani.pdf?alt=media&token=ca72859e-d6a3-401e-9fe9-f900ac986782`;
  const [language, setlanguage] = useState<string>("English");
  const [query, setquery] = useState<string>("");
  const [textlist, settextlist] = useState<StateItem[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const myRef = useRef<any>(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    setTimeout(() => {
      executeScroll();
    }, 1000);
  }, []);

  const handleSubmit = async () => {
    setisLoading(true);

    if (query.length === 0) {
      alert("Please ask a question to send link!");
      setisLoading(false);
      return;
    }

    const postData = {
      input: query,
      file: url,
      language: language,
    };

    fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTextlist = [
          ...textlist,
          { query: query, output: data.result },
        ];
        settextlist(updatedTextlist);
        setquery("");

        // Reset loading state after fetch completes
        setisLoading(false);
      })
      .catch((error) => {
        alert("API is not up at the moment due to cost issues! Sorry!");

        // Reset loading state after fetch error
        setisLoading(false);
      });
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [query]);

  return (
    <NavbarDrawer>
      <Grid className="overflow-y-hidden" container spacing={1}>
        <Grid className="h-[78vh] flex justify-between" item xs={12}>
          <Box className="h-full w-[32%]">
            <embed
              src={url}
              width="100%"
              height="100%"
              type="application/pdf"
            />
          </Box>
          <Box className="h-full w-[68%] overflow-y-auto customscroll">
            <MessageBox text="Hello! Ask me anything, I am happy to assist!" />
            {textlist.map((item) => {
              return (
                <div key={crypto.randomUUID()}>
                  <QueryBox text={item.query} />
                  <MessageBox text={item.output} />
                </div>
              );
            })}
            {isLoading && (
              <>
                <QueryBox text={query} />
                <MessageBoxLoader />
              </>
            )}
            <div className="h-2" ref={myRef}></div>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <SelectLang lang={language} setlang={setlanguage} />
        </Grid>
        <Grid item xs={9}>
          <TextInput value={query} setvalue={setquery} />
        </Grid>
        <Grid item xs={1}>
          <SendLink isLoading={isLoading} handleFunction={handleSubmit} />
        </Grid>
      </Grid>
      {isLoading && (
        <Box sx={{ width: "100%", mt: 4 }}>
          <LinearProgress
            sx={{
              backgroundColor: "#bdbdbd",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#5065a8",
              },
            }}
          />
        </Box>
      )}
    </NavbarDrawer>
  );
};

export default page;
