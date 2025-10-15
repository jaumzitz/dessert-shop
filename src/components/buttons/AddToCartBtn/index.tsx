import { useContext, useState } from "react"
import styles from "./AddToCartBtn.module.css"
import { Cart, CartContext, CartItem } from "../../../contexts/CartContext"
import { Dessert } from "../../../types/Dessert";



export default function AddToCartBtn({ item }: { item: Dessert }) {

    const cart: Cart = useContext(CartContext).value
    const setCart = useContext(CartContext).setValue



    //verificar se o item está no carrinho
    function findCartItem(itemName: string): CartItem | undefined {


        if (cart.items) {
            const foundItem: CartItem | undefined = cart.items?.find((item) => item.product?.name === itemName)

            return foundItem
        }

        return undefined
    }


    // se estiver, mostra o botão de +/-
    // se não estiver, mostra o botão de +por na sacola

    function handleAddToCart() {

        const itemInCart: CartItem | undefined = findCartItem(item.name)
        let updatedCart: Cart = cart

        //se o carrinho está vazio
        if (cart.items.length === 0) {

            updatedCart.items.push({ product: item, amount: 1 })
            updatedCart.total += item.price
            setCart(updatedCart)
            console.log(updatedCart)

            return
        }


        //se o item que está sendo adicionado ainda não está no carrinho
        if (!itemInCart) {
            updatedCart.items.push({ product: item, amount: 1 })
            updatedCart.total += item.price
            setCart(updatedCart)
            console.log(updatedCart)
            return
        }

        //Se o item já está no carrinho...
        if (itemInCart && itemInCart.product) {

            const newAmount: number = itemInCart.amount++
            const newTotal: number = cart.total + itemInCart.product?.price


            //percorre o carrinho até achar o item que precisa ser incrementado
            updatedCart.items.map((item: CartItem) => {

                if (item === itemInCart) {
                    return { ...itemInCart, amount: newAmount } //incrementa +1 unidade
                } else {
                    return itemInCart
                }

            })

            updatedCart.total = newTotal //define o novo total do carrinho

            setCart(updatedCart)

        }

        console.log(updatedCart)
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