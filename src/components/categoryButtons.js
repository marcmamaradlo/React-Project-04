import { useContext } from "react";
import { MyContext } from "../context";

const CategoryButtons = ({ value }) => {
    const context = useContext(MyContext);

    const handleCategoryButton = context.handleCategoryButton;
    const firstLetterUpCase = value.charAt(0).toUpperCase() + value.slice(1);

    return (
        <div className='link' key={value}>
            <button name={value} onClick={handleCategoryButton}>{firstLetterUpCase}</button>
        </div>
    )
}

export default CategoryButtons;