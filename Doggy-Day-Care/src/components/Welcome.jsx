import { Link } from 'react-router-dom';


function Welcome(props) {


    return (
        <section className="w-section">
            <h2 className="w-dog">
                Wellcome to DoggyDayCare
            </h2>
            <p className="w-sub">Check registered dogs</p>
            <Link to="/Home">
                <button >Start!</button>
            </Link>
        </section>
    )
}

export default Welcome;