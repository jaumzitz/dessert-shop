import { JSX, ReactNode, createContext, useState } from "react";
import { Dessert } from "../types/Dessert";

export type CartItem = {

    product: Dessert | null
    amount: number

}

export type Cart = {
    items: CartItem[]
    total: number
}

type CartContextType = {
    value: Cart,
    setValue: (newValue: Cart) => void
}

const emptyCart: Cart = {
    items: [],
    total: 0
}

export const CartContext: React.Context<CartContextType> = createContext<CartContextType>({ value: emptyCart, setValue: () => { } })

export function CartProvider({ children }: { children: JSX.Element }) {
    const [cart, setCart] = useState<Cart>(emptyCart)

    return <>
        <CartContext.Provider value={{ value: cart, setValue: setCart }}>
            {children}
        </CartContext.Provider>
    </>
}