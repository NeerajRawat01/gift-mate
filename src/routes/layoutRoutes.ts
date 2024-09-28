import React from "react";
import { BaseRouteConfigType } from "./layout.types";
import HomePage from "../components/pages/HomePage";

// Lazy load the MovieList component
const MovieList = React.lazy(() => import("../components/pages/MovieList"));
const FavoriteMovieList = React.lazy(
  () => import("../components/pages/Favorite")
);
const AuthPage = React.lazy(() => import("../components/pages/AuthPage"));

// Define your layout routes
export const LayoutRoutes: Array<BaseRouteConfigType> = [
  {
    key: "/",
    name: "Home",
    element: HomePage,
  },
  {
    key: "/favorites",
    name: "Favorites",
    element: FavoriteMovieList,
  },
];

export const AuthRoutes: Array<BaseRouteConfigType> = [
  {
    key: "/auth",
    name: "Auth",
    element: AuthPage,
  },
];
