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
        value: dataBlock.value,
        deadline: dataBlock.deadline,
        isActive: dataBlock.isActive,
        // below is all thanks to Nick Fis, Strapi uploads the media to a different API endpoint
        pic: BASE_URL + dataBlock.attributes?.pic?.data?.attributes?.url,
        // publishedAt: item.publishedAt.toLocalString(),
    }));
}