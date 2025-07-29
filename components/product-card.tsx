"use client"

import Image from "next/image"
import type { Product } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4 bg-gray-50 rounded-md overflow-hidden min-w-[60px] min-h-[60px]">
          <Image
            src={product.image || "/images/freshup-logo.png"}
            alt={product.name}
            fill
            className={product.image ? "object-cover" : "object-contain"}
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-medium text-sm">{product.name}</h3>
          <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  )
}
