import type { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useInputOrder } from "../hooks/useInputOrder";
import { useOrder } from "../../hooks/useOrder";
import type { Order } from "@/types/order";

const FormInputOrder = () => {
  const {
    name,
    setName,
    date,
    setDate,
    items,
    updateItem,
    addItem,
    removeItem,
    resetForm,
  } = useInputOrder();

  const { addOrder } = useOrder();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newOrder: Order = {
      id: Date.now().toString(),
      name,
      date,
      items,
    };

    addOrder(newOrder);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 border rounded-md">
      <h2 className="text-2xl font-semibold">Tambah Order</h2>

      <div className="space-y-2">
        <Label>Nama Order</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contoh: Makanan Ringan"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Tanggal Order</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={item.id} className="p-4 space-y-2">
            <p className="font-medium">Item {index + 1}</p>
            <Input
              placeholder="Nama Item"
              value={item.name}
              onChange={(e) => updateItem(item.id, "name", e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Jumlah"
              value={item.quantity}
              onChange={(e) =>
                updateItem(item.id, "quantity", Number(e.target.value))
              }
              min={1}
              required
            />
            <Input
              type="number"
              placeholder="Harga per unit"
              value={item.unitPrice}
              onChange={(e) =>
                updateItem(item.id, "unitPrice", Number(e.target.value))
              }
              min={0}
              required
            />
            <p>Total Harga: Rp {item.totalPrice.toLocaleString()}</p>
            {items.length > 1 && (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => removeItem(item.id)}
              >
                Hapus Item
              </Button>
            )}
          </Card>
        ))}
      </div>

      <Button type="button" variant="outline" onClick={addItem}>
        Tambah Item
      </Button>

      <div>
        <Button type="submit" className="w-full">
          Simpan Order
        </Button>
      </div>
    </form>
  );
};

export default FormInputOrder;
