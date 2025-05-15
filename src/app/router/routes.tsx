import App from "@/App";
import OrderForm from "@/features/order/input-order";
import FormWide from "@/pages/FormWide";
import { Home } from "@/pages/HomeWide";

import { Profile } from "@/pages/ProfileWide";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/order", element: <OrderForm /> },
      { path: "/profile", element: <Profile /> },
      { path: "/form", element: <FormWide /> },
    ],
  },
];
