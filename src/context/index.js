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
        foodArr: [],
        testArr: [],
        testArrChar: ''
    }

    // cart = { expired: Date, lastUpdated: Date, items: [{ food_id: JSONid, quantity: number }] }



    handlePushArr = (e) => {
        e.preventDefault();
        const newDate = new Date();
        const day = newDate.getDate();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        const startDate = `${day}-${month}-${year}`
        const pushThis = this.state.testArrChar
        this.setState({ date: startDate })
        this.state.testArr.push(`${pushThis}, ${startDate}`);
        this.setState({ testArrChar: '' })
    }

    showTestArr = () => {
        return this.state.testArr.map((items, i) => (
            <li key={i}>{items}</li>
        ))
    }

    handlePushArrChar = (e) => {
        this.setState({ testArrChar: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
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
                handleFormSubmit, handleInputChange, handleCategoryButton, createButton, mapFunction, mainContentTitle, handlePushArrChar, handlePushArr,
                showTestArr,
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
                    handlePushArrChar,
                    handlePushArr,
                    showTestArr,
                    state,
                    newArr,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };