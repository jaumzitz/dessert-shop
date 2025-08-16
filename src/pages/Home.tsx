
import Checkout from "../components/Checkout"
import ProductsGrid from "../components/ProductsGrid"
import styles from "./Home.module.css"


export default function Home() {
    return (
        <>
            <div className={styles.twoColumnLayout}>

                <ProductsGrid />
                <Checkout />
                
            </div>
        </>
    )
}