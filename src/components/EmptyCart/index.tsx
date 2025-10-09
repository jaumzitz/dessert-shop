import styles from './EmptyCart.module.css'

export default function EmptyCart() {
    return (
        <>
            <div className={styles.content}>
                <img className={styles.emptyIcon} src="assets/images/illustration-empty-cart.svg"></img>
                <span>Os itens adicionados aparecerão aqui</span>
            </div>
        </>
    )
}