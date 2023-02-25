import { useContext } from "react";
import { MyContext } from "../context";

const Navbar = () => {

    const context = useContext(MyContext);

    return (
        <div className='navbar'>
            <div>
                <div className='navbar-left'>
                    <h3 className='logo'>Mother's Kitchen</h3>
                </div>
                <div className='navbar-right'>
                    <div className='navbar-right-search'>
                        <form onSubmit={context.handleFormSubmit}>
                            <input
                                className='searchBar'
                                placeholder='Beef Caldereta'
                                type='text'
                                onChange={context.handleInputChange}
                            />
                            <button className='navbar-button' type='submit'>Search</button>
                        </form>
                    </div>
                    <div className='navbar-right-links'>
                        <p className='speciality-text'>Speacialty</p>
                        <p><i className="gg-shopping-cart"></i></p>
                        <p><i className="gg-profile"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;