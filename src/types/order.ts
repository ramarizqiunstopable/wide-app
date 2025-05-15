export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  name: string;
  id: string;
  date: string;
  items: OrderItem[];
}
