// src/features/update-order/index.tsx
import { useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";
import FormUpdate from "./components/FormUpdate";

const UpdateOrderPage = () => {
  const { id } = useParams(); // Ambil ID dari path parameter
  const { getOrderById } = useOrder();

  const order = id ? getOrderById(id) : null;

  if (!order) {
    return <p className="text-red-500 p-4">Order tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <FormUpdate initial={order} />
    </div>
  );
};

export default UpdateOrderPage;
