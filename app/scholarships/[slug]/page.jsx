// import components and stuff
// TODO: make all the components
import ReactMarkdown from "react-markdown";
import {
    fetchOneScholarship,
    processOneScholarship,
    formatDate,
    fetchDataStrapi,
    processScholarship,
} from "@/utils/strapi.utils";
// import ScholarshipBlock from "@/components/ScholarshipBlock";
import Image from "next/image";
import ScholarshipBlock from "@/components/ScholarshipBlock";
import Skeleton from "@/components/Skeleton";
import ContentScholarshipContent from "@/components/ContentScholarshipContent";

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

export default async function Page({ params }) {
    const slug = params.slug;
    console.log(params.slug)
    const scholarshipId = await fetchDataStrapi(`scholarships/${params.slug}?populate=deep`);
    console.log(scholarshipId);

    // const oneScholarship = await fetchOneScholarship(`scholarships/${params.slug}/?populate=deep`);
       
    // const formattedDeadline = formatDate(processedScholarship.deadline);
    // const formattedMarkdown = <ReactMarkdown className="prose">{processedScholarship.description}</ReactMarkdown>;

    return (
        <main className="flex flex-col justify-center items-center">
            <h1>ads</h1>
            <ContentScholarshipContent data={scholarshipId} id={params.slug} />

        </main>
    );
}

export const revalidate = (900); // revalidate every 15 minutes