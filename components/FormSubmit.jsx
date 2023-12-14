"use client";
import { useState } from "react";

// response from request is parsed to JSON
const parseJson = (response) => (response.json ? response.json() : response);

// const apiToken = process.env.API_TOKEN;
const apiToken =
    "42df55e3e571255a6dbfae5ac5e42ab5816c9d2022005a63b534932d355e4730fb36d0309e9d44bc40194418797bf298c8420c8672c250982d1f53e865e6188d52f14ab22acdb98137c41fa942bdda840aa7c6c22026397c0891e0a2f826fd78deef953ca722427398be7adb7fb00809daf396b6c998b13a23d8ffef393c40b9";

const FormSubmit = () => {
    console.log("api token", apiToken);

    const [formData, setFormData] = useState({
        data: {
            title: "new scholarship",
            description: "",
            isActive: true,
            color: "#31fcff",
            value: "500",
        },
        // deadline: useState("2024-01-01"),
    });

    // needs to have write access / CREATE permission

    // refactoring a lot based on Strapi docs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("success");
                console.log(parseJson(response));
                // reset form data after submission
                setFormData({
                    title: "new scholarship",
                    description: "",
                    isActive: true,
                    color: "#31fcff",
                    value: "",
                    // deadline: useState("2024-01-01"),
                });
            } else {
                console.log("error in submission");
                console.log(parseJson(response));
                console.log("api token", apiToken);
            }
        } catch (error) {
            console.log("error creating post", error);
        }
    };

    // const renderCheckbox = (scholarship) => {
    //     const { scholarships } = modifiedData;
    //     const isChecked = scholarships.includes(scholarship.id);
    //     const handleCheckboxChange = () => {
    //         if (isChecked) {
    //             setModifiedData((prev) => ({
    //                 ...prev,
    //                 scholarships: scholarships.filter((id) => id !== scholarship.id),
    //             }));
    //         } else {
    //             setModifiedData((prev) => ({
    //                 ...prev,
    //                 scholarships: [...scholarships, scholarship.id],
    //             }));
    //         }
    //     };
    //     return (
    //         <div key={scholarship.id}>
    //             <input
    //                 type="checkbox"
    //                 id={scholarship.id}
    //                 name={scholarship.name}
    //                 value={scholarship.id}
    //                 checked={isChecked}
    //                 onChange={handleCheckboxChange}
    //             />
    //             <label htmlFor={scholarship.id}>{scholarship.name}</label>
    //         </div>
    //     );
    // };

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col md:flex-col" onSubmit={handleSubmit}>
                <label>
                    Name of scholarship:
                    <input
                        className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                        type="textarea"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Scholarships:
                    <input
                        className="w-full md:w-3/4 border border-gray-300 rounded-md p-2 mb-2 md:mb-0"
                        type="checkbox"
                        name="isActive"
                        value={formData.isActive}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

// FormSubmit.getInitialProps = async (ctx) => {
//     try {
//         const allScholarships = await fetch(
//             "https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships?populate=deep",
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${aPItoken}`,
//                 },
//             }
//         ).then(parseJson);
//         console.log(allScholarships);
//         return allScholarships;
//     } catch (err) {
//         console.log(err);
//     }

// };

export default FormSubmit;
