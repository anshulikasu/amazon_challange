import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
  return( 
  <div className="home">
      <div className="home__container">
          <img className="home__image"
          src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
          alt=""/>
      </div>
      <div className="home__row">
         <Product id="67890" title="The apple iphone"
         image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg"
         price={19.99}
         rating={5}/>
         {/**product */}
         <Product id="0987" title="Fortnite 7 Llama Loot Plush"
         image="https://m.media-amazon.com/images/I/71KUNPdl7dL._AC_SL1500_.jpg"
         price={19.99}
         rating={5}/>
      </div>
      <div className="home__row">
         
         <Product  id="8765" title="Amazon Basics Kids Unicorns & Rainbows Patterned Throw Blanket with Stuffed Animal Unicorn"
         image="https://m.media-amazon.com/images/I/81Fv47M5u5L._AC_SL1500_.jpg"
         price={19.99}
         rating={4} />
         <Product  id="5678" title="H&P Smart Watch 2022 with Temperature and Heart Rate Monitor,Fitness Tracker with with Blood Pressure, Blood Oxygen Monitor for Android and iOS Phones"
         image="https://m.media-amazon.com/images/I/61RXlV7kY-L._AC_SL1500_.jpg"
         price={19.99}
         rating={3} />
         <Product id="4321" title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz"
         image="https://m.media-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg"
         price={19.99}
         rating={5}   />         
          

      </div>
      <div className="home__row">
        
          
        <Product
        id= "1234"
         title="The apple iphone"
         image="https://m.media-amazon.com/images/I/61rjVVeRL+L._AC_SL1500_.jpg"
         price={19.99}
         rating={4}  />

      </div>

  </div>
  );
}

export default Home;
