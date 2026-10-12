import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import FlashCardPage from "./pages/FlashCardPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <FlashCardPage />
      <Analytics />
    </>
  );
}

export default App;
