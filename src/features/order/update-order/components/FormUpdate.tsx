// src/features/update-order/components/FormUpdate.tsx
import type { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useUpdate } from "../hooks/useUpdate";
import { useOrder } from "../../hooks/useOrder";
import type { Order } from "@/types/order";
import { useNavigate } from "react-router-dom";

const FormUpdate = ({ initial }: { initial: Order }) => {
  const {
    name,
    setName,
    date,
    setDate,
    items,
    updateItem,
    addItem,
    removeItem,
  } = useUpdate(initial);

  const { updateOrder } = useOrder();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const updatedOrder: Order = {
      ...initial,
      name,
      date,
      items,
    };
    navigate("/order");
    updateOrder(updatedOrder);
    alert("Order berhasil diupdate!");
  };

  const totalHarga = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 border rounded-xl shadow-sm bg-white"
    >
      <h2 className="text-2xl font-bold text-gray-800">Update Order</h2>

      <div className="space-y-2">
        <Label htmlFor="nama-order">Nama Order</Label>
        <Input
          id="nama-order"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contoh: Makanan Ringan"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tanggal-order">Tanggal Order</Label>
        <Input
          id="tanggal-order"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <Card
            key={item.id}
            className="p-4 space-y-2 shadow-sm border border-muted"
          >
            <p className="font-semibold text-muted-foreground">
              Item {index + 1}
            </p>

            <Input
              placeholder="Nama Item"
              value={item.name}
              onChange={(e) => updateItem(item.id, "name", e.target.value)}
              required
            />

            <Input
              type="number"
              placeholder="Jumlah"
              value={item.quantity || ""}
              onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
              min={0}
              required
            />

            <Input
              type="number"
              placeholder="Harga per unit"
              value={item.unitPrice || ""}
              onChange={(e) => updateItem(item.id, "unitPrice", e.target.value)}
              min={0}
              required
            />

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
        + Tambah Item
      </Button>

      <Card className="p-4 bg-emerald-200 rounded-xl">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-muted-foreground">
            Grandtotal:
          </p>
          <p className="text-xl font-bold text-primary">
            Rp {totalHarga.toLocaleString()}
          </p>
        </div>
      </Card>

      <div>
        <Button type="submit" className="w-full">
          Simpan Perubahan
        </Button>
      </div>
    </form>
  );
};

export default FormUpdate;
