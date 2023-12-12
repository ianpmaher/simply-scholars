"use client";

import { React, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel"; // https://github.com/vadymshymko/react-simply-carousel
import Card from "./Card";

const Carousel = (props) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="">
            <ReactSimplyCarousel
                activeSlideIndex={activeSlide}
                onRequestChange={setActiveSlide}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    className: "button-secondary h-10 w-10 flex justify-center items-center",
                    children: <span>➡️</span>}
                }
                backwardBtnProps={{
                    className: "button-secondary h-10 w-10 flex justify-center items-center",
                    children: <span>⬅️</span>}
                }
                easing="ease-out"
                transitionMs={500}
            >
                {/* {all my stuff - cards of scholarships for main page} */}
                {props.processedData.map((scholarship) => (
                    <Card key={scholarship.id} className={"w-36"}>
                        <h2 className="m-1">
                            <strong>{scholarship.title}</strong>
                        </h2>
                        <ul className="flex flex-col gap-2 items-center list-none my-2 p-0">
                            {scholarship.value && <li className="text-md font-bold ">${scholarship.value}</li>}
                            {scholarship.deadline && <li>Deadline: <span className="font-bold ml-1">{scholarship.deadline}</span></li>}
                            {scholarship.eligibility && <li>{scholarship.eligibility}</li>}
                            {scholarship.isActive? <li>⏳ active</li> : <li>⌛️</li>}
                        </ul>
                        {/* <ReactMarkdown className="prose">{data.description}</ReactMarkdown> */}
                    </Card>
                ))}
            </ReactSimplyCarousel>
        </div>
    )
}

export default Carousel;