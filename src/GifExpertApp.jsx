import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />

            {/* Listado de Gif */}
            {categories.map((item) => (
                < GifGrid
                    key={item}
                    category={item} />
            ))}
        </>
    );
};
