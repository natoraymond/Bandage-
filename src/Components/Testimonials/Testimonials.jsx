import React from 'react'
import TestimonialsCss from '../../Components/Testimonials/Testimonials.module.css'

 
const Testimonials = () => {
  
  return (
    <div className={TestimonialsCss.container} >
      <div className={TestimonialsCss.right}>
        <h3>What they say about us</h3>
          <img src="./images/parts/user1.png" alt="" />
          <img src="./images/star/stars.png" alt="" />
          <h6>Slate helps you see how many more days you need to work to 
           reach your financial goal.</h6>
          <div className={TestimonialsCss.name}>Regina Miles</div>
          <div className={TestimonialsCss.discription}>Designer</div>
      </div>
      <div className={TestimonialsCss.left}>
        <img src="./images/parts/part1.png" alt="" />
        <img src="./images/parts/part2.png" alt="" />
        <img src="./images/parts/part3.png" alt="" />
        <img src="./images/parts/part4.png" alt="" />
        <img src="./images/parts/part5.png" alt="" />
        <img src="./images/parts/part6.png" alt="" />
        <img src="./images/parts/part7.png" alt="" />
        <img src="./images/parts/part8.png" alt="" />
        <img src="./images/parts/part9.png" alt="" />
      </div>

    </div>
  );
}

export default Testimonials;