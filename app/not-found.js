import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="outline text-center m-1">
            <div className="my-0 mx-auto flex flex-col content-center items-center text-center gap-1">
                <h1>404 - Page Not Found</h1>
                <Image src="/assets/httpcat.jpg" alt="404 cat" width={500} height={500} />
                <Link href="/">
                    <Button className="button-secondary">Return Home</Button>
                </Link>
            </div>
        </div>
    );
}