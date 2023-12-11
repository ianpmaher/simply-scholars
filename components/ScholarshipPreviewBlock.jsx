import ReactMarkdown from "react-markdown"; // swing and a miss here
import Image from "next/image";
import Skeleton from "./Skeleton";
import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";

const ScholarshipPreviewBlock = (data) => {
    // const { title, value, description } = data;
    // destructuring the data object

    // courtesy of https://github.com/remarkjs/react-markdown/issues/273
    // const fixMarkdown = (markdown) => {
    //     return markdown.replace(/\n/gi, "\n &nbsp;");
    // }

    const formattedDeadline = formatDate(data.deadline);

    return (
        <div className="block max-w-sm rounded-xl p-5 border border-cyan-950 text-center shadow-custom hover:border-cyan-300 hover:bg-orange-300">
            <h2 className="tracking-tight">
                <strong>{data.title}</strong>
            </h2>
            <div className="flex flex-row justify-center items-center">
                {data.pic ? <Image src={data.pic} alt="scholarship image" width="100" height="100" /> : <Skeleton />}
            </div>
            <ul className="list-none">
                {data.value && <li>{data.value}</li>}
                {data.deadline && <li>{formattedDeadline}</li>}
                {data.eligibility && <li>{data.eligibility}</li>}
            </ul>
            <Link href={`/scholarships/${data.id}`}> Learn More </Link>
            <Link href={`/scholarships/${data.slug}`}> Learn More </Link>
            {/* <ReactMarkdown className="prose">{data.description}</ReactMarkdown> */}
        </div>
    );
};

export default ScholarshipPreviewBlock;
