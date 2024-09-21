import { Link } from 'react-router-dom';
import HeartIcon from "../assets/icons/heart-icon.svg?react"
import CardsIcon from "../assets/icons/cards-icon.svg?react"
import ProfileIcon from "../assets/icons/profile-icon.svg?react"

function NavigationFooter() {
    return(
        <>
            <div className="fixed inset-x-0 bottom-0 mx-8 mb-2.5">
                <ul className="menu menu-horizontal bg-base-200 mt-6 mb-6 w-full justify-evenly rounded-full sm:flex sm:flex-col sm:items-center md:flex md:flex-row">
                    <li className="sm:mb-4 md:mb-0">
                        <Link to="/" className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5" data-tip="Favorites">
                            <HeartIcon className="fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8 md:h-12 md:w-12"/>
                        </Link>
                    </li>
                    <li className="sm:mb-4 md:mb-0">
                        <Link to="/swipe" className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5"  data-tip="Swiper">
                            <CardsIcon className="fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8 md:h-12 md:w-12"/>
                        </Link>
                    </li>
                    <li className="sm:mb-4 md:mb-0">
                        <Link to="/profile" className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5"  data-tip="Profil">
                            <ProfileIcon className="fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8 md:h-12 md:w-12"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavigationFooter