import { lazy, Suspense, useSyncExternalStore } from "react";

import { RouteEffects } from "@/components/RouteEffects";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  EMERGENCY_ROUTE,
  HOME_ROUTE,
  LOCATION_ROUTE,
  SERVICES_ROUTE,
  SOCIAL_MEDIA_ROUTE,
} from "@/config/site";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const PlaceholderPage = lazy(() => import("@/pages/PlaceholderPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));

function subscribeToLocation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getLocationSnapshot() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export default function App() {
  useSyncExternalStore(subscribeToLocation, getLocationSnapshot);

  const { hash, pathname } = window.location;
  const Page =
    pathname === HOME_ROUTE
      ? HomePage
      : pathname === SERVICES_ROUTE
        ? ServicesPage
        : pathname === ABOUT_ROUTE
          ? AboutPage
          : pathname === CONTACT_ROUTE
            ? ContactPage
            : pathname === LOCATION_ROUTE ||
                pathname === EMERGENCY_ROUTE ||
                pathname === SOCIAL_MEDIA_ROUTE
              ? PlaceholderPage
            : NotFoundPage;

  return (
    <>
      <RouteEffects hash={hash} pathname={pathname} />
      <Suspense fallback={null}>
        <Page />
      </Suspense>
    </>
  );
}
