export default [
  {
    title: "Home",
    to: { name: "root" },
    icon: { icon: "ri-home-smile-2-line" },
  },
  {
    title: "Product",
    icon: { icon: "ri-file-text-line" },
    children: [
      {
        title: "Product",
        to: { name: "product" },
      },
      {
        title: "Change ID/SKU",
        to: { name: "product-change-id-sku" },
      },
    ],
  },
];
