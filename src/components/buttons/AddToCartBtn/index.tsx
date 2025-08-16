import styles from "./AddToCartBtn.module.css"

export default function AddToCartBtn() {
    return (
        <>
        <div className={styles.buttonContainer} >

            <button >
                <img src="/assets/images/icon-add-to-cart.svg"></img>
                Por na sacola
            </button>
        </div>
        </>
    )
}