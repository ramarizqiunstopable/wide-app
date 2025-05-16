// src/features/order/detail-order/components/OrderDetail.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import type { Order } from "@/types/order";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  order: Order;
};

export const OrderDetail = ({ order }: Props) => {
  const totalHarga = order.items.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detail Pesanan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Nama Pemesan:</p>
          <p className="text-base font-medium">{order.name}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Tanggal:</p>
          <p className="text-base font-medium">
            {format(new Date(order.date), "dd MMM yyyy")}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Jumlah Item:</p>
          <p className="text-base font-medium">{order.items.length} item</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Harga:</p>
          <p className="text-base font-medium">
            Rp {totalHarga.toLocaleString()}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-2">Rincian Item:</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Produk</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Harga Satuan</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>Rp {item.unitPrice.toLocaleString()}</TableCell>
                <TableCell className="text-right font-semibold">
                  Rp {item.totalPrice.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
