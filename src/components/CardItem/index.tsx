import AddToCartBtn from '../Buttons/AddToCartBtn'
import styles from './CardItem.module.css'
import { Dessert } from '../../types/Dessert'
import ChangeAmoundBtn from '../Buttons/ChangeAmountBtn'
import { useContext } from 'react'
import { Cart, CartContext, CartItem } from '../../contexts/CartContext'

type CardItemProps = {
    item: Dessert
}


export default function CardItem({ item }: CardItemProps) {

    const cart: Cart = useContext(CartContext).value

    const isInCart: boolean = cart.items.some(cartItem => cartItem.product?.name === item.name);





    return (
        <>
            <div className={styles.container}>

                <div className={styles.imageContainer}>

                    <img src={item.image}></img>



                    {isInCart ? <ChangeAmoundBtn /> : <AddToCartBtn item={item}></AddToCartBtn>}



                </div>
                <div className={styles.itemInfo}>
                    <span className={styles.label}>{item.category}</span>
                    <span className={styles.title}>{item.name}</span>
                    <span className={styles.price}>R${item.price.toLocaleString('pt-BR')}</span>
                </div>
            </div>
        </>
    )
}