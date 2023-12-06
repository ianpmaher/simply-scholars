// import Image from "next/image";
import Hero from "../components/Hero";
import JsonTest from "../components/JsonTest";

export default function Home() {
    return (
        <div>
            <Hero />
            <article className="flex flex-col items-center justify-between p-4">
                <h1 className="text-3xl font-bold text-center">Wow, this is a cool page!</h1>
            </article>
            <JsonTest />
        </div>
    );
}
