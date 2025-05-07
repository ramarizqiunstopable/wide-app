import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const UserProfileCard = () => {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left">
          <Avatar className="w-16 h-16 mx-auto sm:mx-0">
            <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="mt-2 sm:mt-0">
            <CardTitle className="text-xl font-semibold">
              Rizqi Ramadhanianto
            </CardTitle>
            <Badge variant="secondary">Member</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm sm:text-base">
        <p className="text-gray-700">📧 rizqi.doe@example.com</p>
        <p className="text-gray-700">📍 Jakarta, INA</p>

        <Button asChild>
          <Link to="/" className="text-sm text-blue-600 hover:underline mt-2">
            ← Back to Home
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
