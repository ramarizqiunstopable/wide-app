import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useListOrder } from "../hooks/useListOrder";

export const TableListOrder = () => {
  const { orders } = useListOrder();
  console.log(orders);

  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Daftar Pesanan</h2>
      {orders.length === 0 ? (
        <p className="text-muted-foreground">Belum ada pesanan.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Tanggal</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Jumlah Item</TableHead>
              <TableHead>Total Harga</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const totalHarga = order.items.reduce(
                (sum, item) => sum + item.totalPrice,
                0
              );

              return (
                <TableRow key={order.id}>
                  <TableCell>
                    {format(new Date(order.date), "dd MMM yyyy")}
                  </TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.items.length} item</TableCell>
                  <TableCell>Rp {totalHarga.toLocaleString()}</TableCell>
                  <TableCell className="space-x-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
