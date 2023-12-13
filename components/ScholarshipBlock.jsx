import ReactMarkdown from "react-markdown"; // swing and a miss here
import { formatDate } from "@/utils/strapi.utils";
import Card from "./shared/Card";
import Image from "next/image";
import Skeleton from "./Skeleton";

const ScholarshipBlock = (data, className) => {
    // const { title, value, description } = data;
    // destructuring the data object

    // courtesy of https://github.com/remarkjs/react-markdown/issues/273
    const fixMarkdown = (markdown) => {
        return markdown.replace(/\n/gi, "\n &nbsp;");
    };

    const formattedDeadline = formatDate(data.deadline);

    return (
        <Card className={"shadow-custom h-[20rem] w-1/4 flex flex-col flex-wrap justify-center items-center my-0 mx-auto p-1 bg-custom-green hover:ring-4 overflow-scroll text-center rounded-xl"}>
            <h2 className="m-1">
                <strong>{data.title}</strong>
            </h2>
            {data.pic ? <Image src={data.pic} alt="scholarship image" width="100" height="100" /> : <Skeleton />}
            <ul className="flex flex-col gap-2 items-center list-none my-2 p-0">
                {data.value && <li className="text-md font-bold ">${data.value}</li>}
                {data.deadline && <li>Deadline: <span className="font-bold ml-1">{formattedDeadline}</span></li>}
                {data.eligibility && <li>{data.eligibility}</li>}
            </ul>
            {/* <ReactMarkdown className="prose">{data.description}</ReactMarkdown> */}
        </Card>
    );
};

export default ScholarshipBlock;
