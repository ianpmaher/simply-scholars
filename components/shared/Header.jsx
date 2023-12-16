"use client";
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";

const Header = (props) => {
    return (
        <header className={props.className}>
            <Link href="/" className="flex items-center">
                <Image src={"/assets/scholar.png"} alt="logo" width="80" height="99" />
                <h1 className="text-2xl font-bold">Simply Scholars</h1>
            </Link>
        </header>
    );
};

export default Header;
