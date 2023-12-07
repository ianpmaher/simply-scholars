import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337"; // default to localhost if not provided

export async function fetchDataStrapi(route) {
    const url = `${BASE_URL}${route}`;

    try {
        const res = await axios.get(url);
        return res.data.data;
    } catch (err) {
        console.error(`error: ${err}`);
        throw new Error(`Could not fetch ${url} ${err}`);
    }
}

