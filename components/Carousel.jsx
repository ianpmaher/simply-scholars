"use client";

// I am utilizing this because of the time crunch. It is a nicely configurable component. 
// when time allows I want to create my own react carousel from scratch
// https://github.com/express-labs/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { fetchDataStrapi } from "@/utils/strapi.utils";

const Carousel = (props) => {

    return(
        <div>
                <h1>test</h1>
            <CarouselProvider
                naturalSlideHeight={125}
                naturalSlideWidth={125}
            >
            </CarouselProvider>
        </div>
    )
}

export default Carousel