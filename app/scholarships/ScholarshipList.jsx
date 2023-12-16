import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

export default function ScholarshipList({ scholarships }) {
    return (
        <div className="bg-red-400 py-1 px-3 text-center rounded-lg">
            <h1 className=" text-xl font-semibold italic font-[Inter]">Scholarships</h1>
            <ul>
                {scholarships.map((scholarship) => (
                    <li key={scholarship.id}>
                        <Link href={`/scholarships/${scholarship.id}`} className="hover:bg-custom-royal-blue hover:text-white transition-all delay-50 ease-out">
                            {scholarship.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
