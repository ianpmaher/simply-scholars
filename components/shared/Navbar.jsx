"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
        <nav className={className}>
            <h1>Nav</h1>
            <p>nav text</p>
            <ul className="nav flex flex-col center-items gap-1">
                {navPaths.map((navPath, item) => (
                    <li key={item}>
                        <Link href={navPath.slug}>
                            <h4 className="hover:underline">{navPath.display}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
