// import { fetchAllScholarships } from "@/utils/strapi.utils" // or something like this
import ReactMarkdown from "react-markdown";
import { fetchDataStrapi, processScholarship, processScholarshipContent } from "@/utils/strapi.utils";
import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";
import { Links } from "@/components/Links";
import Button from "@/components/Button";
import indexPic from "./indexPic";
import fakeScholarships from "@/utils/fakeapi";

export default async function Page() {
    // const allScholarships = await fetchAllScholarships();
    const allScholarships = await fetchDataStrapi("scholarships?populate=deep");
    const processedScholarships = processScholarship(allScholarships);
    // console.log(scholarships);

    return (
        <main className="flex flex-col justify-center items-center py-2">
            {/* GRID LAYOUT */}
            {/* grid container */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
                {/* {processedScholarships.map((scholarship, index) => ( */}
                {processedScholarships.map((scholarship, index) => (
                    <div
                        key={index}
                        className="block max-w-lg h-fit rounded-xl min-h-[22rem] p-3 border bg-custom-white border-cyan-950 text-center shadow-custom hover:border-cyan-300 hover:translate-y-1 transition-all duration-700 ease-in-out overflow-hidden"
                    >
                        <h2 className="tracking-tight text-xl font-bold font-mono">{scholarship.title}</h2>
                        <Link href={`/scholarships/${scholarship.id}`} id={scholarship.id}>
                            <div className="flex flex-row justify-center items-center">
                                {scholarship.id === 1 ? (
                                    <Image src="/assets/luna.avif" alt="scholarship image" width="100" height="100" />
                                ) : scholarship.id === 4 ? (
                                    <Image src="/assets/afl.png" alt="scholarship image" width="100" height="100" />
                                ) : scholarship.id === 2 ? (
                                    <Image
                                        src="/assets/react_native.png"
                                        alt="scholarship image"
                                        width="100"
                                        height="100"
                                    />
                                ) : scholarship.id === 7 ? (
                                    <Image src="/assets/luna.avif" alt="scholarship image" width="100" height="100" />
                                ) : scholarship.id === 5 ? (
                                    <Image src="/assets/python.jpg" alt="scholarship image" width="100" height="100" />
                                ) : scholarship.id === 9 ? (
                                    <span>🇮🇹</span>
                                ) : (
                                    <Skeleton />
                                )}
                            </div>
                        </Link>
                        {/* BELOW: IF I CAN GET STRAPI TO WORK */}
                        {/* <div className="flex flex-row justify-center items-center">
                            {scholarship.pic ? (
                                <Image src={scholarship.pic} alt="scholarship image" width="100" height="100" />
                            ) : (
                                <Skeleton />
                            )}
                        </div> */}
                        <ul className="list-none">
                            {scholarship.value && <li className=" font-bold text-lg">$ {scholarship.value}</li>}
                            {scholarship.deadline && <li>Deadline: {formatDate(scholarship.deadline)}</li>}
                            {scholarship.eligibility && <li>Type: {scholarship.eligibility}</li>}
                        </ul>
                        {/* <Link href={`/scholarships/${scholarship.id}`} id={scholarship.id} > Learn More </Link>
                        <Link href={`/scholarships/${scholarship.slug}`} id={scholarship.id}> Learn More </Link> */}
                        <div className="overflow-hidden outline-violet-700 w-fit h-fit">
                            <Link href={`/scholarships/${scholarship.id}`} id={scholarship.id}>
                                <ReactMarkdown className="prose overflow-scroll rounded-md max-h-52 max-w-52 border border-slate-600 bg-[rgba(100,218,181,1)]">
                                    {scholarship.description}
                                </ReactMarkdown>
                            </Link>
                        </div>
                        <Link href={`/scholarships/${scholarship.id}`} id={scholarship.id}>
                            <Button className="button-base p-1 m-0">Learn More</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export const revalidate = 300; // revalidate every 5 minutes
