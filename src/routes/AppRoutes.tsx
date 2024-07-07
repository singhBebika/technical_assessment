import {useRoutes} from "react-router-dom";
import SpellDescription from "@src/components/templates/SpellDescription";
import {NAVIGATION_ROUTES} from "./routes.constants";
import MainPage from "@src/page/MainPage";

const routes = [
  {
    path: `${NAVIGATION_ROUTES.HOME}`,
    element: <MainPage />,
  },
  {
    path: `${NAVIGATION_ROUTES.SPELL_DESCRIPTION}/:name`,
    element: <SpellDescription />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
