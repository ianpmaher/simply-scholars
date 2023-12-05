"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const path = usePathname();
    const navPaths = [
        {
            display: "Home",
            slug: "/"
        },
        {
            display: "About",
            slug: "/about"
        },
        {
            display: "Blog",
            slug: "/blog"
        }
    ]

    return (
        <header className={`header ${path === "/" ? "header--home" : ""}`}>
            {/* <img src="" alt="" /> logo */}
            <nav>
                <ul className="nav flex flex-row center-items gap-1">
                    {navPaths.map((navPath, item) => (
                        <li key={item} className={`nav__item ${path === navPath.slug ? "nav__item--active" : ""}`}>
                            <Link href={navPath.slug}>
                                <h4>{navPath.display}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;