import type { Category } from "@/types/category";

export interface SearchQuery {
  pageIndex: number;
  pageSize: number;
  searchValue?: string;
  category?: string;
}

export interface Product {
  id: number;
  type: string;
  sku: string | null;
  name: string;
  published: number;
  isFeatured: number;
  visibilityInCatalog: string;
  shortDescription: string | null;
  description: string | null;
  dateSalePriceStarts: number | null;
  dateSalePriceEnds: number | null;
  taxStatus: string;
  taxClass: string | null;
  inStock: number;
  stock: number | null;
  lowStockAmount: number | null;
  backordersAllowed: number | null;
  soldIndividually: number;
  weight: number | null;
  length: number | null;
  width: number | null;
  height: number | null;
  allowCustomerReviews: number;
  purchaseNote: string | null;
  salePrice: number | null;
  regularPrice: number | null;
  categories: Category[];
  tags: string | null;
  shippingClass: string | null;
  images: string | null;
  downloadLimit: number | null;
  downloadExpiryDays: number | null;
  parent: string | null;
  groupedProducts: string | null;
  upsells: string | null;
  crossSells: string | null;
  externalUrl: string | null;
  buttonText: string | null;
  position: number | null;
  attribute1Name: string | null;
  attribute1Value: string | null;
  attribute1Visible: number | null;
  attribute1Global: number | null;
  attribute1Default: string | null;
  attribute2Name: string | null;
  attribute2Value: string | null;
  attribute2Visible: number | null;
  attribute2Global: number | null;
  attribute2Default: string | null;
  attribute3Name: string | null;
  attribute3Value: string | null;
  attribute3Visible: number | null;
  attribute3Global: number | null;
  attribute3Default: string | null;
  attribute4Name: string | null;
  attribute4Value: string | null;
  attribute4Visible: number | null;
  attribute4Global: number | null;
  attribute4Default: string | null;
  attribute5Name: string | null;
  attribute5Value: string | null;
  attribute5Visible: number | null;
  attribute5Global: number | null;
  attribute5Default: string | null;
}

export interface ProductForm extends Omit<Product, "id" | "categories"> {
  categories: {
    id: number;
  }[];
}

export interface ProductCategory {
  name: string;
  quantity: number;
}
