import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import questions from "../assets/questions.json";
import LikeIcon from "../assets/icons/like-icon.svg?react"
import DislikeIcon from "../assets/icons/dislike-icon.svg?react"
const db = questions

function Advanced () {

    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        console.log(nameToDelete, "->", direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }


    return (
    <div>
        <div className={"flex justify-center mt-8"}>
            <img src="/logo-handshake-white.svg" alt="Handshake Logo" className={"size-16"}/>
        </div>
        <div>
            <div className='cardContainer flex justify-center mt-14'>
                {db.map((character, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe absolute'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name, index)}
                        onCardLeftScreen={() => outOfFrame(character.name, index)}
                        preventSwipe={["up", "down"]}
                    >
                        <div className="card w-72 h-96 bg-error shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{character.name}</h2>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className={"flex justify-evenly mt-[410px]"}>

                <DislikeIcon className={"h-16 w-16"}
                             onClick={() => swipe('left')}/>
                <LikeIcon className={"h-16 w-16"}
                          onClick={() => swipe('right')}/>

            </div>
        </div>

    </div>
    )
}


export default Advanced