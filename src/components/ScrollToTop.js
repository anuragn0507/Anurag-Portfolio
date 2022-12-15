import { useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  console.log("path name changeed", pathname);
  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    } else if (pathname === "/about") {
      window.scrollTo({
        top: 1600,
        left: 0,
        behavior: "smooth",
      });
    } else if (pathname === "/project") {
      window.scrollTo({
        top: 3700,
        left: 0,
        behavior: "smooth",
      });
    } else if (pathname === "/resume") {
      window.scrollTo({
        top: 5800,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
