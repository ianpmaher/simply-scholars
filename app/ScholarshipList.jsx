import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { formatDate } from "@/utils/strapi.utils";
import { fetchDataStrapi } from "@/utils/strapi.utils";
import { processScholarship } from "@/utils/strapi.utils";

export default async function ScholarshipList({ className }) {

    const allScholarships = await fetchDataStrapi("scholarships?populate=deep");
    const processedScholarships = processScholarship(allScholarships);

    return (
        <div className="bg-red-400 text-center rounded-lg absolute right-0">
            <h1 className=" text-xl font-semibold italic font-[Inter]">Scholarships</h1>
            <ul>
                {processedScholarships.map((scholarship) => (
                    <Link
                        key={scholarship.id}
                        href={`/scholarships/${scholarship.id}`}
                        className="hover:bg-custom-royal-blue hover:text-white transition-all delay-50 ease-out p-1 flex flex-row justify-between gap-5"
                    >
                        <li className="font-bold">{scholarship.title}</li>
                        
                        {scholarship.deadline && <li>{formatDate(scholarship.deadline)}</li>}
                    </Link>
                ))}
            </ul>
        </div>
    );
}
