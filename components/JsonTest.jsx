export default async function JsonTest() {
    const response = await fetch('https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships/');
    const data = await response.json();
    // console.log(data);

    const convertNumber = (num) => {
        num > 1000 ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 1;
        console.log(num);
    }

    return (
        <div style={{border: "10px dashed black"}}>
            <h1>JSON Test</h1>
            {/* THIS WORKS ACTUALLY! */}
            <p>{data["data"][0]["attributes"]["Title"]}</p>
            { /* function to add comma for large int in below "value" */}
            { data["data"][0]["attributes"]["Value"] >= 1000 && 
                <p>${data["data"][0]["attributes"]["Value"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            }
            
            <p>{data["data"][0]["attributes"]["Description"][1]["children"][0]["children"][0]["text"]}</p>
            <p>{data["data"][0]["attributes"]["Title"]}</p>
        </div>
    );
}