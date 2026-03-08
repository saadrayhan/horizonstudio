import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      // Start exit
      setStage("exit");
      const timeout = setTimeout(() => {
        prevPath.current = location.pathname;
        setDisplayChildren(children);
        setStage("enter");
      }, 280);
      return () => clearTimeout(timeout);
    } else {
      setDisplayChildren(children);
    }
  }, [location.pathname, children]);

  return (
    <div
      className={`page-transition ${stage === "enter" ? "page-enter" : "page-exit"}`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
