import { formatDate } from "@/utils/strapi.utils";

const DeadlineComponent = ({component}) => {
    const formattedDeadline = formatDate(component.deadline);
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="">
                <strong>{component.deadline}</strong>
            </h2>
            <p className="text-center">{formattedDeadline}</p>
        </div>
    );
}

export default DeadlineComponent;