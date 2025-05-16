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
import { useOrder } from "../../hooks/useOrder";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi"; // Import icon

export const TableListOrder = () => {
  const { orders, deleteOrder } = useOrder();

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
              <TableHead className="text-center">Aksi</TableHead>
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
                  <TableCell className="flex justify-center space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <FiEye size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    >
                      <FiEdit size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                      onClick={() => deleteOrder(order.id)}
                    >
                      <FiTrash2 size={16} />
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
