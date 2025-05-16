import App from "@/App";
import OrderDetailPage from "@/features/order/detail-order";
import UpdateOrderPage from "@/features/order/update-order";
import FormWide from "@/pages/FormWide";
import { Home } from "@/pages/HomeWide";
import OrderWide from "@/pages/OrderWide";

import { Profile } from "@/pages/ProfileWide";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/order", element: <OrderWide /> },
      { path: "/order/:id", element: <OrderDetailPage /> },
      { path: "/update-order/:id", element: <UpdateOrderPage /> },
      { path: "/profile", element: <Profile /> },
      { path: "/form", element: <FormWide /> },
    ],
  },
];
