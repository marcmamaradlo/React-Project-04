import { MyProvider } from "./context";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Banner from "./components/banner"
import Header from "./components/header";
import Specialty from "./components/specialty";
import HeaderTwo from "./components/headerTwo";
import About from "./components/about";

const App = () => {
    return (
        <MyProvider>
            <Navbar />
            <Banner />
            <Header />
            <Specialty />
            <HeaderTwo />
            <MainContent />
            <About />
            <Footer />
        </MyProvider>
    )
}

export default App;