import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
// import { SwipeableDrawer } from '@material-ui/core'

function TinderCards() {
    // eslint-disable-next-line
    const [people, setPeople] = useState([
        {
            name: "Sunanda Samanta",
            url: "https://avatars.githubusercontent.com/u/46472626?v=4"
        },
        {
            name: "Abhinav Dutta",
            url: "https://avatars.githubusercontent.com/u/81752205?v=4"
        },
        {
            name: "Bhaskar Biswas",
            url: "https://avatars.githubusercontent.com/u/73770735?v=4"
        },
        {
            name: "Amalendu Pandey",
            url: "https://avatars.githubusercontent.com/u/84476847?v=4"
        }
    ]);
    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_container">
                {people.map((person) => {
                    return <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                })}

            </div>
        </div>
    )
}

export default TinderCards
