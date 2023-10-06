import { MishiContext } from "./MishiContext";
import React, { useState, useRef } from "react";

export function MishiContextProvider({ children }) {
  const [catFact, setCatFact] = useState("");
  const [catImg, setCatImg] = useState("");
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const isFirstTime = useRef(true);

  const contextValue = {
    catFact,
    setCatFact,
    catImg,
    setCatImg,
    error,
    setError,
    isLoading,
    setIsLoading,
    isFirstTime,
  };

  return (
    <MishiContext.Provider value={contextValue}>
      {children}
    </MishiContext.Provider>
  );
}
