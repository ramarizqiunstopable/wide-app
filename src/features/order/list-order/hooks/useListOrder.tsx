import { useEffect, useState } from "react";
import type { Order } from "@/types/order";

const STORAGE_KEY = "orders";

export const useListOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const data = sessionStorage.getItem(STORAGE_KEY);
    if (data) {
      setOrders(JSON.parse(data));
    }
  }, []);

  return {
    orders,
  };
};
