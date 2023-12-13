"use client";
import { useState } from "react";
import { getStrapiURL } from "@/utils/strapi.utils";

const FormSubmit = ({ placeholder, text }) => {
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState("false");
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const aPItoken = process.env.API_TOKEN; // needs to have write access / CREATE permission

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(getStrapiURL("/api/scholarships"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${aPItoken}`,
            },
            body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (data.error) {
            setErrorMessage(data.message[0].messages[0].message);
        } else {
            setSuccessMessage(data.message);
        }
    };

    return (
        <form className="flex flex-col md:flex-col" onSubmit={handleSubmit}>
            <input
                className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                type="text"
                name="title"
                id="title"
                placeholder={placeholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                type="text"
                name="description"
                id="asd"
                placeholder={placeholder}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                type="checkbox"
                name="isActive"
                placeholder={placeholder}
                value={isActive}
                onChange={(e) => setIsActive(e.target.value)}
            />
            <input
                className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                type="date"
                name="deadline"
                placeholder={placeholder}
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">
                {text}
            </button>
            {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </form>
    );
};

export default FormSubmit;