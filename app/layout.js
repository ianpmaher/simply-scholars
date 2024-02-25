// import { Inter } from 'next/font/google'
import { Karla, Josefin_Sans } from "next/font/google";
// import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

// const inter = Inter({ subsets: ['latin'] })
const karla = Karla({ subsets: ["latin"], display: "swap" });
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
    title: "Simply Scholars",
    description: "Find your next scholarship!",
};

// background: linear-gradient(30deg, #004E98 0%, #243c5a 30%, #3A6EA5 60%, #7CE2FE 90%)

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={karla.className}>
                <div className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
                    <Header className="w-[50vw] rounded-xl flex my-0 mx-auto justify-center content-center items-center" />
                    <div className="flex flex-1 flex-col sm:flex-row">
                        <Navbar className="sm:w-30 xs:w-20 order-first flex md:flex-col xs:flex-row justify-start items-center bg-[rgba(0,0,0,0.3)] rounded-xl" />
                        <main className="flex-1">{children}</main>
                        <Sidebar className="text-center sm:w-30 bg-[rgba(0,0,0,0.3)] text-white rounded-xl"  />
                    </div>
                    <Footer className="bg-orange-200 p-1 text-right fixed bottom-0 right-1 flex flex-col my-0" />
                </div>
            </body>
        </html>
    );
}
