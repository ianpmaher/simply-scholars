import Link from "next/link";
import Image from "next/image";
import Card from "./Card";
import ScholarshipList from "@/app/ScholarshipList";

const Sidebar = ({ className }) => {
    

    return (
        <aside className={className}>
            <ScholarshipList />
        </aside>
    );
};

export default Sidebar;
