import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasAnnounced, setHasAnnounced] = useState(false);

  const ariaAttributes = {
    "aria-atomic": "true",
    "aria-busy": "false",
    "aria-live": "polite"
  };

  if (loading) {
    ariaAttributes["aria-busy"] = "true";
  }
  if (hasAnnounced) {
    delete ariaAttributes["aria-live"];
  }

  useEffect(() => {
    let id;
    if (!loading && !hasAnnounced) {
      id = setTimeout(() => setHasAnnounced(true), 1000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [loading, hasAnnounced]);

  return (
    <main {...ariaAttributes}>
      {loading ? "Loading..." : "loaded"}
      <button type="button" onClick={() => setLoading(false)}>
        Stop loading
      </button>
      Blah blah blah blah blah.
      <br />
      <code aria-hidden="true">{JSON.stringify(ariaAttributes, null, 2)}</code>
    </main>
  );
}
