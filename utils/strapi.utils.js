import Link from "next/link";

// TODO WHY DOES DOTENV NOT WORK 
// const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337"; // default to localhost if not provided
const BASE_URL = "https://simply-scholars-821b524821cf.herokuapp.com" || "http://127.0.0.1:1337"; // default to localhost if not provided
// const BASE_URL = "http://127.0.0.1:1337"; // default to localhost if not provided

export async function fetchDataStrapi(route) {
    const url = `${BASE_URL}/api/${route}`;

    try {
        // const res = await axios.get(url);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // next: {
            //     revalidate: 3600, // 1 hour in seconds // refetch every hour
            // }
        }); // fetch rather than axios, next.js and React have built in cache
        const data = await response.json();
        return data.data;
        // return res.data.data;
    } catch (err) {
        console.error(`error: ${err}`);
        throw new Error(`Could not fetch ${url} ${err}`);
    }
}

// TODO: NIGHTMARE TO UNTANGLE RICH TEXT OF DESCRIPTION // fixed by doing Markdown in Strapi
// description: item["Description"][],

// ==================== //
// LANDING PAGE IS A BAD ROUTE //
// ==================== //
// Dynamic Zones done messed everything up

export function processScholarship(data) {
    // const rawData = data.attributes.scholarships.data;
    const rawData = data; // this is the new way
    // console.log(rawData);
    return rawData.map((dataBlock) => ({
        ...dataBlock.attributes,
        // title: dataBlock.attributes.title,
        title: dataBlock.attributes.title,
        id: dataBlock.id,
        // description: dataBlock.attributes.description,
        value: dataBlock.attributes.value,
        // deadline: dataBlock.attributes.scholarshipContent[3].deadline,
        // eligibility: dataBlock.attributes.eligibility,
        // isActive: dataBlock.attributes.isActive,
        // // below is all thanks to Nick Fis, Strapi uploads the media to a different API endpoint
        // pic: BASE_URL + dataBlock.attributes?.pic?.data?.attributes?.url,
        // // publishedAt: item.publishedAt.toLocalString(),
    }));
}

// ==================== //
// GET one => /api/scholarships/:id //
// ==================== //
export async function fetchOneScholarship(id) {
    const url = `${BASE_URL}/api/scholarships/${id}?populate=deep`;
    // const url = `${BASE_URL}/api/scholarships/?sort[0]=title:asc&filters[${id}][$eq]=${id}&locale[0]=en`;
    try {
        // const res = await axios.get(url);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // next: {
            //     revalidate: 3600, // 1 hour in seconds // refetch every hour
            // }
        });
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(`error: ${err}`);
        throw new Error(`Could not fetch ${url} ${err}`);
    }
}

export function processOneScholarship(data) {
    // console.log("data", data);
    const dataBlock = data
    return {
        ...data.attributes,
        // title: data.attributes.title,
        title: dataBlock.attributes.title,
        id: dataBlock.id,
        // description: data.attributes.description,
        value: dataBlock.attributes.value,
        // deadline: data.attributes.scholarshipContent[3].deadline,
        // eligibility: data.attributes.eligibility,
        // isActive: data.attributes.isActive,
        // // below is all thanks to Nick Fis, Strapi uploads the media to a different API endpoint
        // pic: BASE_URL + data.attributes?.pic?.data?.attributes?.url,
        // // publishedAt: item.publishedAt.toLocalString(),
    };
}

// formatting the date at which the scholarship was published //
export function formatDate(dateStr) {
    const newDate = new Date(dateStr);
    // this is the format we want: "January 1, 2024"
    return newDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export async function fetchScholarships() {
    const allScholarships = await fetchDataStrapi("scholarships?populate=deep");
    // console.log("allScholarships", allScholarships)

    const processedScholarshipData = allScholarships.map(processScholarshipContent);
    // console.log("processedScholarshipData", processedScholarshipData)
    return processedScholarshipData;
}

// ==================== //
// NEEDED TO MAP OUT THE ARRAY NESTED INSIDE THE SCHOLARSHIP //
// export function processScholarshipContent(scholarship) {
//     // const rawData = scholarship.attributes["scholarshipContent"];
//     const rawData = scholarship;
//     console.log("rawData", rawData)
//     return rawData.map((dataBlock) => ({
//         ...dataBlock.attributes,
//         // id: scholarship.id,
//         color: dataBlock.color,
//         description: dataBlock.description,
//         title: dataBlock.title,
//         deadline: dataBlock.deadline,
//         value: dataBlock.value,
//         // pic: BASE_URL + data.attributes.pic?.data?.attributes?.url,
//         // publishedAt: item.publishedAt.toLocalString(),
//     }));
// }
// export function processScholarshipContent(scholarship) {
//     // const rawData = scholarship.attributes["scholarshipContent"];
//     const rawData = scholarship;
//     console.log("rawData", rawData)
//     return rawData.map((dataBlock) => ({
//         ...dataBlock.attributes,
//         // id: scholarship.id,
//         color: dataBlock.color,
//         description: dataBlock.description,
//         title: dataBlock.title,
//         deadline: dataBlock.deadline,
//         value: dataBlock.value,
//         // pic: BASE_URL + data.attributes.pic?.data?.attributes?.url,
//         // publishedAt: item.publishedAt.toLocalString(),
//     }));
// }
