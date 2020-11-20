import { useEffect } from "react";

const useMouseUp = (callback: () => void) => {
  useEffect(() => {
    document.addEventListener("mouseup", callback);

    return () => document.removeEventListener("mouseup", callback);
  }, []);
};

export default useMouseUp;
