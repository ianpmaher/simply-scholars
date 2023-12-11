// import { fetchAllScholarships } from "@/utils/strapi.utils" // or something like this
import { fetchDataStrapi, processScholarship } from "@/utils/strapi.utils";
import ScholarshipPreviewBlock from "@/components/ScholarshipPreviewBlock";

export default async function Page() {
    // const allScholarships = await fetchAllScholarships();
    const allScholarships = await fetchDataStrapi("scholarships-landing?populate=deep");
    const processedScholarships = processScholarship(allScholarships);
    // console.log(scholarships);
    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Scholarships</h1>
            {/* GRID LAYOUT */}
            <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">
                {processedScholarships.map((scholarship, index) => (
                    <ScholarshipPreviewBlock key={index} {...scholarship} />
                ))}
            </div>
        </main>
    );


}