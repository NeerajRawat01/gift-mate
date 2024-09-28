import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthenticatedRouteHOC from "./HOC/AuthenticatedRouteHOC";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import MovieDetailPage from "./components/pages/MovieDetailPage";
import MovieList from "./components/pages/MovieList";
import { AuthRoutes, LayoutRoutes } from "./routes/layoutRoutes";
import UnAthenticatedRouteHO from "./HOC/UnAthenticatedRouteHOC";

function App() {
  return (
    <BrowserRouter>
      {/* Suspense will display a fallback while lazy-loaded components are being fetched */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Layout route wraps around other routes */}
          <Route path="/" element={<Layout />}>
            {/* Map over LayoutRoutes and render the element for each */}
            {LayoutRoutes.map((route) => (
              <Route
                path={route.key}
                key={route.key}
                Component={
                  route.element && AuthenticatedRouteHOC(route.element)
                }
              />
            ))}
          </Route>
          {AuthRoutes.map((route) => (
            <Route
              path={route.key}
              key={route.key}
              Component={route.element && UnAthenticatedRouteHO(route.element)}
            />
          ))}
          <Route path="/profile" element={<MovieList cardData={undefined} />} />
          <Route path={`/movie-detail/:id`} element={<MovieDetailPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
