import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337/"; // default to localhost if not provided

export async function fetchDataStrapi(route) {
    const url = `${BASE_URL}/api/${route}`;

    try {
        const res = await axios.get(url);
        return res.data.data;
    } catch (err) {
        console.error(`error: ${err}`);
        throw new Error(`Could not fetch ${url} ${err}`);
    }
}

// TODO: NIGHTMARE TO UNTANGLE RICH TEXT OF DESCRIPTION // fixed by doing Markdown in Strapi
// description: item["Description"][],

export function processScholarship(data) {
    const rawData = data.attributes.scholarships.data;
    return rawData.map((dataBlock) => ({
        ...dataBlock.attributes,
        title: dataBlock.attributes.title,
        id: dataBlock.id,
        description: dataBlock.attributes.description,
        value: dataBlock.attributes.value,
        deadline: dataBlock.attributes.deadline,
        eligibility: dataBlock.attributes.eligibility,
        isActive: dataBlock.attributes.isActive,
        // below is all thanks to Nick Fis, Strapi uploads the media to a different API endpoint
        pic: BASE_URL + dataBlock.attributes?.pic?.data?.attributes?.url,
        // publishedAt: item.publishedAt.toLocalString(),
    }));
}

// ==================== //
// GET one => /api/scholarships/:id //
// ==================== //
export async function fetchOneScholarship(id) {
    const url = `${BASE_URL}/api/scholarships/${id}`;

    try {
        const res = await axios.get(url);
        return res.data.data;
    } catch (err) {
        console.error(`error: ${err}`);
        throw new Error(`Could not fetch ${url} ${err}`);
    }
}

// process one scholarship //
export function processOneScholarship(data) { // still need to populate DEEP for everything
    const rawData = data.attributes;
    return {
        ...rawData,
        title: rawData.attributes.title,
        id: rawData.attributes.id,
        description: rawData.attributes.description,
        value: rawData.attributes.value,
        deadline: rawData.attributes.deadline,
        isActive: rawData.attributes.isActive,
        eligibility: rawData.attributes.eligibility,
        pic: BASE_URL + rawData?.pic?.data?.attributes?.url,
        publishedAt: rawData.attributes.publishedAt,
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
