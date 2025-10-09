
import { JSX } from "react"
import Checkout from "../components/Checkout"
import ProductsGrid from "../components/ProductsGrid"
import styles from "./Home.module.css"
import { Dessert } from "../types/Dessert"
import data from '../db/data.json';


export default function Home(): JSX.Element {


    return (
        <>
            <div className={styles.twoColumnLayout}>

                <ProductsGrid />
                <Checkout />
                
            </div>
        </>
    )
}