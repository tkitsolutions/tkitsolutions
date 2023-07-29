import React from 'react'
import Card from './Card'
import {BsArrowRight} from 'react-icons/bs'

const Products = () => {
  return (
    <div className="section">
    <h1>
      Our <span>Products</span>
    </h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. standard dummy text ever since the 1500s, when an unknown.
    </p>
    <div className="cards">
    <Card title={"TKIT Todo"}/>
      <Card title={"TKIT Chat"}/>
      <Card title={"TKIT Resume Builder"}/>
      <Card title={"TKIT Restaurant"}/>  
    </div>
    <button> View All <BsArrowRight/></button>
  </div>
  )
}

export default Products