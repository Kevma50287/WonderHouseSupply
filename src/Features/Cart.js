import React , { useState, useEffect }  from 'react'
import CartItem from "./CartItem"
export default function Cart({userData, itemData, cartDeleteCallBackFunction,  cartChangeNumberOfItemsCallBackFunction}) {
// console.log(userData)

//get our cart info
const {Cart}=userData

// console.log(Cart)
 
// console.log(itemData)


let newArrayOfIds = Cart.map((item) => {
  return `${item.id}`
})
// console.log(newArrayOfIds)



let cartItems = itemData.filter((item) => {
  if (newArrayOfIds.includes(`${item.id}`)) {


   let myObj = Cart.find(el => el.id === `${item.id}`) 

   let numberOfItemsToBuy = myObj.numberOfItemsToBuy
  //  console.log(numberOfItemsToBuy)
  // let newitem = {... item, "numberOfItemsToBuy": numberOfItemsToBuy}
   item.numberOfItemsToBuy = numberOfItemsToBuy
  // let item = newitem
  //  console.log(item)
    return item
  } else {} 
})

// console.log(cartItems)
// console.log(Cart)



  return (
    <div id="myCard"className='main'>
        <h1>Cart</h1>
        <ul>{
      
          cartItems.map((itemInCart)=> < CartItem key={itemInCart.name} itemInCart={itemInCart} cartDeleteCallBackFunction={cartDeleteCallBackFunction}  cartChangeNumberOfItemsCallBackFunction={cartChangeNumberOfItemsCallBackFunction}/>)
       }</ul>
    </div>
    
                
                    
               
  )
}
