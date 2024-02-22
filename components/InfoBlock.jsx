import Card from "./shared/Card";

const InfoBlock = ({ data }) => {
    return (
        <Card
            className={
                "shadow-custom h-[20rem] w-1/4 flex flex-col flex-wrap justify-center items-center my-0 mx-auto p-1 bg-custom-green hover:ring-4 overflow-scroll text-center rounded-xl"
            }
        >
            <h2 className="m-1">
                <strong>{data.title}</strong>
            </h2>
            {/* {data.pic ? <Image src={data.pic} alt="scholarship image" width="100" height="100" /> : <Skeleton />} */}
            <ul className="flex flex-col gap-2 items-center list-none my-2 p-0">
                {data.value && <li className="text-md font-bold ">${data.value}</li>}
                {data.deadline && (
                    <li>
                        Deadline: <span className="font-bold ml-1">{formattedDeadline}</span>
                    </li>
                )}
                {data.eligibility && <li>{data.eligibility}</li>}
            </ul>
            {/* <ReactMarkdown className="prose">{data.description}</ReactMarkdown> */}
        </Card>
    );
};
