// src/features/order/hooks/useOrder.ts
import { useState, useEffect } from "react";
import type { Order } from "@/types/order";

const STORAGE_KEY = "orders";

export const useOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // ✅ Load awal + listener perubahan dari storage
  useEffect(() => {
    const loadOrders = () => {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setOrders(parsed);
        } catch (err) {
          console.error("Gagal parsing orders:", err);
        }
      }
    };

    loadOrders();

    // Listener kalau data berubah
    window.addEventListener("orders-updated", loadOrders);
    return () => {
      window.removeEventListener("orders-updated", loadOrders);
    };
  }, []);

  // ✅ Simpan dan trigger event global
  const syncAndTrigger = (updated: Order[]) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("orders-updated")); // semua komponen yang pakai useOrder akan update
    setOrders(updated);
  };

  // ✅ Tambah
  const addOrder = (order: Order) => {
    const updated = [...orders, order];
    syncAndTrigger(updated);
  };

  // 🔄 Update
  const updateOrder = (updatedOrder: Order) => {
    const updated = orders.map((o) =>
      o.id === updatedOrder.id ? updatedOrder : o
    );
    syncAndTrigger(updated);
  };

  // ❌ Hapus
  const deleteOrder = (id: string) => {
    const updated = orders.filter((o) => o.id !== id);
    syncAndTrigger(updated);
  };

  // 🔍 Ambil by ID
  const getOrderById = (id: string) => {
    return orders.find((o) => o.id === id);
  };

  return {
    orders,
    addOrder,
    updateOrder,
    deleteOrder,
    getOrderById,
  };
};
