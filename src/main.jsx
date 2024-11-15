import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HUD } from "./HUD";
import { Landing } from "./Landing";
import { ArweaveWalletKit } from "arweave-wallet-kit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArweaveWalletKit>
      <App />
      <HUD />
      <Landing />
    </ArweaveWalletKit>
  </React.StrictMode>
);
