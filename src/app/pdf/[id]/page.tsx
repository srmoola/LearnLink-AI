"use client";

import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import NavbarDrawer from "@/components/NavbarDrawer";
import TextInput from "@/components/SendTextInput";
import SelectLang from "@/components/SelectLang";
import SendLink from "@/components/SendLink";
import MessageBox from "@/components/MessageBox";
import QueryBox from "@/components/QueryBox";
import MessageBoxLoader from "@/components/MessageBoxLoader";

interface ChatMessage {
  query: string;
  response: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const pdfUrl = `https://firebasestorage.googleapis.com/v0/b/learnlink-87932.appspot.com/o/pdfs%2F${id}?alt=media&token=ca72859e-d6a3-401e-9fe9-f900ac986782`;

  const [language, setLanguage] = useState<string>("English");
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, []);

  // Handle message submission
  const handleSubmit = async () => {
    if (!query.trim()) {
      alert("Please enter a question before sending!");
      return;
    }

    setIsLoading(true);

    const postData = {
      input: query,
      file: pdfUrl,
      language,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      
      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { query, response: data.result }]);
      setQuery("");
    } catch (error) {
      alert("API is currently unavailable. Please try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press for submitting query
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") handleSubmit();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [query]);

  return (
    <NavbarDrawer>
      <Grid container spacing={1} className="overflow-y-hidden">
        {/* PDF Display */}
        <Grid item xs={12} className="h-[78vh] flex justify-between">
          <Box className="h-full w-[32%]">
            <embed src={pdfUrl} width="100%" height="100%" type="application/pdf" />
          </Box>

          {/* Chat Box */}
          <Box className="h-full w-[68%] overflow-y-auto customscroll">
            <MessageBox text="Hello! Ask me anything, I am happy to assist!" />
            {messages.map((msg) => (
              <div key={crypto.randomUUID()}>
                <QueryBox text={msg.query} />
                <MessageBox text={msg.response} />
              </div>
            ))}
            {isLoading && (
              <>
                <QueryBox text={query} />
                <MessageBoxLoader />
              </>
            )}
            <div ref={bottomRef} className="h-2"></div>
          </Box>
        </Grid>

        {/* Controls */}
        <Grid item xs={2}>
          <SelectLang lang={language} setlang={setLanguage} />
        </Grid>
        <Grid item xs={9}>
          <TextInput value={query} setvalue={setQuery} />
        </Grid>
        <Grid item xs={1}>
          <SendLink isLoading={isLoading} handleFunction={handleSubmit} />
        </Grid>
      </Grid>

      {/* Loading Bar */}
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

export default Page;
