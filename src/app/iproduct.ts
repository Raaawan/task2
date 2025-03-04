import { Irating } from "./irating"

export interface Iproduct {
    id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Irating
}
