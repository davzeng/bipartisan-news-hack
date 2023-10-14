import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import YourApplication from "../components/YourApplication"; // Import your main application component

function MyApp() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}

export default MyApp;
