import { Link } from "react-router-dom";

export const MobileMenu = ({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) => (
  <ul className="space-y-2">
    <li>
      <Link
        to="/"
        onClick={() => setIsOpen(false)}
        className="block hover:underline"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/order"
        onClick={() => setIsOpen(false)}
        className="block hover:underline"
      >
        Order Data
      </Link>
    </li>
    <li>
      <Link
        to="/Form"
        onClick={() => setIsOpen(false)}
        className="block hover:underline"
      >
        Form Data
      </Link>
    </li>
    <li>
      <Link
        to="/profile"
        onClick={() => setIsOpen(false)}
        className="block hover:underline"
      >
        Profile
      </Link>
    </li>
  </ul>
);
