import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './components.css';

function SingleDog() {

    const { index } = useParams();

    let dogsLocal = JSON.parse(localStorage.getItem("dogs"));
    console.log(dogsLocal)
    let dog = (dogsLocal[index]);
    console.log(dog)
    return (
        <>
            <section className="single-section">
                <div
                    key={dog.chipNumber}
                    className="single-dogcard">
                    <article>
                        <img src={dog.img} alt={dog.name} />
                    </article>
                    <article>
                        <h1 className="single-dogname">{dog.name}</h1>
                        <ul className="single-infolist">
                            <li><span className="single-doginfo">Age:</span>  {dog.age}</li>
                            <li><span className="single-doginfo">Breed:</span> {dog.breed}</li>
                            <li><span className="single-doginfo">ChipNumber:</span> {dog.chipNumber}</li>
                            <li><span className="single-doginfo">OwnerName:</span> {dog.owner.name} </li>
                            <li><span className="single-doginfo">OwnerLastName:</span> {dog.owner.lastName} </li>
                            <li><span className="single-doginfo">PhoneNumber:</span> {dog.owner.phoneNumber} </li>
                            <li><span className="single-doginfo">Sex:</span> {dog.sex}</li>
                            <li> {dog.present ? <p className="single-dogpresent">Present</p> : <p>not present</p>}</li>
                        </ul>
                        <Link
                            to="/Home"
                            className="single-link"
                        >
                            &larr; Back
                        </Link>
                    </article>
                </div>
            </section>
        </>
    )
}
export default SingleDog;