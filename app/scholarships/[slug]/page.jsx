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

import fakeScholarships from "@/utils/fakeapi";

// import ScholarshipBlock from "@/components/ScholarshipBlock";
import Image from "next/image";
import ScholarshipBlock from "@/components/ScholarshipBlock";
import Skeleton from "@/components/Skeleton";
import ScholarshipComponent from "components/Create/ScholarshipComponent.jsx";
import BackgroundComponent from "@/components/Create/BackgroundComponent";

export default async function Page({ params }) {
    const slug = params.slug;
    console.log(params.slug);

    const scholarshipIndv = fakeScholarships.data.find((scholarship) => scholarship.slug === slug);

    // const scholarships = await fetchScholarships();
    // const scholarshipIndv = await fetchOneScholarship(params.slug);
    // const scholarshipKitten = processScholarship(scholarshipIndv);
    // console.log(scholarshipIndv);
    // const processedScholarshipThing = processScholarshipContent(scholarshipIndv);
    // console.log("processed", processedScholarshipThing);
    //
    // if want to have other cards on the page, need to fetch all the scholarships and then filter out the one that matches the slug
    // const moreScholarships = scholarships.filter((scholarship) => scholarship.slug !== slug);

    return (
        <main className="flex flex-col justify-center items-center ">
            
            <BackgroundComponent component={scholarshipIndv}>
                
                <ScholarshipComponent component={scholarshipIndv} />
            </BackgroundComponent>

            {/* <h1 className=" text-xl">
                Title: <span className=" font-bold italic">{scholarshipIndv.attributes.title}</span>
            </h1> */}
            
            {/* <ScholarshipBlock data={scholarshipIndv} /> */}
            {/* <BackgroundComponent component={scholarshipIndv}>
                <div className="flex flex-row justify-center items-center w-3/5">
                    {scholarshipIndv.id === 1 ? (
                        <Image src="/assets/dar.jpg" alt="daughters of american revolution" width="100" height="100" />
                    ) : scholarshipIndv.id === 2 ? (
                        <Image src="/assets/afl.png" alt="afl cio union" width="100" height="100" />
                    ) : scholarshipIndv.id === 8 ? (
                        <Image src="/assets/react_native.png" alt="react native" width="100" height="100" />
                    ) : scholarshipIndv.id === 7 ? (
                        <Image src="/assets/luna.avif" alt="golden retriver" width="100" height="100" />
                    ) : scholarshipIndv.id === 9 ? (
                        <Image src="/assets/python.jpg" alt="python on computer" width="100" height="100" />
                    ) : scholarshipIndv.id === 6 ? (
                        <Image src="/images/scholarship6.jpg" alt="placeholder" width="100" height="100" />
                    ) : scholarshipIndv.id === 20 ? (
                        <span>🇮🇹</span>
                    ) : (
                        <Skeleton />
                    )}
                </div>
                <ScholarshipComponent component={scholarshipIndv} />
            </BackgroundComponent> */}
            {/* <DeleteButton slug={slug} /> */}
        </main>
    );
}

export const revalidate = 300; // revalidate every 5 minutes

// now also need to generate all the static params beacuse Next.js dynamic routing

// ==================== //
// STRAPI
// export async function generateStaticParams() {
//     try {
//         const data = await fetchDataStrapi("scholarships?populate=deep"); // this is SCHOLARSHIPS route
//         const processedScholarships = processScholarship(data);
//         return processedScholarships.map((scholarship) => ({
//             id: scholarship.id,
//             // id: scholarship.id,
//         }));
//     } catch (error) {
//         console.log(error);
//     }
// }

export function generateStaticParams() {
    try {
        const data = fakeScholarships.data; // this is SCHOLARSHIPS route
        return data.map((scholarship) => ({
            id: scholarship.id,
            // id: scholarship.id,
        }));
    } catch (error) {
        console.log(error);
    }
}
