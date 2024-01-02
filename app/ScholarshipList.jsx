import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { formatDate } from "@/utils/strapi.utils";

export default function ScholarshipList({ scholarships }) {
    return (
        <div className="bg-red-400 py-1 px-3 text-center rounded-lg">
            <h1 className=" text-xl font-semibold italic font-[Inter]">Scholarships</h1>
            <ul>
                {scholarships.map((scholarship) => (
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
