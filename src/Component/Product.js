import React from 'react'

const Product = ({menu}) => {
  
  return (
    <>
      <div className="product-container">
      <h6>TELLUS LUCTUS NEC ULLAMCORPER MATTIS PULVINAR DAPIBUS LEO</h6>
      <h1>BACKPACKS FOR EVERYTHING</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {menu.map((curElem,index)=>{
        return(
            <>
            <div class="col">
            <div class="card p">
              <img src={curElem.img} className='img1' alt="..." />
              <div class="card-body">
                <h5 class="card-title">{curElem.title}</h5>
                <p class="card-text">{curElem.name}</p>
                <p className='card-text pr'>{curElem.price}</p>
                <h5 class="card-title">{curElem.rating}</h5>
              </div>
              <div className="func">
              <button>Add To Cart</button>
              </div>
            </div>
          </div>
            </>
        )
      })}
      </div>
    </>
  )
}

export default Product
