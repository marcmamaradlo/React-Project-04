import React, { Component } from 'react';
import JSON from '../food.json';
import CategoryButtons from '../components/categoryButtons';
import MainMenu from '../components/mainMenu';


const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        name: '',
        username: '',
        password: '',
        email: '',
        date: '',
        activeFood: 'speciality',
        food: JSON,
        foodArr: []
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.table(this.state)
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCategoryButton = (e) => {
        this.setState({ activeFood: e.target.name })
    }

    createButton = () => {
        const buttonObject = this.state.food.map((food) => {
            return Object.keys(food)[0];
        })
        return buttonObject.map((button, id) => (
            <CategoryButtons value={button} key={id} />
        ))
    }

    mapFunction = () => {
        const foodArr = this.state.food;
        const activeFood = foodArr.find((item) => Object.keys(item).includes(this.state.activeFood));
        return Object.values(activeFood)[0].map((food) => {
            return <MainMenu value={food} key={food.id} />
        })
    }

    mainContentTitle = () => {
        const activeFood = this.state.activeFood;
        return activeFood.charAt(0).toUpperCase() + activeFood.slice(1)
    }

    render() {

        const
            {
                handleFormSubmit, handleInputChange, handleCategoryButton, createButton, mapFunction, mainContentTitle,
                state, newArr,
            } = this;

        return (
            <MyContext.Provider
                value={{
                    handleFormSubmit,
                    handleInputChange,
                    handleCategoryButton,
                    createButton,
                    mapFunction,
                    mainContentTitle,
                    state,
                    newArr,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };