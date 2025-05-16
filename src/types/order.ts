export interface OrderItem {
  id: string;
  name: string;
  quantity: string;
  unitPrice: string;
  totalPrice: number;
}

export interface Order {
  name: string;
  id: string;
  date: string;
  items: OrderItem[];
}
