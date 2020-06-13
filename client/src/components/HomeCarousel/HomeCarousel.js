import React, { Component } from 'react';
import "./home-carousel.css";
import image1 from "../../images/shiba.jpg";
import image2 from "../../images/spongebob.gif";
import image3 from "../../images/char.png";

class HomeCarousel extends Component {

    state = {
        images: [image1, image2, image3],
        index: 0
    }

    componentDidMount() {
        this.handleImageTimer()
    }

    handleImageTimer()  {
        let intervalTimer = setInterval(this.handleImageChangeNext, 5000);
    }

    handleImageChangeNext = () => {
        this.setState({
            index: this.state.index + 1
        })
        // sets the index position to 0 so that the images flow through again
        if (this.state.index  == 3) {
            this.setState({index: 0})
        }
    }

    render() {
        const newImage = this.state.images[this.state.index]

        return (
            <div id="home-carousel">
                    <div className="images">
                        <img src={newImage} className="image-gallery" alt={"image gallery"}/>
                    </div>
            </div>
        )
    }
 }

export default HomeCarousel;