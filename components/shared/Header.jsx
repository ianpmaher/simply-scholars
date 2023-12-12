"use client";
// import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

// const HeaderStyle = {
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
// }

const Header = (props) => {
    // const path = usePathname();
    // const navPaths = [
    //     {
    //         display: "Home",
    //         slug: "/"
    //     },
    //     {
    //         display: "Scholarships",
    //         slug: "/scholarships"
    //     },
    //     {
    //         display: "Blog",
    //         slug: "/blog"
    //     }
    // ]

    return (
        <header className="bg-custom-white flex my-0 mx-auto justify-center content-center items-center min-w-full">
            <Image src={"/assets/placeholder.svg"} alt="logo" width="99" height="99" /> 
            <h1 className="text-3xl font-bold">Scholarship Finder</h1>
            {/* <nav className={`header ${path === "/" ? "header--home" : ""}`} style={HeaderStyle}>
                <ul className="nav flex flex-row center-items gap-1">
                    {navPaths.map((navPath, item) => (
                        <li key={item} className={`nav__item ${path === navPath.slug ? "nav__item--active" : ""}`}>
                            <Link href={navPath.slug}>
                                <h4 className="hover:underline">{navPath.display}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav> */}
        </header>
    )
}

export default Header;