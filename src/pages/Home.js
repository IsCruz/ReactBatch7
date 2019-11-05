import React from 'react';
import Navbar from '../components/genericComponents/Navbar';
import Jumbotron from '../components/genericComponents/Jumbotron';
import Footer from '../components/genericComponents/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron title="Welcome" subtitle ="Home from Our Main Page" />
            <div className="container">
                <h2> Welcome </h2>
                <p>
                    another text in our body page.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Home