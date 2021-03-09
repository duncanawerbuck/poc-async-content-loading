import { useState } from "react";
import IsLoading from "./IsLoading";

export default function () {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading ? (
        <>
          <IsLoading />
          <button type="button" onClick={() => setIsLoading(false)}>
            Stop Loading
          </button>{" "}
        </>
      ) : (
        <button type="button" onClick={() => setIsLoading(true)}>
          Start Loading
        </button>
      )}
      I am {isLoading ? "" : "not"} loading
    </div>
  );
}
