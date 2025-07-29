import type { Product, Order } from "./types"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Coca-Cola Original",
    price: 12.0,
    image: "/images/products/coca-cola-original.png",
    category: "Soda",
  },
  {
    id: "2",
    name: "Coca-Cola Zero Sugar",
    price: 12.0,
    image: "/images/products/coca-cola-zero.png",
    category: "Soda",
  },
  {
    id: "3",
    name: "Pepsi",
    price: 12.0,
    image: "/images/products/pepsi.png",
    category: "Soda",
  },
  {
    id: "4",
    name: "Schweppes Cream Soda",
    price: 12.0,
    image: "/images/products/schweppes-cream-soda.png",
    category: "Soda",
  },
  {
    id: "5",
    name: "Aquarius Sports Drink",
    price: 12.0,
    image: "/images/products/aquarius.png",
    category: "Sports Drink",
  },
  {
    id: "6",
    name: "H2O Water",
    price: 12.0,
    image: "/images/products/h2o-water.png",
    category: "Water",
  },
  {
    id: "7",
    name: "Schweppes Soda Water",
    price: 12.0,
    image: "/images/products/schweppes-soda-water.png",
    category: "Soda Water",
  },
  {
    id: "8",
    name: "Fanta Grape",
    price: 12.0,
    image: "/images/products/fanta-grape.png",
    category: "Soda",
  },
  {
    id: "9",
    name: "C.C. Lemon",
    price: 12.0,
    image: "/images/products/cc-lemon.png",
    category: "Citrus Drink",
  },
]

export const mockOrders: Order[] = [
  {
    id: "1",
    items: [
      { id: "1", name: "Coca Cola", price: 8.5, quantity: 2, category: "Soda", image: "/images/products/coca-cola-original.png" },
      { id: "2", name: "Pepsi", price: 8.0, quantity: 1, category: "Soda", image: "/images/products/pepsi.png" },
    ],
    total: 80.0,
    status: "paid",
    orderNumber: "1921418",
    location: "Lai Chi Kok D2",
    date: "13/12/2026 5:25pm",
  },
  {
    id: "2",
    items: [
      { id: "3", name: "Aquarius Sports Drink", price: 12.0, quantity: 1, category: "Sports Drink", image: "/images/products/aquarius.png" },
    ],
    total: 12.0,
    status: "checking_out",
    orderNumber: "1921419",
    location: "Lai Chi Kok D2",
    date: "13/12/2026 5:25pm",
    depositAmount: 200.0,
  },
  {
    id: "3",
    items: [
      { id: "4", name: "Schweppes Cream Soda", price: 12.0, quantity: 1, category: "Soda", image: "/images/products/schweppes-cream-soda.png" },
      { id: "5", name: "H2O Water", price: 12.0, quantity: 1, category: "Water", image: "/images/products/h2o-water.png" },
    ],
    total: 80.0,
    status: "outstanding",
    orderNumber: "1921420",
    location: "Lai Chi Kok D2",
    date: "13/12/2026 5:25pm",
  },
]
