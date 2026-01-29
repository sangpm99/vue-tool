import type { SelectOptions } from "@/types";

export const pageIndex: number = 1;
export const pageSize: number = 20;
export const pageSizeOption: number = 200;
export const pageSizeOptions: number[] = [20, 50, 100];
export const totalVisible: number = 4;

export const colorsWarning = [
  "#F44336",
  "#FFC107",
  "#FF9800",
  "#F9A825",
  "#F9A825",
  "#795548",
  "#DD2C00",
];

export const colors = [
  "#4CAF50",
  "#3F51B5",
  "#009688",
  "#E91E63",
  "#8BC34A",
  "#CDDC39",
  "#03A9F4",
  "#F44336",
  "#9C27B0",
  "#673AB7",
  "#2196F3",
  "#00BCD4",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#607D8B",
];

export const booleanOptions: SelectOptions[] = [
  { title: "Yes", value: true },
  { title: "No", value: false },
];

export interface Product {
  name: string;
  url: string;
  image: string;
}
export const products: Product[] = [
  {
    name: "Acrylic Plaque",
    url: "/products/humanCustom/acrylicPlaque.csv",
    image: "/products/humanCustom/acrylicPlaque.webp",
  },
  {
    name: "Baseball Cap",
    url: "/products/humanCustom/baseballCap.csv",
    image: "/products/humanCustom/baseballCap.webp",
  },
  {
    name: "Beach Short",
    url: "/products/custom/Beach Short.csv",
    image: "/products/custom/beach-short.webp",
  },
  {
    name: "Bedding Set",
    url: "/products/humanCustom/beddingSet.csv",
    image: "/products/humanCustom/beddingSet.webp",
  },
  {
    name: "Blanket",
    url: "/products/humanCustom/blanket.csv",
    image: "/products/humanCustom/blanket.webp",
  },
  {
    name: "Canvas",
    url: "/products/humanCustom/canvas.csv",
    image: "/products/humanCustom/canvas.webp",
  },
  {
    name: "Clutch Purse",
    url: "/products/humanCustom/clutchPurse.csv",
    image: "/products/humanCustom/clutchPurse.webp",
  },
  {
    name: "Doormat",
    url: "/products/humanCustom/doormat.csv",
    image: "/products/humanCustom/doormat.webp",
  },
  {
    name: "Drinkware",
    url: "/products/humanCustom/drinkware.csv",
    image: "/products/humanCustom/drinkware.webp",
  },
  {
    name: "Drinkware 2",
    url: "/products/humanCustom/drinkware2.csv",
    image: "/products/humanCustom/drinkware2.webp",
  },
  {
    name: "Hoodie",
    url: "/products/humanCustom/hoodie.csv",
    image: "/products/humanCustom/hoodie.webp",
  },
  {
    name: "Jewelry",
    url: "/products/humanCustom/jewelry.csv",
    image: "/products/humanCustom/jewelry.webp",
  },
  {
    name: "Key Chain",
    url: "/products/humanCustom/keyChain.csv",
    image: "/products/humanCustom/keyChain.webp",
  },
  {
    name: "Leather Handbag",
    url: "/products/humanCustom/leatherHandbag.csv",
    image: "/products/humanCustom/leatherHandbag.webp",
  },
  {
    name: "Metal Sign",
    url: "/products/humanCustom/metalSign.csv",
    image: "/products/humanCustom/metalSign.webp",
  },
  {
    name: "Mug",
    url: "/products/humanCustom/mug.csv",
    image: "/products/humanCustom/mug.webp",
  },
  {
    name: "Mug 2",
    url: "/products/humanCustom/mug2.csv",
    image: "/products/humanCustom/mug2.webp",
  },
  {
    name: "Ornament",
    url: "/products/humanCustom/ornament.csv",
    image: "/products/humanCustom/ornament.webp",
  },
  {
    name: "Phone Case",
    url: "/products/humanCustom/phoneCase.csv",
    image: "/products/humanCustom/phoneCase.webp",
  },
  {
    name: "Phone Case 2",
    url: "/products/humanCustom/phoneCase2.csv",
    image: "/products/humanCustom/phoneCase2.webp",
  },
  {
    name: "Pillow",
    url: "/products/humanCustom/pillow.csv",
    image: "/products/humanCustom/pillow.webp",
  },
  {
    name: "Polo Shirt",
    url: "/products/custom/Polo Shirt.csv",
    image: "/products/custom/polo-shirt.webp",
  },
  {
    name: "Poster",
    url: "/products/humanCustom/poster.csv",
    image: "/products/humanCustom/poster.webp",
  },
  {
    name: "Shoes",
    url: "/products/custom/Shoes.csv",
    image: "/products/custom/Shoes.jpg",
  },
  // {
  //   name: "Shirt 1",
  //   url: "/products/humanCustom/shirt1.csv",
  //   image: "/products/humanCustom/shirt1.webp",
  // },
  // {
  //   name: "Shirt 2",
  //   url: "/products/humanCustom/shirt2.csv",
  //   image: "/products/humanCustom/shirt2.webp",
  // },
  // {
  //   name: "Sweater",
  //   url: "/products/humanCustom/sweater.csv",
  //   image: "/products/humanCustom/sweater.webp",
  // },
  // {
  //   name: "Sweatshirt",
  //   url: "/products/humanCustom/sweatShirt.csv",
  //   image: "/products/humanCustom/sweatShirt.webp",
  // },
  // {
  //   name: "Sweatshirt 2",
  //   url: "/products/custom/Sweatshirt2.csv",
  //   image: "/products/humanCustom/sweatShirt.webp",
  // },
  {
    name: "Sweatshirt 3",
    url: "/products/custom/Sweatshirt3.csv",
    image: "/products/humanCustom/sweatShirt.webp",
  },
  // {
  //   name: "T Shirt",
  //   url: "/products/custom/T-Shirt.csv",
  //   image: "/products/humanCustom/shirt2.webp",
  // },
  {
    name: "T-Shirt 2",
    url: "/products/custom/T-Shirt-2.csv",
    image: "/products/humanCustom/shirt2.webp",
  },
  {
    name: "T-Shirt 3",
    url: "/products/custom/T-Shirt-3.csv",
    image: "/products/humanCustom/shirt2.webp",
  },
  {
    name: "Tote Bag",
    url: "/products/humanCustom/toteBag.csv",
    image: "/products/humanCustom/toteBag.webp",
  },
  {
    name: "Tumbler",
    url: "/products/humanCustom/tumbler.csv",
    image: "/products/humanCustom/tumbler.webp",
  },
  {
    name: "Watch",
    url: "/products/custom/Watch.csv",
    image: "/products/custom/Watch.jpg",
  },
  {
    name: "Wood Sign",
    url: "/products/humanCustom/woodSign.csv",
    image: "/products/humanCustom/woodSign.webp",
  },
];

export const product2s: Product[] = [
  {
    name: "Shoes",
    url: "/product2s/Shoes.csv",
    image: "/product2s/Shoes.png",
  },
  {
    name: "T-shirt",
    url: "/product2s/T-shirt.csv",
    image: "/product2s/T-shirt.png",
  },
  {
    name: "Shirt",
    url: "/product2s/Shirt.csv",
    image: "/product2s/Shirt.png",
  },
  {
    name: "Shirt-2",
    url: "/product2s/Shirt-2.csv",
    image: "/product2s/Shirt-2.png",
  },
  {
    name: "Pants",
    url: "/product2s/Pants.csv",
    image: "/product2s/Pants.png",
  },
  {
    name: "Shorts",
    url: "/product2s/Shorts.csv",
    image: "/product2s/Shorts.png",
  },
  {
    name: "Sweatshirt",
    url: "/product2s/Sweatshirt.csv",
    image: "/product2s/Sweatshirt.png",
  },
];
