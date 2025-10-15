import styles from './ChangeAmountBtn.module.css'

export default function ChangeAmoundBtn() {
    return (
        <>
            <div className={styles.amountButtonContainer} >

                <button >
                    <img src="/assets/images/icon-decrement-quantity.svg"></img>
                </button>
                1
                <button>
                    <img  src="/assets/images/icon-increment-quantity.svg"></img>

                </button>
            </div>
        </>
    )
}