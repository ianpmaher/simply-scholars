const STRAPI_URL = "https://simply-scholars-821b524821cf.herokuapp.com/api/" || "http://localhost:1337/api/";

export function getStrapiURL(route = "") {
    return `${STRAPI_URL}${route}`;
}

// helper for fetch requests GET
export async function fetchAPI(route) {
    const requestUrl = getStrapiURL(route);
    const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            
        },
    });
    const data = await response.json();
    return data;
}