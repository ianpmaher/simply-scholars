import { formatDate } from "@/utils/strapi.utils";

const DeadlineComponent = ({component}) => {
    const formattedDeadline = formatDate(component.deadline);
    return (
        <div className="flex flex-row justify-center items-center gap-3">
            <h2 className="text-center prose">Deadline:</h2>
            <p className="prose font-extrabold">{formattedDeadline}</p>
        </div>
    );
}

export default DeadlineComponent;