import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [route, setRoute] = useState("/");

  const ariaAttributes = {
    // "aria-atomic": "true",
    // "aria-busy": "false",
    // "aria-live": "polite"
  };

  // if (loading) {
  //   ariaAttributes["aria-busy"] = "true";
  // }
  // if (hasAnnounced) {
  //   delete ariaAttributes["aria-live"];
  // }

  useEffect(() => {
    let id;
    if (!loading && !hasAnnounced) {
      id = setTimeout(() => setHasAnnounced(true), 1000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [loading, hasAnnounced]);

  useEffect(() => {
    console.log("focusing on main, the route is", route);
    document.getElementsByTagName("main")[0].focus();
  }, [route]);

  console.log("The route is", route);

  return route === "/" ? renderScreen1() : renderScreen2();

  function renderScreen2() {
    return (
      <>
        <div role="status" aria-live="polite">
          {loading ? "Loading..." : "loaded"}
        </div>

        <main {...ariaAttributes} tabIndex="-1">
          <button type="button" onClick={() => setLoading(false)}>
            Stop loading
          </button>
          Blah blah blah blah blah.
          <p>{loading ? "(i am a stencil" : "(i am the real data!"}</p>
          <br />
          <code aria-hidden="true">
            {JSON.stringify(ariaAttributes, null, 2)}
          </code>
        </main>
      </>
    );
  }

  function renderScreen1() {
    return (
      <main>
        <button type="button" onClick={() => setRoute("/screen2")}>
          Go to screen 2
        </button>
      </main>
    );
  }
}
