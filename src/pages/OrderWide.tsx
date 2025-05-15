import OrderPage from "@/features/order/input-order";
import ListOrderPage from "@/features/order/list-order";

export default function OrderWide() {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Auth Form */}
      <div className="w-full md:w-1/2">
        <OrderPage />
      </div>

      {/* Todo Item */}
      <div className="w-full ">
        <ListOrderPage />
      </div>
    </div>
  );
}
