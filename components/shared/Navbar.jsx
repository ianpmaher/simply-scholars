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
        <nav className={className} >
            <ul className="nav flex md:flex-col sm:flex-row items-center gap-3 justify-center my-0 mx-auto p-0">
                {navPaths.map((navPath, item) => (
                    <li key={item} style={{ textTransform: "uppercase", fontSize: "1.25rem" }}>
                        <Link href={navPath.slug}>
                            <Button
                                className={
                                    "button-secondary group inline-flex items-center font-medium border border-transparent rounded-md shadow-md p-2 text-base bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-300 hover:from-indigo-500 hover:via-purple-400 justify-center w-full"
                                }
                            >
                                {navPath.display}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
