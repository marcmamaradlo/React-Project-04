import { MyProvider } from "./context";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Banner from "./components/banner"
// import Header from "./components/header";
import Speciality from "./components/specialty";
// import HeaderTwo from "./components/headerTwo";
import About from "./components/about";
import Contact from "./components/contact";

const App = () => {
    return (
        <MyProvider>
            <Navbar />
            <Banner />
            <div className='header'>
                <hr />
                <h1>Best Sellers</h1>
                <hr />
            </div>
            {/* <Header /> */}
            <Speciality />
            {/* <HeaderTwo /> */}
            <div className='header'>
                <hr />
                <hr />
                <hr />
            </div>
            <MainContent />
            <div className='header'>
                <hr />
                <h1>About Us</h1>
                <hr />
            </div>
            <About />
            <div className='header'>
                <hr />
                <h1>Contact Us</h1>
                <hr />
            </div>
            <Contact />
            <Footer />
        </MyProvider>
    )
}

export default App;