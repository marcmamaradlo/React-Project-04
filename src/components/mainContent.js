import { useContext } from "react";
import { MyContext } from "../context";
import DefaultMenu from "./defaultMenu";
import CategorySpeciality from "./categorySpeciality";
import CategoryBeef from "./categoryBeef";
import CategoryChicken from "./categoryChicken";
import CategoryPork from "./categoryPork";
import CategoryGrill from "./categoryGrill";
import CategoryPasta from "./categoryPasta";
// import CategorySeaFood from "./categorySeaFood";


const MainContent = () => {

    const context = useContext(MyContext);
    const handleCategoryButton = context.handleCategoryButton;
    const component = context.state;

    console.table(component)
    return (
        <div className='main-content'>
            <div className='main-content-div'>
                <div className='main-content-left'>
                    <h3 className='category'>Category</h3>
                    <div className='category-links'>
                        <div className='link'>
                            <button name='speciality' onClick={handleCategoryButton}>Speciality</button>
                        </div>
                        <div className='link'>
                            <button name='beef' onClick={handleCategoryButton}>Beef</button>
                        </div>
                        <div className='link'>
                            <button name='chicken' onClick={handleCategoryButton}>Chicken</button>
                        </div>
                        <div className='link'>
                            <button name='pork' onClick={handleCategoryButton}>Pork</button>
                        </div>
                        <div className='link'>
                            <button name='seaFoods' onClick={handleCategoryButton}>Sea Foods</button>
                        </div>
                        <div className='link'>
                            <button name='grilled' onClick={handleCategoryButton}>Grilled</button>
                        </div>
                        <div className='link'>
                            <button name='pasta' onClick={handleCategoryButton}>Pasta</button>
                        </div>
                        <div className='link'>
                            <button name='baked' onClick={handleCategoryButton}>Baked</button>
                        </div>
                        <div className='link'>
                            <button name='sandwich' onClick={handleCategoryButton}>Sandwiches</button>
                        </div>
                    </div>
                </div>
                { }
            </div>
        </div>
    )
}

export default MainContent;