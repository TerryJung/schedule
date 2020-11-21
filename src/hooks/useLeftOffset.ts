import { useEffect, useState } from "react";

const useLeftOffset = (ref: any) => {
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    if (ref && ref.current) {
      setLeftOffset(ref.current.getBoundingClientRect().left);
    } else {
      setLeftOffset(0);
    }
  }, []);

  return leftOffset;
};

export default useLeftOffset;
