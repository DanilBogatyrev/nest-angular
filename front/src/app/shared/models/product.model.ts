export interface Product {
  id: number;
  title: string;
  description: string;
  vendor_code: string;
  image: string;
  category_id: number;
  price: number;
  number: number;
  quantity?: number;
}
