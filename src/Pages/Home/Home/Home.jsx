import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <Banner></Banner>

            {/* About Sectiion */}
            <About></About>

            {/* Services Section */}
            <Services></Services>
            <h2>Home Page</h2>
        </div>
    );
};

export default Home;