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
      quantity: "",
      unitPrice: "",
      totalPrice: 0,
    },
  ]);

  const updateItem = (id: string, field: keyof OrderItem, value: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const updated = {
          ...item,
          [field]: value,
        };

        const quantityNum = parseFloat(updated.quantity) || 0;
        const unitPriceNum = parseFloat(updated.unitPrice) || 0;

        return {
          ...updated,
          totalPrice: quantityNum * unitPriceNum,
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

  const resetForm = () => {
    setName("");
    setDate("");
    setItems([
      {
        id: generateId(),
        name: "",
        quantity: "",
        unitPrice: "",
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
