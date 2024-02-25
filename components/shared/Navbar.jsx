"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import Card from "./Card";

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

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = (event) => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={className}>
            {/* <Card>
                <Button
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="button items-center p-1 mt-2 text-sm text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                    onClick={handleToggle}
                >
                    <svg
                        className="w-10 h-10 self-center"
                        aria-hidden="true"
                        fill="#eee"
                        stroke="#eee"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth=".5"
                    >
                        <path clipRule="evenodd" fillRule="evenodd" d="M2, 3L5, 3L8, 3M2, 5L8, 5M2, 7L5, 7L8, 7"></path>
                    </svg>
                </Button>
            </Card> */}

            <aside
                id="default-sidebar"
                className="flex sm:flex-col xs:flex-row w-full transition-transform m-1 justify-center items-center"
                aria-label="Sidebar"
            >
                {/* {isOpen && ( */}
                    <div className="sm:p-1 overflow-x-auto">
                        <ul className="flex-row sm:flex-col sm:font-small font-medium flex align-center content-center justify-center items-center gap-3">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center text-gray-500 rounded-lg dark:text-white hover:bg-purple-400 hover:text-white group sm:m-2 sm:p-0.5"
                                >
                                    <span className="flex-1 whitespace-nowrap">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/scholarships"
                                    className="flex items-center text-gray-500 rounded-lg dark:text-white  hover:bg-purple-400 hover:text-white group sm:m-2 sm:p-0.5"
                                >
                                    <span className="flex-1 whitespace-nowrap">Scholarships</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="flex items-center text-gray-500 rounded-lg dark:text-white  hover:bg-purple-400 hover:text-whitegroup sm:m-2 sm:p-0.5"
                                >
                                    <span className="flex-1 whitespace-nowrap">Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex flex-col items-center justify-center sm:p-0.5"
                                    href="https://simply-scholars-821b524821cf.herokuapp.com/admin/auth/login"
                                    aria-label="strapi login"
                                    target="_blank"
                                >
                                    <div className="py-2 hover:bg-purple-400 rounded-xl">
                                        <Image src="/assets/strapi.png" alt="strapi logo" width="50" height="50" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                {/* )} */}
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
