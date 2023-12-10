// import Image from "next/image";
import ScholarshipBlock from "@/components/ScholarshipBlock";
import Hero from "../components/Hero";
import axios from "axios";
import JsonTest from "../components/JsonTest";
import { fetchDataStrapi, processScholarship } from "@/utils/strapi.utils";

export default async function Home() {
    // home page ---  
    // INDEX ROUTE essentially / GET ALL
    const data = await fetchDataStrapi("scholarships-landing?populate=deep"); // this is SCHOLARSHIPS route
    const processedData = processScholarship(data);
    console.log("processedData", processedData);

    return (
        <div>
            <Hero />
            <article className="flex flex-col items-center justify-between p-1">
                <h1 className="text-3xl font-bold text-center">Wow, this is a cool page!</h1>
            </article>
            { processedData.map((data) => (
                <ScholarshipBlock
                    key={data.id}
                    title={data.title}
                    value={data.value}
                    deadline={data.deadline}
                    isActive={data.isActive}
                    pic={data.pic}
                />
            )) }
            <ScholarshipBlock />
            {/* <JsonTest /> */}
        </div>
    );
}
