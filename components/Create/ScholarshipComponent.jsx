import React from "react";
import DescriptionComponent from "./DescriptionComponent";
import DeadlineComponent from "./DeadlineComponent";
import TitleComponent from "./TitleComponent";
// import PicComponent from "./PicComponent";
import BackgroundComponent from "./BackgroundComponent";

const ScholarshipComponent = ({component}) => {
    // console.log("component", component[0].attributes.scholarshipContent[1]["__component"])
    // console.log("component", component[0].attributes.scholarshipContent[1]["__component"])
    
    return component[0].attributes.scholarshipContent.map((component) => {
        const componentType = component["__component"];

        switch (componentType) {
            case "scholarship-form.title":
                return <TitleComponent component={component} />;
            case "scholarship-form.description":
                return <DescriptionComponent component={component} />;
            case "scholarship-form.deadline":
                return <DeadlineComponent component={component} />;
            // case "pic":
            //     return <PicComponent component={component} />;
            case "scholarship-form.background":
                return <BackgroundComponent component={component} />;
            default:
                return null;
        }

    });
    
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
