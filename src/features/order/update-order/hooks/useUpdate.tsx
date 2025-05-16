// src/features/update-order/hooks/useUpdate.ts
import { useState, useEffect } from "react";
import type { Order, OrderItem } from "@/types/order";

const generateId = () =>
  Date.now().toString() + Math.floor(Math.random() * 1000).toString();

export const useUpdate = (initial?: Order) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setDate(initial.date);
      setItems(initial.items);
    }
  }, [initial]);

  const updateItem = (
    id: string,
    field: keyof OrderItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const updatedItem = {
          ...item,
          [field]: field === "name" ? value : Number(value),
        };

        const quantity =
          typeof updatedItem.quantity === "string"
            ? parseFloat(updatedItem.quantity)
            : updatedItem.quantity;

        const unitPrice =
          typeof updatedItem.unitPrice === "string"
            ? parseFloat(updatedItem.unitPrice)
            : updatedItem.unitPrice;

        return {
          ...updatedItem,
          totalPrice: quantity * unitPrice,
        };
      })
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: generateId(),
        name: "",
        quantity: "",
        unitPrice: "",
        totalPrice: 0,
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    name,
    setName,
    date,
    setDate,
    items,
    updateItem,
    addItem,
    removeItem,
  };
};
