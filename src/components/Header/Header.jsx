import { useState } from 'react'
import classes from './Header.module.css'

export default function Header({userData}) {

  return (
    <header className={classes.header}>
        <div className="container">
            <div className={classes.header__wrapper}>
                <a className='logo' href='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNvarltylYJMVRTeatdlV2Ii8U6jbYinTBgFp6yek8z2CeizPK'>
                    Spermcoin
                </a>
                <p className={classes.header__profit}>Прибыль за тап <br /> 
                    <span className={classes.header__profit_num}>
                        <img srcSet="public/images/coin.png" alt="" />
                         +{userData?.countToTap}
                    </span>
                </p>
                <strong className={classes.header__user_info}>
                    <p>{ userData == undefined ? 'Гость' : userData?.fullName }</p>
                </strong>
            </div>
        </div>
    </header>
  )
}
