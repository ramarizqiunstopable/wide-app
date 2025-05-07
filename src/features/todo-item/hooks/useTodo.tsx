// features/todo/hooks/useTodo.ts
import { useEffect, useState } from "react";
import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useTodo = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        setTodo(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Fetch error:", err);
          setError("Failed to fetch todo: " + err.message);
        } else {
          setError("Failed to fetch todo: Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, []);

  return { todo, loading, error };
};
