"use client";
import React, { useEffect, useState } from "react";

const MainApp = () => {
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/prediction");
        const data = await response.text();
        // const formattedPrediction = data.replace("\n", "<br>");
        setPrediction(data);
      } catch (error) {
        console.error("Error fetching prediction:", error);
      }
    }

    fetchData();
  }, []);

  return <div className="text-black">{prediction}</div>;
};

export default MainApp;
