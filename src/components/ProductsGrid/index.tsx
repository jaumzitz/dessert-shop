import CardItem from "../../components/CardItem";
import data from '../../db/data.json';
import styles from './ProductsGrid.module.css'
import { Dessert } from "../../types/Dessert";

export default function ProductsGrid() {
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

                        return <CardItem item={dessert}></CardItem>
                    })}
                </section>
            </div>
        </>
    )
}