import { useEffect } from 'react';

function useKeyDown(keyCode: number, callback: () => void) {
  function eventHandler(event: KeyboardEvent) {
    if (event.keyCode === keyCode) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', eventHandler, false);

    return () => {
      document.removeEventListener('keydown', eventHandler, false);
    };
  }, []);
}

export default useKeyDown;
