import App from "./App";
import Catalog from "./Components/Landing/Products/Catalog";

const routes = [
    {
        path: "/",
        element: <App/>,

    },

  {  path:"/:name",
    element: <Catalog/>,

  }
];

export default routes;