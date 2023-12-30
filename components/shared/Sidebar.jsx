"use client";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";

const Sidebar = ({ className }) => {
    return (
        <aside className={className}>
            <h1>Sidebar</h1>
            <p>Strapi Login:</p>
            <Link
                className="flex flex-col items-center justify-center"
                href="https://simply-scholars-821b524821cf.herokuapp.com/admin/auth/login"
                target="_blank"
            >
                <div className="py-2 hover:bg-purple-400 rounded-xl">
                    <Image src="/assets/strapi.png" alt="strapi logo" width="50" height="50" />
                </div>
                <p className="px-3 font-bold text-lg rounded-xl hover:bg-purple-400 hover:text-white">Dashboard</p>
            </Link>
        </aside>
    );
};

export default Sidebar;
