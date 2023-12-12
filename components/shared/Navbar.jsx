"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../Button";

const Navbar = ({ className }) => {
    const path = usePathname();
    const navPaths = [
        {
            display: "Home",
            slug: "/",
        },
        {
            display: "Scholarships",
            slug: "/scholarships",
        },
        {
            display: "Blog",
            slug: "/blog",
        },
    ];
    return (
        <nav className={className} style={{display: "flex", flexFlow: "column wrap"}}>
            <h1>Nav</h1>
            <ul className="nav flex flex-col items-center gap-5 justify-center m-0 p-0">
                {navPaths.map((navPath, item) => (
                    <li key={item} style={{textTransform: "uppercase", fontSize: "1.25rem"}}>
                        <Link href={navPath.slug}>
                            <Button className={"button-secondary hover:bg-custom-silver hover:text-black transition-all duration-200"}>{navPath.display}</Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
