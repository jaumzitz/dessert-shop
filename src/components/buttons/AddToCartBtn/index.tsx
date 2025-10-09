import { useContext, useState } from "react"
import styles from "./AddToCartBtn.module.css"
import { Cart, CartContext, CartItem } from "../../../contexts/CartContext"
import { Dessert } from "../../../types/Dessert";



export default function AddToCartBtn({ itemName }: { itemName: string }) {

    const cart: Cart = useContext(CartContext).value
    const setCart = useContext(CartContext).setValue

    

    //verificar se o item está no carrinho
    function findCartItem(itemName: string): CartItem | undefined {

        if (cart.items) {
            const foundItem: CartItem | undefined = cart.items?.find((item) => item.dessert?.name === itemName)
            return foundItem
        }

        return undefined
    }


    // se estiver, mostra o botão de +/-
    // se não estiver, mostra o botão de +por na sacola
    
    function handleAddToCart() {

        const itemInCart: CartItem | undefined = findCartItem(itemName)
        const updatedCart: Cart = cart

        if (!itemInCart) {
           
           
        }
        return //const updatedCart: Cart = cartItems.push
    }

    return (
        <>
            <div className={styles.buttonContainer} >

                <button onClick={handleAddToCart}>
                    <img src="/assets/images/icon-add-to-cart.svg"></img>
                    Por na sacola
                </button>
            </div>
        </>
    )
}