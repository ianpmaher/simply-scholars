"use client";

import { fetchOneScholarship, formatDate, processScholarshipContent } from "@/utils/strapi.utils";
import Image from "next/image";
import Skeleton from "./Skeleton";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const ContentScholarshipContent = (props) => {

    console.log(props);
    const data = fetchOneScholarship(props.id);
    const processedScholarship = processScholarshipContent(data);

    const formattedDeadline = formatDate(processedScholarship.deadline);

    return (
        <div className="block max-w-sm rounded-xl p-5 border border-cyan-950 text-center shadow-custom hover:border-cyan-300 hover:bg-orange-300">
            <h2 className="tracking-tight">
                <strong>{processedScholarship.title}</strong>
            </h2>
            <div className="flex flex-row justify-center items-center">
                {processedScholarship.pic ? <Image src={processedScholarship.pic} alt="scholarship image" width="100" height="100" /> : <Skeleton />}
            </div>
            <ul className="list-none">
                {processedScholarship.deadline && <li>{formattedDeadline}</li>}
            </ul>
            <ReactMarkdown className="prose">{processedScholarship.description}</ReactMarkdown>
        </div>
    );
}

export default ContentScholarshipContent;