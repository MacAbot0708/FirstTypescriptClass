// assignment1w2.ts

// Part (c): Import the interface from types.ts
import { NavigationItem } from "./types";

// Part (a) & (c): Construct the object array using TypeScript type annotation (: NavigationItem[])
export const navigationItems: NavigationItem[] = [
  {
    id: 1,
    name: "Laces",
    url: "https://www.empiretextiles.com/laces",
    hasSubmenu: true
  },
  {
    id: 2,
    name: "Wax Prints",
    url: "https://www.empiretextiles.com/wax-prints",
    hasSubmenu: true
  },
  {
    id: 3,
    name: "Shoes & Bags",
    url: "https://www.empiretextiles.com/shoes-bags",
    hasSubmenu: true
  }
];

// Log the object array to verify in console
console.log("Empire Textiles Navigation Items:", navigationItems);
