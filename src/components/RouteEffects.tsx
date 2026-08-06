import { useEffect } from "react";

const ROUTE_TITLES: Record<string, string> = {
  "/": "One Call Heating & Air | Northern Utah HVAC",
  "/about": "About | One Call Heating & Air",
  "/about/social-media": "Social Media | One Call Heating & Air",
  "/contact": "Contact | One Call Heating & Air",
  "/emergency": "24/7 Emergency HVAC | One Call Heating & Air",
  "/location": "Location | One Call Heating & Air",
  "/services": "HVAC Services | One Call Heating & Air",
};

export function RouteEffects({
  hash,
  pathname,
}: {
  hash: string;
  pathname: string;
}) {
  useEffect(() => {
    document.title = ROUTE_TITLES[pathname] ?? "Page Not Found | One Call Heating & Air";

    if (!hash) {
      window.scrollTo({ left: 0, top: 0 });
      return;
    }

    let frameId = 0;
    let remainingAttempts = 60;

    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView();
        return;
      }

      remainingAttempts -= 1;
      if (remainingAttempts > 0) {
        frameId = window.requestAnimationFrame(scrollToTarget);
      }
    };

    frameId = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frameId);
  }, [hash, pathname]);

  return null;
}
