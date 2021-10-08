export interface CartToSend {
  mail: string;
  cart: Cart[];
}

interface Cart {
  id: number;
  quantity: number;
}
