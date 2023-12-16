"use client";
// import Link from "next/link";
import Image from "next/image";

const Header = (props) => {

    return (
        <header className={props.className}>
            <Image src={"/assets/scholar.png"} alt="logo" width="80" height="99" /> 
            <h1 className="text-2xl font-bold">Simply Scholars</h1>
        </header>
    )
}

export default Header;