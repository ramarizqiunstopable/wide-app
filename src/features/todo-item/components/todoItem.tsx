// features/todo/components/TodoItem.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTodo } from "../hooks/useTodo";
import { Loader2 } from "lucide-react";

export const TodoItem = () => {
  const { todo, loading, error } = useTodo();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <Loader2 className="animate-spin" />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!todo) return null;

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-lg">Todo Item</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Title:</strong> {todo.title}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {todo.completed ? "Completed" : "Not Completed"}
        </p>
      </CardContent>
    </Card>
  );
};
