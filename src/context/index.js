import React, { Component } from 'react';
import DefaultMenu from "../components/defaultMenu"
import CategorySpeciality from "../components/categorySpeciality";
// import CategoryBeef from "../components/categoryBeef";
// import CategoryChicken from "../components/categoryChicken";
// import CategoryPork from "../components/categoryPork";
// import CategoryPasta from "../components/categoryPasta";
// import CategoryGrill from "../components/categoryGrill";
// import CategorySeaFood from '../components/categorySeaFood';
// import CategorySeaFood from "../components/categorySeaFood";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        name: '',
        username: '',
        password: '',
        email: '',
        date: '',
        speciality: 'notActive',
        beef: 'notActive',
        chicken: 'notActive',
        pork: 'notActive',
        seaFoods: 'notActive',
        grilled: 'notActive',
        pasta: 'notActive',
        baked: 'notActive',
        sandwich: 'notActive'
    }

    speciality = {
        food: [
            {
                name: 'Caldereta',
                type: 'Beef',
                cuisine: 'Filipino',
                webImage: ''
            }
        ]
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.table(this.state)
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCategoryButton = (e) => {
        this.defaultState()
        this.setState({ [e.target.name]: 'active' })
    }

    defaultState = () => {
        this.setState({
            speciality: 'notActive',
            beef: 'notActive',
            chicken: 'notActive',
            pork: 'notActive',
            seaFoods: 'notActive',
            grilled: 'notActive',
            pasta: 'notActive',
            baked: 'notActive',
            sandwich: 'notActive'
        })
    }

    render() {
        const
            {
                handleFormSubmit, handleInputChange, handleCategoryButton,
                state,
            } = this;
        return (
            <MyContext.Provider
                value={{
                    handleFormSubmit,
                    handleInputChange,
                    handleCategoryButton,
                    state,

                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };