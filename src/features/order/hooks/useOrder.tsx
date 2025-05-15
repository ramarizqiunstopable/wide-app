import { useState, useEffect } from "react";
import type { Order } from "@/types/order";

const STORAGE_KEY = "orders";

export const useOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // 🔁 Load orders from sessionStorage saat pertama kali mount
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, []);

  // 💾 Sync ke sessionStorage tiap ada perubahan
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  // ✅ Create
  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  // 🔄 Update
  const updateOrder = (updatedOrder: Order) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    );
  };

  // ❌ Delete
  const deleteOrder = (id: string) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  // 🔍 Read single
  const getOrderById = (id: string) => {
    return orders.find((order) => order.id === id);
  };

  return {
    orders,
    addOrder,
    updateOrder,
    deleteOrder,
    getOrderById,
  };
};
