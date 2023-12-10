import ReactMarkDown from "react-markdown";
import Card from "./Card";
import Image from "next/image";
import Skeleton from "./Skeleton";

const ScholarshipBlock = ( data ) => {
    // const { title, value, description } = data;
    // destructuring the data object
        
    const loaded = () => {
        return (
            <Card className="">
                <h2>
                    <strong>{data.title}</strong>
                </h2>
                <div>
                    <ReactMarkDown>
                        {data.description}
                    </ReactMarkDown>
                </div>
                <Image src={data.pic} alt="scholarship image" width="100" height="100" />
            </Card>
        );
    }

    const loadingPage = () => {
        return (
            <Card className="">
                <div>
                    <Skeleton />
                </div>
                <Skeleton />
            </Card>
        );
    }

    return (
        <>
            {data.title ? loaded() : loadingPage()}
        </>
        
    );
};

export default ScholarshipBlock;
