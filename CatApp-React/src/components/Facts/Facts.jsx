import "./Facts.css";
import { useApp } from "../../hooks/useApp";

export function Facts() {
  const { catFact, catImg, isLoading, isFirstTime, error } = useApp();

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <img
          className="loadingGif"
          src="https://i.pinimg.com/originals/d5/9a/c5/d59ac57c7be4085e22ae87e2ca5d7c70.gif"
          alt="Loading"
        />
      </div>
    );
  }

  if (isFirstTime.current) {
    return (
      <p className="firstTime">Click the button and get a funny fact :)</p>
    );
  }

  return (
    <div className="card">
      <img className="catImg" src={catImg} alt="Cat" />
      <p className="catFact">{catFact}</p>
    </div>
  );
}
