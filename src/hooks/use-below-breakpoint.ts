import { useEffect, useState } from "react";

export const useBelowBreakpoint = (breakpoint: number) => {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    // Handler to update state on resize
    const handleResize = () => {
      setIsBelow(window.innerWidth < breakpoint);
    };

    handleResize(); // check initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBelow;
};
