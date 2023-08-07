import React from 'react'
import Card from './Card'
import {BsArrowRight} from 'react-icons/bs'

const Products = () => {
  return (
    <div className="productsContainer">
            <div className="products">

                <div className="heading">
                    <h1>
                      Our <span>Latest Products</span>

                    </h1>

                    <button>
                      See All 
                      <BsArrowRight/>
                      </button>
                </div>

                <div className="productList">

                <div><img   src={require('../assets/images/p1.png')}/></div>
                <div><img   src={require('../assets/images/p2.png')}/></div>
                <div><img   src={require('../assets/images/p3.png')}/></div>
                <div><img   src={require('../assets/images/p4.png')}/></div>
                </div>            
            </div>
    </div>
  )
}

export default Products