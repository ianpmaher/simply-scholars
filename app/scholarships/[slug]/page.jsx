// import components and stuff
// TODO: make all the components
import ReactMarkdown from "react-markdown";
import {
    fetchOneScholarship,
    processOneScholarship,
    formatDate,
    fetchDataStrapi,
    processScholarship,
    processScholarshipContent,
    fetchScholarships,
} from "@/utils/strapi.utils";
// import ScholarshipBlock from "@/components/ScholarshipBlock";
import Image from "next/image";
import ScholarshipBlock from "@/components/ScholarshipBlock";
import Skeleton from "@/components/Skeleton";
import ScholarshipComponent from "components/Create/ScholarshipComponent.jsx";

export default async function Page({ params }) {
    const slug = params.slug;
    console.log(params.slug);

    // const scholarships = await fetchScholarships();
    const scholarshipIndv = await fetchOneScholarship(params.slug);
    // const scholarshipKitten = processScholarship(scholarshipIndv);
    console.log(scholarshipIndv); 
    const processedScholarshipThing = processScholarshipContent(scholarshipIndv);
    console.log(processedScholarshipThing);
    // 
    // if want to have other cards on the page, need to fetch all the scholarships and then filter out the one that matches the slug
    // const moreScholarships = scholarships.filter((scholarship) => scholarship.slug !== slug);

    return (
        <main className="flex flex-col justify-center items-center">
            <h1>ads</h1>
            
            <ScholarshipBlock scholarship={scholarshipIndv} />
        </main>
    );
}

export const revalidate = 300; // revalidate every 5 minutes


// now also need to generate all the static params beacuse Next.js dynamic routing

export async function generateStaticParams() {
    try {
        const data = await fetchDataStrapi("scholarships?populate=deep"); // this is SCHOLARSHIPS route
        const processedScholarships = processScholarship(data);
        return processedScholarships.map((scholarship) => ({
            id: scholarship.id,
            // id: scholarship.id,
        }));
    } catch (error) {
        console.log(error);
    }
}