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
    <Card title={"TKIT Todo"} link={"https://tkitresumebuilder.netlify.app/"}/>
      <Card title={"TKIT Chat"}  link={"https://tkitchat.netlify.app/"}/>
      <Card title={"TKIT Resume Builder"}  link={"https://tkitresumebuilder.netlify.app/"}/>
      <Card title={"TKIT Restaurant"}  link={"https://tkitchat.netlify.app/"}/>  
    </div>
    <button> View All <BsArrowRight/></button>
  </div>
  )
}

export default Products