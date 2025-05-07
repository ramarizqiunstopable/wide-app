import App from "@/App";
import FormWide from "@/pages/FormWide";
import { Home } from "@/pages/HomeWide";

import { Profile } from "@/pages/ProfileWide";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/profile", element: <Profile /> },
      { path: "/form", element: <FormWide /> },
    ],
  },
];
