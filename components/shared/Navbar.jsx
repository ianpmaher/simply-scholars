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
        {
            display: "Admin",
            slug: "https://simply-scholars-821b524821cf.herokuapp.com/admin/auth/login",
        },
    ];
    return (
        <nav className={className} >
            <ul className="nav flex xs:flex-row sm:flex-col flex-wrap items-center gap-3 justify-center my-0 mx-auto p-1">
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
