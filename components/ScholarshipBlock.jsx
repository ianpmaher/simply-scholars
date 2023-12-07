import ReactMarkDown from "react-markdown";

const ScholarshipBlock = ({ data }) => {
    const { title, value, description } = data;
    return (
        <div className="">
            <h3 className="">{title}</h3>
            <p className="">${value}</p>
            {/* <ReactMarkDown className="">{description}</ReactMarkDown> */}
        </div>
    );
};

export default ScholarshipBlock;