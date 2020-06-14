import image1 from "../../images/shiba.jpg";
import image2 from "../../images/spongebob.gif"
import image3 from "../../images/char.png"

const initState = {
    items: [
        {id: 1, title: 'Cartoon Shiba', desc: "Cute cartoon shiba.", price: 1.10, img: image1},
        {id: 2, title: 'Sad Spongebob', desc: "Spongebob in a cafe being sad.", price: 10.00, img: image2},
        {id: 3, title: 'Trans Pride Charizard', desc: "Charizard rocking trans pride flag.", price: 20.00, img: image3}
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    return state;
}

export default cartReducer;