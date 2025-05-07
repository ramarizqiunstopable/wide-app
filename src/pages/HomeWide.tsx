import { Button } from "@/components/ui/button";
import Counter from "@/features/counter";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h1>
      <p className="mb-4">This is the landing page of your React app.</p>
      <Button asChild>
        <Link to="/profile" className="text-blue-500 ">
          Go to Profile
        </Link>
      </Button>
      <Counter />
    </div>
  );
};
