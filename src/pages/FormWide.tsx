import { AuthForm } from "@/features/auth-form/components/authForm";
import TodoItemFeatures from "@/features/todo-item";

export default function FormWide() {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Auth Form */}
      <div className="w-full md:w-1/2">
        <AuthForm />
      </div>

      {/* Todo Item */}
      <div className="w-full ">
        <TodoItemFeatures />
      </div>
    </div>
  );
}
