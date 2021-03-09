import React, { useCallback, useRef, useState } from "react";
import StatusMonitorContext from "./StatusMonitorContext";

export default function StatusMonitor(props) {
  const loadingCountRef = useRef({ registry: new Set() });
  const [isLoading, setIsLoading] = useState(false);

  const memoizedRegisterFn = useCallback(
    function register() {
      const { registry } = loadingCountRef.current;

      const unregister = () => {
        registry.delete(unregister);
        if (registry.size === 0) {
          setIsLoading(false);
        }
      };

      registry.add(unregister);
      if (registry.size === 1) {
        setIsLoading(true);
      }

      return unregister;
    },
    [loadingCountRef, setIsLoading]
  );

  return (
    <StatusMonitorContext.Provider value={memoizedRegisterFn}>
      isLoading = {isLoading.toString()}
      {props.children}
    </StatusMonitorContext.Provider>
  );
}
