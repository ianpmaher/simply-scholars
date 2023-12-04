// import Image from "next/image";
import DogBone from "./_components/DogBone";
import JsonTest from "./_components/JsonTest";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold text-center">Wow, this is a cool page!</h1>
            <DogBone/>
            <JsonTest/>
        </main>
    );
}
