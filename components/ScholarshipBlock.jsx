import ReactMarkdown from "react-markdown"; // swing and a miss here
import { formatDate } from "@/utils/strapi.utils";
import Card from "./shared/Card";
import Image from "next/image";
import Skeleton from "./Skeleton";

const ScholarshipBlock = (props) => {
    // const { title, value, description } = data; // destructuring the data object
    // console.log("props", props.data.attributes);
    const scholarship = props.data.attributes;

    // courtesy of https://github.com/remarkjs/react-markdown/issues/273
    const fixMarkdown = (markdown) => {
        return markdown.replace(/\n/gi, "\n &nbsp;");
    };

    const formattedDeadline = formatDate(scholarship.deadline);

    return (
        <Card
            className={
                "shadow-custom flex flex-col flex-wrap justify-center items-center my-0 mx-auto p-1 bg-custom-green hover:ring-4 overflow-scroll text-center rounded-xl"
            }
        >
            <h2 className="m-1">
                <strong>{scholarship.title}</strong>
            </h2>
            <div className="flex flex-row justify-center items-center">
                {props.data.id === 1 ? (
                    <Image src="/assets/luna.avif" alt="scholarship image" width="100" height="100" />
                ) : scholarship.id === 4 ? (
                    <Image src="/assets/afl.png" alt="scholarship image" width="100" height="100" />
                ) : scholarship.id === 2 ? (
                    <Image src="/assets/react_native.png" alt="scholarship image" width="100" height="100" />
                ) : scholarship.id === 7 ? (
                    <Image src="/assets/luna.avif" alt="scholarship image" width="100" height="100" />
                ) : scholarship.id === 5 ? (
                    <Image src="/assets/python.jpg" alt="scholarship image" width="100" height="100" />
                ) : scholarship.id === 9 ? (
                    <span>🇮🇹</span>
                ) : (
                    <Skeleton />
                )}
            </div>
            {/* {data.pic ? <Image src={data.pic} alt="scholarship image" width="100" height="100" /> : <Skeleton />} */}
            <hr className="w-1/2 m-1" />
            <ul className="flex flex-col gap-2 items-center list-none my-2 p-0">
                {scholarship.value && <li className="text-md font-bold ">${scholarship.value}</li>}
                {scholarship.deadline && (
                    <li>
                        Deadline: <span className="font-bold ml-1">{formattedDeadline}</span>
                    </li>
                )}
                {scholarship.eligibility && <li>{scholarship.eligibility}</li>}
            </ul>
            <hr className="w-1/2 m-1" />
            <ReactMarkdown className="prose">{scholarship.description}</ReactMarkdown>
        </Card>
    );
};

export default ScholarshipBlock;
