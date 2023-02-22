import React,{useState} from 'react'
import './style.css'
import Hero from './Hero'
import Card from './Card'
import CardData from './CardApi'
import Product from './Product'
import ProductData from './ProductApi'
import About from './About'
import Testimonial from './Testimonial'
import Footer from './Footer'

const Header = () => {
  const [menu, setMenu] = useState(ProductData);
console.log(menu)
  const [state, setstate] = useState(CardData);
  return (
    <>
      <div className="first-con d-flex">
      <div className="left">
      <p>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-pinterest"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-solid fa-wifi"></i>
      </p>
      </div>
      <div className="right ms-auto ">
      <p>FREE DELIVERY OVER $100 ON ALL PRODUCTS</p>
      </div>
      </div>

      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/img/blogo.webp" className='logo' alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Account</a>
        </li>
      <div className="btn">
      <i class="fa-sharp fa-solid fa-cart-shopping"></i><span>0</span>
      </div>  
      </ul>
      
    </div>
  </div>
</nav>
<Hero />
<Card state={state}/>
<Product menu={menu} />
<About  />
<Testimonial />
<Footer />
    </>
  )
}

export default Header
