import { useEffect, useLayoutEffect, useState } from "react";

export const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 456 ? setIsMobile(true) : setIsMobile(false);
    });
    return () => window.removeEventListener("resize");
  }, []);
  return { isMobile };
};
