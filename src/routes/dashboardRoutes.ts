import React from "react";
import { BaseRouteConfigType } from "./layout.types";

// Lazy load the MovieList component
const AuthPage = React.lazy(() => import("../components/pages/AuthPage"));
const HomePage = React.lazy(() => import("../components/pages/HomePage"));
const MyEvents = React.lazy(() => import("../components/pages/MyEvents"));
const Gifts = React.lazy(() => import("../components/pages/Gifts"));
const InvitedEvents = React.lazy(
  () => import("../components/pages/Invitations")
);

// Define your layout routes
export const DashboardRoutes: Array<BaseRouteConfigType> = [
  {
    key: "/",
    name: "Home",
    element: HomePage,
  },
  {
    key: "/my-events",
    name: "My Events",
    element: MyEvents,
  },
  {
    key: "/invitations",
    name: "Invitations",
    element: InvitedEvents,
  },
  {
    key: "/gifts",
    name: "Gifts",
    element: Gifts,
  },
];

export const AuthRoutes: Array<BaseRouteConfigType> = [
  {
    key: "/auth",
    name: "Auth",
    element: AuthPage,
  },
];
