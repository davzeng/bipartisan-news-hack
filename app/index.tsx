import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./page";

function MyApp() {
  return (
    <NextUIProvider>
      <Home/>
    </NextUIProvider>
  );
}

export default MyApp;
