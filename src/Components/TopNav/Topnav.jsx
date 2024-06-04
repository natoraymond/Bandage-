import React from 'react'
import styleA from '../TopNav/Topnav.module.css'


const Topnav = () => {
  return (
    <div className={styleA.contain}>
        <div className={styleA.topsideA}>
          <div className={styleA.mostphone}>
            <img src="/images/navbartop-pic/phone.png" alt="" />
            <div className={styleA.phonNumber}>(225) 555-0118</div>
          </div>

          <div className={styleA.emailside}>
          <img src="/images/navbartop-pic/email.png" alt="" />
            <div className={styleA.emailText}>michelle.rivera@example.com</div>
          </div>

        </div>

        {/* centre section */}
        <div className={styleA.topsideB}>Follow Us  and get a chance to win 80% off</div>
       
         {/* right icone */}
        <div className={styleA.topsideC}>
          <div className={styleA.follow}>Follow Us  :</div>
          <div className={styleA.topicon}>
          <img src="/images/navbartop-pic/instagram.png" alt="" />
            <img src="/images/navbartop-pic/youtube.png" alt="" />
            <img src="/images/navbartop-pic/facebook.png" alt="" />
            <img src="/images/navbartop-pic/twitter.png" alt="" />
          </div>
        </div>

    </div>
  )
}

export default Topnav