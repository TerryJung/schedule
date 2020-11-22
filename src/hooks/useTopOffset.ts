import { useEffect, useState } from "react";

const useTopOffset = (ref: any) => {
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    if (ref && ref.current) {
      setTopOffset(ref.current.getBoundingClientRect().top);
    } else {
      setTopOffset(0);
    }
  }, []);

  return topOffset;
};

export default useTopOffset;
