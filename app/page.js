// import Image from "next/image";
import Hero from "../components/Hero";
import { fetchDataStrapi, processScholarship } from "@/utils/strapi.utils";
import Carousel from "@/components/Carousel";
import ScholarshipPreviewBlock from "@/components/ScholarshipPreviewBlock";
import FormSubmit from "@/components/FormSubmit";

export default async function Home( {scholarships} ) {
    // home page ---
    // INDEX ROUTE essentially / GET ALL
    const data = await fetchDataStrapi("scholarships?populate=deep"); // this is SCHOLARSHIPS route
    const processedData = processScholarship(data);
    // console.log("processedData", processedData[0]);

    return (
        <div className="flex flex-col max-w-2xl max-h-full mx-auto my-0">
            <Hero />
            <article className="flex flex-col items-center justify-between p-1">
                <h1 className="text-2xl font-bold text-center">Wow, this is a scholarships page!</h1>
            </article>
            <article className="p-2 max-w-2xl mx-auto my-5">
                <FormSubmit />
            </article>
            {/* <Carousel /> */}
        </div>
    );
}

export const revalidate = 60; // revalidate every 5 minutes
