import { useEffect, useContext } from "react";
import { fetchImg, fetchFact } from "../services/fetch";
import { MishiContext } from "../context/MishiContext";

export const useApp = () => {
  const context = useContext(MishiContext);

  if (!context) {
    throw new Error(
      "This component sould be within a MishiContextProvider Component"
    );
  }

  const {
    error,
    setError,
    catFact,
    setCatFact,
    catImg,
    setCatImg,
    isLoading,
    setIsLoading,
    isFirstTime,
  } = context;

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = catFact === "";
    }
  }, [catFact]);

  const getFact = () => {
    fetchFact()
      .then((newFact) => {
        setCatFact(newFact);
        const newImgText = newFact.split(" ").slice(0, 4).join(" ");
        getImg(newImgText);
      })
      .catch((e) => setError(e));
  };

  const getImg = (newImgText) => {
    fetchImg({ newImgText })
      .then((newImg) => setCatImg(newImg))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {}, [getFact]);

  useEffect(() => {}, [getImg]);

  const handleBtn = () => {
    setIsLoading(true);
    getFact();
    var audio = document.getElementById("myAudio");
    audio.play();
  };

  return {
    error,
    catImg,
    catFact,
    isLoading,
    isFirstTime,
    handleBtn,
  };
};
