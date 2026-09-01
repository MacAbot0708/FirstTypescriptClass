
// type2.ts

// Part (b): Interface for an individual lace product item
export interface LaceProduct {
  id: number;
  title: string;
  price: number; // Price in GBP (£)
  currency: string;
  url: string;
  inStock: boolean;
}