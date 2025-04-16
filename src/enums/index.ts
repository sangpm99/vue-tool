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
    name: "Pillow",
    url: "/products/humanCustom/pillow.csv",
    image: "/products/humanCustom/pillow.webp",
  },
  {
    name: "Poster",
    url: "/products/humanCustom/poster.csv",
    image: "/products/humanCustom/poster.webp",
  },
  {
    name: "Shirt 1",
    url: "/products/humanCustom/shirt1.csv",
    image: "/products/humanCustom/shirt1.webp",
  },
  {
    name: "Sweater",
    url: "/products/humanCustom/sweater.csv",
    image: "/products/humanCustom/sweater.webp",
  },
  {
    name: "Sweat Shirt",
    url: "/products/humanCustom/sweatShirt.csv",
    image: "/products/humanCustom/sweatShirt.webp",
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
    name: "Wood Sign",
    url: "/products/humanCustom/woodSign.csv",
    image: "/products/humanCustom/woodSign.webp",
  },
];
