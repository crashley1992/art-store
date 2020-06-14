import image1 from "../../images/shiba.jpg";
import image2 from "../../images/spongebob.gif"
import image3 from "../../images/char.png"

const initState = {
    items: [
        {id: 1, title: 'Cartoon Shiba', desc: "Cute cartoon shiba.", img: image1},
        {id: 2, title: 'Sad Spongebob', desc: "Spongebob in a cafe being sad.", img: image2},
        {id: 3, title: 'Trans Pride Charizard', desc: "Charizard rocking trans pride flag.", img: image3}
    ],
    canvasType: [
        {type:"8\" x 10\" print card", price: 5.99}, 
        {type:"25\" x 25\" Canvas Print", price: 25.00},
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    return state;
}

export default cartReducer;