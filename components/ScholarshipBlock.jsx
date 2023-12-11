import ReactMarkdown from "react-markdown"; // swing and a miss here
import Card from "./Card";
import Image from "next/image";
import Skeleton from "./Skeleton";

const ScholarshipBlock = (data, className) => {
    // const { title, value, description } = data;
    // destructuring the data object

    // courtesy of https://github.com/remarkjs/react-markdown/issues/273
    const fixMarkdown = (markdown) => {
        return markdown.replace(/\n/gi, "\n &nbsp;");
    };

    return (
        <Card className={className}>
            <h2 className="m-1">
                <strong>{data.title}</strong>
            </h2>
            {data.pic ? <Image src={data.pic} alt="scholarship image" width="100" height="100" /> : <Skeleton />}

            <ReactMarkdown className="prose">{data.description}</ReactMarkdown>
        </Card>
    );
};

export default ScholarshipBlock;
