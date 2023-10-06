import React from "react";
import { Header, Button, Facts } from "./components";
import { MishiContextProvider } from "./context/MishiContextProvider";

export function App() {
  return (
    <div>
      <Header title="Mishi Generator 🐱‍💻" />
      <main>
        <MishiContextProvider>
          <Facts />
          <Button title="Meow!" />
        </MishiContextProvider>
      </main>
    </div>
  );
}
