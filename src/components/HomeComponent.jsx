import React from 'react'

//import assets
import './styles/home_styles.css'

function HomeComponent() {
  return (
    <>
    <div className="container-fluid px-5 py-3">
        <h1 className="text-center">
            Our Story
        </h1>
        <div className="">
          We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever! Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
        </div>
        <div className="row mt-4 mb-2">
            <div className="col-6">
                <img className='content-img' src="https://image.shutterstock.com/z/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg" />
            </div>
            <div className="col-6 align-self-center">
              <h2> Ingredients </h2>
                <p>
                  We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It makes the kitchen a better place.
                </p>
            </div>    
        </div>
        <div className="row mb-2">
            <div className="col-6 align-self-center">
              <h2> Our Chefs </h2>
                <p>
                  They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.
                </p>
            </div>
            <div className="col-6">
                <img className='content-img' src="https://thumb1.shutterstock.com/display_pic_with_logo/2982127/437116033/stock-photo-happy-chef-437116033.jpg" />
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-6">
                <img className='content-img' src="https://thumb9.shutterstock.com/display_pic_with_logo/175989610/669255388/stock-photo-vintage-analog-kitchen-countdown-timer-with-classNameical-clock-face-and-red-remaining-time-display-669255388.jpg" />
            </div>
            <div className="col-6 align-self-center">
              <h2> 45 min delivery</h2>
            </div>
        </div>
        </div>
    </>
  )
}

export default HomeComponent
