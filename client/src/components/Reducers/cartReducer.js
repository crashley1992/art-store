import image1 from "../../images/shiba.jpg";
import image2 from "../../images/spongebob.gif"
import image3 from "../../images/char.png"
import {ADD_TO_CART} from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {id: 1, title: 'Cartoon Shiba', desc: "Cute cartoon shiba.", img: image1, 
                canvasType: [
                {id: 1, type:"8\" x 10\" print card", price: 5.99}, 
                {id: 2, type:"25\" x 25\" Canvas Print", price: 25.01},
                ]
    },
        {id: 2, title: 'Sad Spongebob', desc: "Spongebob in a cafe being sad.", img: image2, canvasType: [
            {id: 1, type:"8\" x 10\" print card", price: 5.99}, 
            {id: 2, type:"25\" x 25\" Canvas Print", price: 25.01},
        ]},
        {id: 3, title: 'Trans Pride Charizard', desc: "Charizard rocking trans pride flag.", img: image3, canvasType: [
            {id: 1, type:"8\" x 10\" print card", price: 5.99}, 
            {id: 2, type:"25\" x 25\" Canvas Print", price: 25.01},
        ]}
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    if(action.type === ADD_TO_CART) {
        console.log("reeducer worked ")
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> initState.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state
                }
      }
       else{
          addedItem.quantity = 1;
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
          }
          
      }
  }
  else{
      return state
  }
}



export default cartReducer;