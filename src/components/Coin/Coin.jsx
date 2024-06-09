import classes from './Coin.module.css'

export default function Coin({count, onClick}) {
    return (
        <section>
            <div className="container">
                <div className={classes.coin__wrapper}>
                    <h2 className={classes.coin__count}>Количество монет: {count}</h2>
                    <button className={classes.coin__button} onClick={onClick}>
                        <img className={classes.coin__img} srcSet='public/images/coin.png' alt="" />
                    </button>
                </div>
            </div>
        </section>
    )
}