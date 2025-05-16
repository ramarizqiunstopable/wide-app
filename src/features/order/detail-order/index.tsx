// src/features/order/detail-order/index.tsx
import { useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";
import { OrderDetail } from "./components/OrderDetail";

const OrderDetailPage = () => {
  const { id } = useParams();
  const { getOrderById } = useOrder();
  const order = getOrderById(id || "");

  if (!order) {
    return (
      <p className="text-center text-muted-foreground mt-8">
        Pesanan tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-6 px-4">
      <OrderDetail order={order} />
    </div>
  );
};

export default OrderDetailPage;
