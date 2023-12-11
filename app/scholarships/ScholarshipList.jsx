import Link from "next/link";

export default function ScholarshipList({ scholarships }) {
    return (
        <div className="bg-red-400 py-0 px-auto text-center">
            <h1>Scholarships</h1>
            <ul>
                {scholarships.map((scholarship) => (
                    <li key={scholarship.id}>
                        <Link href={`/scholarships/${scholarship.id}`}>
                            {scholarship.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
