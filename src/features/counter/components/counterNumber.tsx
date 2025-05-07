// features/counter/components/CounterNumber.tsx
import { Card, CardContent } from "@/components/ui/card";

interface CounterNumberProps {
  count: number;
}

export const CounterNumber = ({ count }: CounterNumberProps) => {
  return (
    <Card className="w-full max-w-sm mx-auto text-center shadow-lg">
      <CardContent className="p-6">
        <div className="text-6xl font-bold text-primary">{count}</div>
        <p className="text-muted-foreground mt-2">Current Count</p>
      </CardContent>
    </Card>
  );
};
