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
        <nav className={className}>
            <Button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="button items-center p-0 mt-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">open</span>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="#eee"
                    stroke="#eee"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth=".5"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2, 3L5, 3L8, 3M2, 5L8, 5M2, 7L5, 7L8, 7"
                    ></path>
                </svg>
            </Button>

            <aside
                id="default-sidebar"
                className="flex sm:flex-col xs:w-1/2 xs:flex-row top-0 left-0 z-fit w-fit sm:h-full xs:hidden transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="xs:hidden sm:h-full p-1 overflow-x-auto bg-custom-turquoise dark:bg-gray-800">
                    <ul className="sm:flex-row sm:flex-col font-medium flex align-center content-center justify-center items-center">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/scholarships"
                                className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap">Scholarships</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* <ul className="nav flex xs:flex-row sm:flex-col flex-wrap items-center gap-3 justify-center my-0 mx-auto p-1">
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
            </ul> */}
        </nav>
    );
};

export default Navbar;
