import React from "react";
//import "./styles.css";
import FormPerson from "./components/FormPerson";
import { ContextProvider } from "./globals/context";

export default function App1() {
  return (
    <ContextProvider>
      <div className="App">
        <FormPerson />
      </div>
    </ContextProvider>
  );
}
