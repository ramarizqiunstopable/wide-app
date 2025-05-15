import { Link } from "react-router-dom";

export const NavLinks = () => (
  <ul className="flex space-x-4">
    <li>
      <Link to="/order" className="hover:underline">
        Order Data
      </Link>
    </li>
    <li>
      <Link to="/Form" className="hover:underline">
        Form Data
      </Link>
    </li>
    <li>
      <Link to="/profile" className="hover:underline">
        Profile
      </Link>
    </li>
  </ul>
);
