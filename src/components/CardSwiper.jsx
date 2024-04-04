import TinderCard from 'react-tinder-card'
import {useRef, useState, useMemo, createRef} from "react";
import questions from "../assets/questions";
import LikeIcon from "../assets/icons/liked-icon.svg?react"
import DislikeIcon from "../assets/icons/dislike-icon.svg?react"

const db = questions

function CardSwiper () {

    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        console.log(nameToDelete + ' got swiped ' + direction)
        setLastDirection(direction)
        // Remove the card from the db array
        db.splice(index, 1)
        // Update the current index after removing the card
        updateCurrentIndex(index - 1)
        // If the card was swiped to the right, restore it to its original position
        if (direction === 'right') {
            childRefs[index].current.restoreCard()
        }
    }



    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir)
            // Swipe the card!
            }else{
            console.log("on peux plus !")
        }

    }


    return (
        <>
            <div>
                <h1 className={" flex flex-row text-2xl"}>Ecolo <em>SWIPE</em> ™</h1>

                <div className='cardContainer flex justify-center'>
                    {db.map((character, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe absolute'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name, index)}

                        >
                            <div className="card w-72 h-96 bg-error shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{character.name}</h2>
                                </div>
                            </div>
                        </TinderCard>
                    ))}
                </div>
                <div className={"relative mt-[37vh] flex lg:justify-center lg:mt-[43vh] "}>
                    <DislikeIcon className={"h-16 mr-5 w-16 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:mr-5"}
                                 onClick={() => swipe('left')}/>
                    <LikeIcon className={"h-16 ml-5 w-16 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:ml-5"}
                              onClick={() => swipe('right')}/>

                </div>
                {/*<div className={"flex justify-center"}>
                {lastDirection ? (
                    <h2 key={lastDirection} className='infoText mt-4'>
                        You swiped {lastDirection}
                    </h2>
                ) : null}
            </div>*/}
            </div>

        </>

    )
}

export default CardSwiper
