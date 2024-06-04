import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer (){
  return (
    <div className={style.footer}>
        <div className={style.foot_handle_content}>
            <h3>Bandage</h3>
            <div className={style.foot_social}>
                <img src="images/footer/facebook.png" alt="" />
                <img src="images/footer/instagram.png" alt="" />
                <img src="images/footer/twitter.png" alt="" />
            </div>
        </div>
        <div className={style.foot_features_container}>
            <div className={`${style.foot_txt1} ${style.foot_txt}`}>
                <h5>Company Info</h5>
                <Link to='#' className={style.link_title}>About Us</Link>
                <Link to='#' className={style.link_title}>Carrier</Link>
                <Link to='#' className={style.link_title}>We are hiring</Link>
                <Link to='#' className={style.link_title}>Blog</Link>
            </div>
            <div className={`${style.foot_txt2} ${style.foot_txt}`}>
                <h5>Legal</h5>
                <Link to='#' className={style.link_title}>About Us</Link>
                <Link to='#' className={style.link_title}>Carrier</Link>
                <Link to='#' className={style.link_title}>We are hiring</Link>
                <Link to='#' className={style.link_title}>Blog</Link>
            </div>
            <div className={`${style.foot_txt3} ${style.foot_txt}`}>
                <h5>Features</h5>
                <Link to='#' className={style.link_title}>Business Marketing</Link>
                <Link to='#' className={style.link_title}>User Analytic</Link>
                <Link to='#' className={style.link_title}>Live Chat</Link>
                <Link to='#' className={style.link_title}>Unlimited Support</Link>
            </div>
            <div className={`${style.foot_txt4} ${style.foot_txt}`}>
                <h5>Resources</h5>
                <Link to='#' className={style.link_title}>IOS & Android</Link>
                <Link to='#' className={style.link_title}>Watch a Demo</Link>
                <Link to='#' className={style.link_title}>Customers</Link>
                <Link to='#' className={style.link_title}>API</Link>
            </div>
            <div className={`${style.foot_txt5} ${style.foot_txt}`}>
                <h5>Get In Touch</h5>
                <form action="">
                    <input type="text" placeholder='Your Email'/>
                    <button >Subscribe</button>
                </form>
                <p>Lore imp sum dolor Amit</p>
            </div>
        </div>
        <div className={style.copyright_section}>
            <h6>Made With Love By Finland All Right Reserved </h6>
        </div>
    </div>
  )
}

export default Footer;


















// import React from 'react'
// import style from './Footer.module.css'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className={style.footer}>
//         <div className={style.foot_brand_section}>
//             {/* <h3>Bandage</h3> */}
//             <div className={style.foot_social}>
//                 <img src="images/footer/facebook.png" alt="" />
//                 <img src="images/footer/instagram.png" alt="" />
//                 <img src="images/footer/twitter.png" alt="" />
//             </div>
//         </div>
//         <div className={style.foot_features}>
//             <div className={`${style.foot_item1} ${style.foot_item}`}>
//                 <h5>Company Info</h5>
//                 <Link to='#'>About Us</Link>
//                 <Link to='#'>Carrier</Link>
//                 <Link to='#'>We are hiring</Link>
//                 <Link to='#'>Blog</Link>
//             </div>
//             <div className={`${style.foot_item2} ${style.foot_item}`}>
//                 <h5>Legal</h5>
//                 <Link to='#'>About Us</Link>
//                 <Link to='#'>Carrier</Link>
//                 <Link to='#'>We are hiring</Link>
//                 <Link to='#'>Blog</Link>
//             </div>
//             <div className={`${style.foot_item3} ${style.foot_item}`}>
//                 <h5>Features</h5>
//                 <Link to='#'>Business Marketing</Link>
//                 <Link to='#'>User Analytic</Link>
//                 <Link to='#'>Live Chat</Link>
//                 <Link to='#'>Unlimited Support</Link>
//             </div>
//             <div className={`${style.foot_item4} ${style.foot_item}`}>
//                 <h5>Resources</h5>
//                 <Link to='#'>IOS & Android</Link>
//                 <Link to='#'>Watch a Demo</Link>
//                 <Link to='#'>Customers</Link>
//                 <Link to='#'>API</Link>
//             </div>
//             <div className={`${style.foot_item5} ${style.foot_item}`}>
//                 <h5>Get In Touch</h5>
//                 <form action="">
//                     <input type="text" placeholder='Your Email'/>
//                     <button>Subscribe</button>
//                 </form>
//                 <p>Lore imp sum dolor Amit</p>
//             </div>
//         </div>
//         <div className={style.copyright_section}>
//             <h6>Made With Love By Finland All Right Reserved </h6>
//         </div>
//     </div>
//   )
// }

// export default Footer