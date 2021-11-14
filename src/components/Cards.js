import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <Carditem 
                        src="images/img-2.jpg"
                        text="Explore the Beaches deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                        src="images/img-3.jpg"
                        text="Explore the Boats Trips"
                        label="Adventure"
                        path="/services"
                        />
                        <Carditem 
                        src="images/img-4.jpg"
                        text="Explore the Boats Trips"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
