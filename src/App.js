import React, { useEffect, useState } from "react";
import StatusMonitor from "./StatusMonitor";
import DummyComponent from "./DummyComponent";
import "./styles.css";

export default function App() {
  return (
    <StatusMonitor>
      <DummyComponent />
      <DummyComponent />
      <DummyComponent />
    </StatusMonitor>
  );
}
