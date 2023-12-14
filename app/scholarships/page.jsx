// import { fetchAllScholarships } from "@/utils/strapi.utils" // or something like this
import ReactMarkdown from "react-markdown";
import { fetchDataStrapi, processScholarship } from "@/utils/strapi.utils";
import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";
import ScholarshipPreviewBlock from "@/components/ScholarshipPreviewBlock";
import ScholarshipList from "./ScholarshipList";
import { Links } from "@/components/Links";
import ClientComponent from "./[slug]/ClientComponent";

export default async function Page() {

    // const allScholarships = await fetchAllScholarships();
    const allScholarships = await fetchDataStrapi("scholarships-landing?populate=deep");
    const processedScholarships = processScholarship(allScholarships);
    // console.log(scholarships);

    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Scholarships</h1>
            {/* GRID LAYOUT */}
            <ScholarshipList scholarships={processedScholarships} />
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
                {processedScholarships.map((scholarship, index) => (
                    <div key={index} className="block max-w-md rounded-xl p-1 border border-cyan-950 text-center shadow-custom hover:border-cyan-300 hover:bg-orange-300">
                        <h2 className="tracking-tight">
                            <strong>{scholarship.title}</strong>
                        </h2>
                        {/* <div className="flex flex-row justify-center items-center">
                            {scholarship.pic ? (
                                <Image src={scholarship.pic} alt="scholarship image" width="100" height="100" />
                            ) : (
                                <Image src={<Skeleton />} alt="scholarship image" width="100" height="100" />
                            )}
                        </div> */}
                        <ul className="list-none">
                            {scholarship.value && <li>{scholarship.value}</li>}
                            {scholarship.deadline && <li>{formatDate(scholarship.deadline)}</li>}
                            {scholarship.eligibility && <li>{scholarship.eligibility}</li>}
                        </ul>
                        {/* <Link href={`/scholarships/${scholarship.id}`} id={scholarship.id} > Learn More </Link>
                        <Link href={`/scholarships/${scholarship.slug}`} id={scholarship.id}> Learn More </Link> */}
                        <p>scroll</p>
                        <ReactMarkdown className="prose overflow-scroll max-h-32">{scholarship.description}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </main>
    );
}

export const revalidate = (1800); // revalidate every 30 minutes
