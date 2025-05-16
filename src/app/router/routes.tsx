import App from "@/App";
import OrderDetailPage from "@/features/order/detail-order";
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
      { path: "/order/:id", element: <OrderDetailPage /> }, // ⬅️ tambahkan ini
      { path: "/profile", element: <Profile /> },
      { path: "/form", element: <FormWide /> },
    ],
  },
];
