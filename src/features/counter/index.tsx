import { useCounter } from "./hooks/useCounter";
import { CounterNumber } from "./components/counterNumber";
import { Button } from "@/components/ui/button";
export default function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <CounterNumber count={count} />
      <div className="flex gap-4">
        <Button variant="outline" onClick={decrement}>
          Decrement
        </Button>
        <Button onClick={increment}>Increment</Button>
      </div>
    </div>
  );
}
