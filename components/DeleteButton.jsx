"use client";

import { redirect } from "next/navigation";
import Button from "./Button";
import React from "react";

const apiTokenAuthor =
    "f9f01fea29f3f15535be150767c3ec5ff8ff7a6ea631106f32425c6b20862a70c35b6ec7f63292a579c200c32d9903677b948d453b7ce9a788bffc360ae9f05c177c0d623931ba41e084cae5dfa6073a98e48ba4a4cc5c3155c38d647a44e7083b265f23aecfcdee32ced621b36dde41f7eaa4c7105a26771ba9968a9d460dbe";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiTokenAuthor}`,
};

const url = "https://simply-scholars-821b524821cf.herokuapp.com/api/scholarships";

const DeleteButton = (slug) => {
    const deleteScholarship = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${url}/${slug.slug}/`, {
                method: "DELETE",
                headers,
            });

            if (!response.ok) {
                console.error("Error deleting scholarship:", slug);
                throw new Error("Error deleting scholarship");
            }
            console.log("goodbye scholarship", slug);
            redirect("/scholarships");
            // Handle successful deletion (e.g., update state, show notification)
        } catch (error) {
            console.error("Failed to delete scholarship:", slug);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            {console.log("id", slug)}
            {console.log("id", slug.slug)}
            <form onSubmit={deleteScholarship}>
                <input type="submit" className="button-primary" onClick={deleteScholarship} />
            </form>
        </div>
    );
};

export default DeleteButton;
