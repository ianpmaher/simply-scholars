import ReactMarkDown from "react-markdown";
import Card from "./Card";
import Image from "next/image";
import Skeleton from "./Skeleton";

const ScholarshipBlock = async () => {
    // const { title, value, description } = data;
    // const response = await fetch("https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships?populate=*/");
    const response = await fetch("https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships/1");
    const data = await response.json();

    return (
        <Card className="">
            {/* THIS WORKS ACTUALLY! */}
            
            <h2>
                <strong>{data["data"]["attributes"]["title"]}</strong>
            </h2>
            <div>
                <ReactMarkDown>
                    {data["data"]["attributes"]["description"]}
                </ReactMarkDown>
            </div>
            <Image src={data.attributes?.pic?.data?.attributes?.url} alt="scholarship image" width="100" height="100" />

            
            {/* <h3 className="">{title}</h3>
            <p className="">${value}</p> */}
            {/* <ReactMarkDown className="">{description}</ReactMarkDown> */}
        </Card>
    );
};

export default ScholarshipBlock;
