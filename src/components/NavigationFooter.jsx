import HomeIcon from "../assets/icons/home-icon.svg?react"
import HeartIcon from "../assets/icons/heart-icon.svg?react"
import CardsIcon from "../assets/icons/cards-icon.svg?react"
import ProfileIcon from "../assets/icons/profile-icon.svg?react"
function NavigationFooter() {
    return(
        <>
            <div className="fixed inset-x-0 bottom-0 m-8">
            <ul className="menu menu-horizontal bg-base-200 mt-6 mb-6 w-full justify-evenly rounded-full sm:flex sm:flex-col sm:items-center">
                <li className="sm:mb-4">
                    <a className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5" data-tip="Home">
                        <HomeIcon className={"fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8"}/>
                    </a>
                </li>
                <li className="sm:mb-4">
                    <a className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5" data-tip="Statistics">
                        <HeartIcon className={"fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8"}/>
                    </a>
                </li>
                <li className="sm:mb-4">
                    <a className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5"  data-tip="Associations">
                        <CardsIcon className={"fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8"}/>
                    </a>
                </li>
                <li className="sm:mb-4">
                    <a className="tooltip hover:bg-[#25304F] bg-[#25304F] rounded-full p-2.5 m-0.5"  data-tip="Profile">
                        <ProfileIcon className={"fill-[#E7E7EB] hover:fill-blue-500 h-12 w-12 sm:h-8 sm:w-8"}/>
                    </a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default NavigationFooter
