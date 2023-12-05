"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderStyle = {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

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
        <header className={`header ${path === "/" ? "header--home" : ""}`} style={HeaderStyle}>
            {/* <img src="" alt="" /> logo */}
            <ul className="nav flex flex-row center-items gap-1">
                {navPaths.map((navPath, item) => (
                    <li key={item} className={`nav__item ${path === navPath.slug ? "nav__item--active" : ""}`}>
                        <Link href={navPath.slug}>
                            <h4 className="hover:underline">{navPath.display}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header;