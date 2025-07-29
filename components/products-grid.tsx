"use client"

import Image from "next/image"
import type { Product } from "@/lib/types"
import { ProductCard } from "./product-card"

interface ProductsGridProps {
  products: Product[]
  className?: string
}

export function ProductsGrid({ products, className = "" }: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <Image
          src="/images/productlist-empty.png"
          alt="No products available"
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
} 