import { useState } from "react";
import Card from "./components/Card";
import Loader from "./components/Loader";

export default function App() {
  const [showPhotoCard, setShowPhotoCard] = useState(false);
  const [fontSize, setFontSize] = useState(24);
  const [loading, setLoading] = useState(false);

  const handleYesClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPhotoCard(true);
    }, 1500); // Simulate delay
  };

  const handleNoClick = () => {
    setShowPhotoCard(false);
    setFontSize((prev) => prev + 2);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      {loading ? (
        <Loader />
      ) : showPhotoCard ? (
        <Card type="photo" />
      ) : (
        <Card
          type="valentine"
          fontSize={fontSize}
          onYes={handleYesClick}
          onNo={handleNoClick}
        />
      )}
    </div>
  );
}
