import { useContext, useEffect } from "react";
import StatusMonitorContext from "./StatusMonitorContext";

export default function IsLoading() {
  const register = useContext(StatusMonitorContext);

  useEffect(register, [register]);

  // useEffect(() => {
  //   const unregister = register();
  //   return unregister;
  // }, [register]);

  return null;
}
