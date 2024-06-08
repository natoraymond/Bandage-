import React from 'react'
import BestServiceCSS from '../../Components/BestService/BestService.module.css'


const BestService = () => {
  return (
    <div className={BestServiceCSS.container}>
        <div className={BestServiceCSS.section} >
            <h2>Featured Products</h2>
            <h3>THE BEST SERVICES</h3>
            <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className={BestServiceCSS.section2}>
            <div className={BestServiceCSS.row1} >
                <img src="./images/services/book3.png" alt="" />
                <h3>Easy Wins</h3>
                <p>Get your best looking smile<br></br> now!</p>
            </div>
            <div className={BestServiceCSS.row2} >
                <img src="./images/services/book.png" alt="" />
                <h3>Concrete</h3>
                <p> Defalcate is most focused in<br></br>helping you discover your most<br></br> beautiful smile</p>
            </div>
            <div className={BestServiceCSS.row3} >
                <img src="./images/services/signal.png" alt="" />
                <h3>Hack Growth</h3>
                <p>Overcame any hurdle or any <br></br>other problem.</p>
            </div>
        </div>
    </div>
  )
}

export default BestService