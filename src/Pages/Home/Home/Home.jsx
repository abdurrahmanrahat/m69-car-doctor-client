import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <Banner></Banner>

            {/* About Sectiion */}
            <About></About>
            <h2>Home Page</h2>
        </div>
    );
};

export default Home;