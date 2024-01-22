import { Route, Routes } from "react-router-dom";
import RoutesProtection from "./common/routes/RoutesProtection";
import { routesList } from "./common/routes/routesList";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        {routesList.map((route) => {
          const Component = route.element;
          return (
            !route.isPrivate && (
              <Route
                key={route.name}
                path={route.path}
                element={<Component {...route.props} />}
              />
            )
          );
        })}
        {/* Protected Routes */}
        <Route element={<RoutesProtection />}>
          {routesList.map((route) => {
            const Component = route.element;
            return (
              route.isPrivate && (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<Component {...route.props} />}
                />
              )
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
