import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";

export const NotFound = () => {
  return (
    <HelmetProvider>
      <div class="error">404</div>
      <br />
      <br />
      <span class="info">Page not found</span>
      <img
        src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
        class="static"
      />
    </HelmetProvider>
  );
};
