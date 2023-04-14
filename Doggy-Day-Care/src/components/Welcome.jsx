import { Link } from 'react-router-dom';
import './components.css';

function Welcome(props) {


    return (
        <section className="w-section">
            <h2 className="w-dog">
                Welcome to DoggyDayCare
            </h2>
            {/* <p className="w-sub">Check registered dogs</p> */}
            <Link to="/Home">
                <button className="w-button">Start!</button>
            </Link>
        </section>
    )
}

export default Welcome;