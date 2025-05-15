import { useState } from "react";
import type { OrderItem } from "@/types/order";

const generateId = () =>
  Date.now().toString() + Math.floor(Math.random() * 1000).toString();

export const useInputOrder = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState<OrderItem[]>([
    {
      id: generateId(),
      name: "",
      quantity: 1,
      unitPrice: 0,
      totalPrice: 0,
    },
  ]);

  const updateItem = (
    id: string,
    field: keyof OrderItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: field === "name" ? value : Number(value),
              totalPrice:
                field === "quantity"
                  ? Number(value) * item.unitPrice
                  : field === "unitPrice"
                  ? item.quantity * Number(value)
                  : item.totalPrice,
            }
          : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: generateId(),
        name: "",
        quantity: 1,
        unitPrice: 0,
        totalPrice: 0,
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const resetForm = () => {
    setName("");
    setDate("");
    setItems([
      {
        id: generateId(),
        name: "",
        quantity: 1,
        unitPrice: 0,
        totalPrice: 0,
      },
    ]);
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
    resetForm,
  };
};
