import React from "react";
import DescriptionComponent from "./DescriptionComponent";
import DeadlineComponent from "./DeadlineComponent";
import TitleComponent from "./TitleComponent";
// import PicComponent from "./PicComponent";
import BackgroundComponent from "./BackgroundComponent";

const ScholarshipComponent = (props) => {
    const componentType = props.component["__component"]; //
    switch (componentType) {
        case "scholarship-form.description":
            return <DescriptionComponent component={component} />;
        case "scholarship-form.deadline":
            return <DeadlineComponent component={component} />;
        case "scholarship-form.title":
            return <TitleComponent component={component} />;
        // case "pic":
        //     return <PicComponent component={component} />;
        case "scholarship-form.background":
            return <BackgroundComponent component={component} />;
        default:
            return <h1>component not found</h1>;
    }
};

export default ScholarshipComponent;
