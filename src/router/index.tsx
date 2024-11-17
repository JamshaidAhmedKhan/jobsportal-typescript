import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const RouterView = () => {
  return <RouterProvider router={routes} />;
};

export default RouterView;
