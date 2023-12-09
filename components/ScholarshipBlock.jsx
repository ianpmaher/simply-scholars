import ReactMarkDown from "react-markdown";

const ScholarshipBlock = async () => {
    // const { title, value, description } = data;
    const response = await fetch('https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships/');
    const data = await response.json();
    
    return (
        <div style={{ border: "10px dashed black" }}>
            <h1>JSON Test</h1>
            {/* THIS WORKS ACTUALLY! */}
            <p>{data["data"][0]["attributes"]["Title"]}</p>
            {/* function to add comma for large int in below "value" */}
            {data["data"][0]["attributes"]["Value"] >= 1000 && (
                <p>${data["data"][0]["attributes"]["Value"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )}

            <p>{data["data"][0]["attributes"]["Description"][1]["children"][0]["children"][0]["text"]}</p>
            <p>{data["data"][0]["attributes"]["Title"]}</p>
            {/* <h3 className="">{title}</h3>
            <p className="">${value}</p> */}
            {/* <ReactMarkDown className="">{description}</ReactMarkDown> */}
        </div>
    );
};

export default ScholarshipBlock;
