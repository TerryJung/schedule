import { useCallback, useEffect } from "react";

function useKeyDown(keyCode: number, callback: () => void) {
  const eventHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === keyCode) {
        callback();
      }
    },
    [keyCode, callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", eventHandler, false);

    return () => {
      document.removeEventListener("keydown", eventHandler, false);
    };
  }, [eventHandler]);
}

export default useKeyDown;
