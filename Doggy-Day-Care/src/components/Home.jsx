import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function Home() {
    const [dogs, setDogs] = useState([]);
    const url = "https://api.jsonbin.io/v3/b/64254cc2ace6f33a22007d35";

    let dogsLocal = JSON.parse(localStorage.getItem("dogs"));
    console.log(dogsLocal)

    if (dogsLocal == null) {

        useEffect(() => {
            const fetchDogData = async () => {

                try {
                    const res = await fetch(url, {
                        headers: {
                            "X-Master-Key": "$2b$10$ijNUzOvWqtFAJ3EUlMybSeUrqUYdr.2GNXAEAEsf5/cTY1MtsBVHS"
                        }
                    });
                    const data = await res.json();
                    setDogs(data.record);

                    console.log(dogs);

                    localStorage.setItem('dogs', JSON.stringify(dogs));
                } catch (error) {
                    console.error(error);
                }
            }
            fetchDogData();
        }, [])

        dogsLocal = JSON.parse(localStorage.getItem("dogs"));
        console.log(dogsLocal)
    }


    return (
        <>
            <section className="home-section">
                <div className="home-div1">
                    <h1 className="home-title ">
                        The Dog Daycare App
                    </h1>
                    <p className="home-p">
                        {dogsLocal.length} dogs registered. This appication is powered by {""}
                        <a href="https://jsonbin.io" className="home-a">jsonbin.io</a>
                    </p>
                    {/* <form className="max-w-xl mx-auto" autoComplete="off">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search for a dog / breed"
                                className=" py-2 px-4 rounded shadow w-full"
                            />
                        </form> */}
                </div>
                <div className="home-div2">
                    {dogsLocal.map((dog, index) => (

                        <Link
                            to={`/${index}`}
                            key={dog.chipNumber}
                            className="home-link"
                        >
                            <article  >
                                <img
                                    src={dog.img}
                                    alt={dog.name}
                                    loading="lazy"
                                    className="home-img" />
                                <h3 className="home-dogname">
                                    {dog.name}
                                </h3>
                                <p className="home-breed">Breed: {dog.breed}</p>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;