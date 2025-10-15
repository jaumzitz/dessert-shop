import CardItem from "../../components/CardItem";
import data from '../../db/data.json';
import styles from './ProductsGrid.module.css'
import { Dessert } from "../../types/Dessert";
import { Cart, CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export default function ProductsGrid() {

    const cart: Cart =  useContext(CartContext).value

    


    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>

                <h1>Sobremesas</h1>
                <section className={styles.itemsGrid}>
                    {data.map(item => {

                        let dessert: Dessert = {
                            image: item.image.desktop,
                            category: item.category,
                            name: item.name,
                            price: item.price
                        }

                        return <CardItem key={dessert.name} item={dessert}></CardItem>
                    })}
                </section>
            </div>
        </>
    )
}