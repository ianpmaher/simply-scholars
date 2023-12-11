"use client";
import { useParams } from "next/navigation";

export default function ClientComponent() {
    const params = useParams();

    // route = /scholarships/[slug]
    // url = /scholarships/1
    // params = { slug: 1 }
    console.log(params);
    return (
        <div>
            <h1>Client Component</h1>
        </div>
    );
}