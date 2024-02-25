import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { formatDate } from "@/utils/strapi.utils";
import { fetchDataStrapi } from "@/utils/strapi.utils";
import { processScholarship } from "@/utils/strapi.utils";
import Card from "@/components/shared/Card";

export default async function ScholarshipList({ className }) {
    const allScholarships = await fetchDataStrapi("scholarships?populate=deep");
    const processedScholarships = processScholarship(allScholarships);

    return (
        <div className="bg-red-400 rounded-lg text-center">
            <h1 className=" text-xl font-semibold italic font-[Inter]">Scholarships</h1>
            <ul>
                {processedScholarships.map((scholarship) => (
                    <Link
                        key={scholarship.id}
                        href={`/scholarships/${scholarship.id}`}
                        className="hover:bg-custom-royal-blue hover:text-white transition-all delay-50 ease-out py-1 flex flex-row justify-center text-center"
                    >
                        <Card variant="primary">
                            <li className="font-bold">{scholarship.title}</li>

                            {scholarship.deadline && <li>{formatDate(scholarship.deadline)}</li>}
                        </Card>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
