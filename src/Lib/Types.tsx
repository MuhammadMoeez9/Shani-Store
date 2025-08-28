export interface Product {
  id: number;
  title: string;
  price: number;
  image: string[];
  category: string;
  description: string;
  stock: {
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
    XXL: number;
  };
}
