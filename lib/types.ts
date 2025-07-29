export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: string
  name: string
  phone: string
  isAuthenticated: boolean
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "completed"
  orderNumber: string
}

export interface DetectedItem {
  id: string
  name: string
  price: number
  quantity: number
  detectedAt: Date
}

export interface VendingSession {
  id: string
  userId: string
  startTime: Date
  endTime?: Date
  detectedItems: DetectedItem[]
  status: "active" | "processing" | "completed"
}
