import AddToCartBtn from '../Buttons/AddToCartBtn'
import styles from './CardItem.module.css'
import { Dessert } from '../../types/Dessert'

type CardItemProps = {
    item: Dessert
}


export default function CardItem({ item }: CardItemProps) {


    return (
        <>
            <div className={styles.container}>

                <div className={styles.imageContainer}>

                    <img src={item.image}></img>
                    <AddToCartBtn itemName={item.name}></AddToCartBtn>
                    
                </div>
                <div className={styles.itemInfo}>
                    <span className={styles.label}>{item.category}</span>
                    <span className={styles.title}>{item.name}</span>
                    <span className={styles.price}>R${item.price}</span>
                </div>
            </div>
        </>
    )
}