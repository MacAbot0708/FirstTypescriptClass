
// assignment2w2.ts

// Part (c): Import the interface from type2.ts
import { LaceProduct } from "./type2";

// Part (a) & (c): Array of 25 products in ascending order using type annotation (: LaceProduct[])
export const laceProducts: LaceProduct[] = [
  { id: 1, title: "Swiss Voile Lace - Royal Blue 5 Yards", price: 85.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/1", inStock: true },
  { id: 2, title: "French Lace - Magenta & Gold 5 Yards", price: 120.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/2", inStock: true },
  { id: 3, title: "Dry Lace - White Classic 5 Yards", price: 65.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/3", inStock: true },
  { id: 4, title: "Organza Lace - Emerald Green 5 Yards", price: 95.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/4", inStock: true },
  { id: 5, title: "Heavy Net Lace - Coral 5 Yards", price: 110.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/5", inStock: false },
  { id: 6, title: "Cord Lace - Sky Blue 5 Yards", price: 75.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/6", inStock: true },
  { id: 7, title: "Guipure Lace - Yellow Ochre 5 Yards", price: 130.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/7", inStock: true },
  { id: 8, title: "Polished Voile Lace - Teal 5 Yards", price: 90.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/8", inStock: true },
  { id: 9, title: "Sequined French Lace - Black & Silver 5 Yards", price: 150.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/9", inStock: true },
  { id: 10, title: "Tulle Lace - Wine Red 5 Yards", price: 105.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/10", inStock: true },
  { id: 11, title: "Cotton Dry Lace - Peach 5 Yards", price: 70.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/11", inStock: true },
  { id: 12, title: "Bazin Lace Combo - Purple 5 Yards", price: 140.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/12", inStock: false },
  { id: 13, title: "Beaded Voile Lace - Champagne Gold 5 Yards", price: 160.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/13", inStock: true },
  { id: 14, title: "Velvet Lace - Navy Blue 5 Yards", price: 125.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/14", inStock: true },
  { id: 15, title: "Handcut Organza Lace - Lilac 5 Yards", price: 115.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/15", inStock: true },
  { id: 16, title: "Brocade Lace - Mint Green 5 Yards", price: 80.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/16", inStock: true },
  { id: 17, title: "Metallic French Lace - Bronze 5 Yards", price: 145.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/17", inStock: true },
  { id: 18, title: "Super Voile Lace - Turquoise 5 Yards", price: 100.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/18", inStock: true },
  { id: 19, title: "Guipure Cord Lace - Soft Pink 5 Yards", price: 135.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/19", inStock: false },
  { id: 20, title: "Laser Cut Dry Lace - Olive 5 Yards", price: 85.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/20", inStock: true },
  { id: 21, title: "Appliqué Net Lace - Rose Gold 5 Yards", price: 155.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/21", inStock: true },
  { id: 22, title: "Chiffon Lace - Cream 5 Yards", price: 75.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/22", inStock: true },
  { id: 23, title: "Rhinestone Voile Lace - Deep Red 5 Yards", price: 170.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/23", inStock: true },
  { id: 24, title: "3D Floral Lace - Violet 5 Yards", price: 180.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/24", inStock: true },
  { id: 25, title: "Luxury Swiss Lace - Pure White 5 Yards", price: 195.00, currency: "GBP", url: "https://www.empiretextiles.com/products/laces/25", inStock: true }
];

// Display total count and verifying content in console
console.log(`Loaded ${laceProducts.length} lace products successfully:`, laceProducts);