"use client";

// I am utilizing this because of the time crunch. It is a nicely configurable component. 
// when time allows I want to create my own react carousel from scratch
// https://github.com/express-labs/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { fetchDataStrapi } from "@/utils/strapi.utils";

const Carousel = (props) => {

    return(
        <div className="">
                <h1>test</h1>
            <CarouselProvider
                naturalSlideHeight={400}
                naturalSlideWidth={400}
                totalSlides={5}
                visibleSlides={2}
            >
                <Slider>
                    <Slide index={0}>
                        <h1>Slide 1</h1>
                    </Slide>
                    <Slide index={1}>
                        <h1>Slide 2</h1>
                    </Slide>
                    <Slide index={2}>
                        <h1>Slide 3</h1>
                    </Slide>
                    <Slide index={3}>
                        <h1>Slide 4</h1>
                    </Slide>
                    <Slide index={4}>
                        <h1>Slide 5</h1>
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
    )
}

export default Carousel