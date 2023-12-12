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

// now also need to generate all the static params beacuse Next.js dynamic routing

export async function generateStaticParams() {
    try {
        const data = await fetchDataStrapi("scholarships-landing?populate=deep"); // this is SCHOLARSHIPS route
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
    const slug = params;
    const scholarshipId = await fetchDataStrapi(`scholarships/${params.slug}?populate=deep`);
    console.log(scholarshipId);

    // const scholarship = await fetchOneScholarship(id);
    const processedScholarship = processOneScholarship(scholarshipId); // OMG THIS IS WORKING
    console.log("processed scholarship", processedScholarship);
    // const otherScholarships = await fetchDataStrapi("scholarships-landing?populate=deep"); // maybe add these in elsewhere on the page

    const formattedDeadline = formatDate(processedScholarship.deadline);

    const formattedMarkdown = <ReactMarkdown className="prose">{processedScholarship.description}</ReactMarkdown>;

    return (
        <main className="flex flex-col justify-center items-center">
            {/* <ScholarshipBlock data={processedScholarship} /> */}
            <h1 className="text-3xl font-bold">{processedScholarship.title}</h1>
            <div className="flex flex-row justify-center items-center">
                <Image src={processedScholarship.pic} alt="scholarship image" width="100" height="100" />
            </div>
            <ul className="list-none">
                {processedScholarship.value && <li>{processedScholarship.value}</li>}
                {processedScholarship.deadline && <li>{formattedDeadline}</li>}
                {processedScholarship.eligibility && <li>{processedScholarship.eligibility}</li>}
            </ul>
            {formattedMarkdown}
        </main>
    );
}
