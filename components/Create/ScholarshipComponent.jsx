// THIS IS THE INTERPRETER BASICALLY FOR THE DYNAMIC ZONE DATA
import React from "react";
import DescriptionComponent from "./DescriptionComponent";
import DeadlineComponent from "./DeadlineComponent";
import TitleComponent from "./TitleComponent";
// import PicComponent from "./PicComponent";
import Skeleton from "../Skeleton";
import BackgroundComponent from "./BackgroundComponent";

const ScholarshipComponent = ({component}) => {
    // console.log("component", component[0].attributes.scholarshipContent[1]["__component"])
    // console.log("component", component[0].attributes.scholarshipContent[1]["__component"])

    // very basic error handling that is clunky and revision
    // TODO : make error handling of fetched dynamic zone data better
    if (!component || !component[0] || !component[0].attributes || !component[0].attributes.scholarshipContent) {
        return <Skeleton />;
    }
    
    return component[0].attributes.scholarshipContent.map((component) => {
        const componentType = component["__component"];

        switch (componentType) {
            //     return <PicComponent component={component} />;
            case "scholarship-form.background":
                return <BackgroundComponent component={component} />;
            case "scholarship-form.title":
                return <TitleComponent component={component} />;
            case "scholarship-form.description":
                return <DescriptionComponent component={component} />;
            case "scholarship-form.deadline":
                return <DeadlineComponent component={component} />;
            // case "pic":
            default:
                return null;
        }

    });
    
    // NOTE FOR READER : below is me getting the nesting right 😎
    // const componentType = component[0].attributes.scholarshipContent[1]["__component"]; //
    
    // switch (componentType) {
    //     case "scholarship-form.title":
    //         return <TitleComponent component={component} />;
    //     case "scholarship-form.description":
    //         return <DescriptionComponent component={component} />;
    //     case "scholarship-form.deadline":
    //         return <DeadlineComponent component={component} />;
    //     // case "pic":
    //     //     return <PicComponent component={component} />;
    //     case "scholarship-form.background":
    //         return <BackgroundComponent component={component} />;
    //     default:
    //         return null;
    // }
};

export default ScholarshipComponent;
