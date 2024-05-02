export type Order = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
};

export type Product = {
  id: string;
  category: string;
  name: string;
  poster: string;
  price: number;
};
