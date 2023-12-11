"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
    const pathname = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link className={`link ${pathname === "/scholarships" ? "active" : ""}`} href="/scholarships">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={`link ${pathname === "/scholarships/1/" ? "active" : ""}`} href="/scholarships/1">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
