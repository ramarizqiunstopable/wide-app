import ListOrderPage from "../list-order";
import FormInputOrder from "./components/FormInputOrder";

const OrderPage = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <FormInputOrder />
      <ListOrderPage />
    </div>
  );
};

export default OrderPage;
