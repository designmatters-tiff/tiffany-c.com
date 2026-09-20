
  import { createRoot } from "react-dom/client";
  import { Analytics } from "@vercel/analytics/react";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Vercel Web Analytics. The component only injects Vercel's own
  // /_vercel/insights/script.js; that script does the counting, including
  // following this site's pushState navigations, so the hand-rolled router
  // needs no wiring of its own.
  //
  // The script tag ends up in the prerendered HTML too, because prerender.mjs
  // serialises the live DOM. That's fine rather than a double count: inject()
  // checks document.head for the tag before adding one, and appends there, so
  // the baked-in tag suppresses the runtime one.
  createRoot(document.getElementById("root")!).render(
    <>
      <App />
      <Analytics />
    </>
  );
