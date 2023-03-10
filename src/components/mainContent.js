import { useContext } from "react";
import { MyContext } from "../context/index";

const MainContent = () => {

    const context = useContext(MyContext);
    const createButton = context.createButton;
    const mapFunction = context.mapFunction;
    const mainContentTitle = context.mainContentTitle;

    return (
        <div className='main-content'>
            <div className='main-content-div'>
                <div className='main-content-left'>
                    <h3 className='category'>Menu</h3>
                    <div className='category-links'>
                        {createButton()}
                    </div>
                </div>
                <div className='main-content-right'>
                    <div className='main-content-right-title'>
                        <h3 className='category'>{mainContentTitle()}</h3>
                    </div>
                    <div className='main-content-right-div'>
                        {mapFunction()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;