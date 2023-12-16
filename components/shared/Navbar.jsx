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
                className="button-secondary  items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">open</span>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </Button>

            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-30 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-custom-turquoise dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap">Scholarships</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
